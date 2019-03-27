const express = require('express');
const hbase = require("hbase");
let router = express.Router();
router.get('/', function (req, res) {
  let port = req.query.port;
  let start = req.query.start;
  let stop = req.query.stop;
  let filter = req.query.filter;
  let tablename = req.query.tablname;
  //console.info(init(port));
  scan(port, start, stop, filter, tablename, res);
})
function scan(port, start, stop, filter, tablename, res) {
  let client = hbase({
    host: 'localhost',
    port: port
  });
  const scanner = client
    .table(tablename)
    .scan({
      startRow: start,
      stopRow: stop,
      filter: {
        "op": "MUST_PASS_ALL", "type": "FilterList", "filters": [{
          "op": "EQUAL",
          "type": "RowFilter",
          "comparator": { "value": filter, "type": "RegexStringComparator" }
        }]
      },
      maxVersions: 1
    })
  const rows = []
  scanner.on('readable', () => {
    while (chunk = scanner.read())
      rows.push(chunk)
  })
  //  scanner.on('error',err =>
  //  throw(err)
  //)
  scanner.on('end', () =>
    console.info(rows)
  )
}
module.exports = router;
