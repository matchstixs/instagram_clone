var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Instagram Mini' });
  res.send("Backend Server is running")
});

module.exports = router;
