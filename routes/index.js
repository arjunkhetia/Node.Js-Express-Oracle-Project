var express = require('express');
var router = express.Router();
var db = require('../dbconfig');
var async = require('async');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var mydata = await db.execute(`SELECT * FROM oracletable`);
  res.render('index', { title: JSON.stringify(mydata) });
});

module.exports = router;
