var express = require('express');
var router = express.Router();

// NOTE: this paths are relative to /profile/

app.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
});

module.exports = router;
