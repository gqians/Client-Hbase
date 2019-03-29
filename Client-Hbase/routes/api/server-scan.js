const express = require('express');
const hbase = require("hbase");
let router = express.Router();
router.get('/', function (req, res) {
  let port = req.query.port;
  let start = req.query.start;
  let stop = req.query.stop;
  let filter = req.query.filter;
  let tablename = req.query.tablename;
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
      endRow: stop,
      filter: {
          "op": "EQUAL",
        "type": "RowFilter",
        "comparator": { "value": filter, "type": "RegexStringComparator" }
      },
      maxVersions: 1
    })
  const rows = []
  scanner.on('readable', () => {
    while (chunk = scanner.read())
      rows.push(chunk)
  })
  scanner.on('error', function (err) {
      console.log(err);
  });
  scanner.on('end', function () { 
    res.json(rows);
    console.log(rows);
  });
}
module.exports = router;
