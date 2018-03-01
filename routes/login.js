var express = require('express');
var router = express.Router();
var passport = require('passport');

//  NOTE: All paths are relative to /login/

router.get('/',
  function(req, res){
    res.render('login');  // Renders view/login.hjs
  });

router.get('/github',
  passport.authenticate('github'));

router.get('/github/return',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/profile');
});
module.exports = router;
