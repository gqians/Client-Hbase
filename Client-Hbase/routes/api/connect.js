'use strict';
const express = require('express');
const hbase = require("hbase");
let router = express.Router();
let port;
router.get('/', function (req, res) {
  port = req.query.port;
  console.info(init(port));
  init(port, res);
})

function init(newport,res) {
  let client = hbase({
    host: 'localhost',
    port: newport
  });
  client.tables((error, tables) => {
    res.json(tables);
  });
}
module.exports = router;



//client
//  .table('study:company1')
//  .row('00100')
//  .get('detail', (error, value) => {
//    console.info(value)
//  });

//const scanner = client
//  .table('study:company1')
//  .scan({
//    //startRow: 'test_scanner_get_startRow_11',
//    maxVersions: 1
//  });
//let rows = [];
//scanner.on('readable', (chunk) => {
//  while (chunk = scanner.read())
//    rows.push(chunk)
//});
////scanner.on('error', err =>
//// // throw err
////)
//scanner.on('end', () =>
//  console.info(rows)
//)
