'use strict';
let express = require('express');
let router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
  res.render('main');
  let client = hbase({
    host:'localhost',
    port:4444
  });
  client.tables((error, tables) => {
    console.info(tables)
  });
  client
  .table('study:company1')
  .row('00100')
  .get('detail', (error, value) => {
    console.info(value)
  })
});
module.exports = router;
