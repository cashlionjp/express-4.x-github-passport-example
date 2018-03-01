var express = require('express');
var router = express.Router();


//  NOTE: All paths are relative to /login/


app.get('/',
  function(req, res){
    res.render('login');  // Renders view/login.hjs
  });

app.get('/github',
  passport.authenticate('github'));

app.get('/github/return',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});
module.exports = router;
