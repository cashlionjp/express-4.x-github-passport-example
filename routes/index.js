var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express.js and Passport.js - Login with GitHub' });
});

module.exports = router;
