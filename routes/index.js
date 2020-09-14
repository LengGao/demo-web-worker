var express = require('express');
var router = express.Router();
var path = require('path');
var views = path.join(__dirname,'../views/')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(views+'worker1.html');
});

module.exports = router;
