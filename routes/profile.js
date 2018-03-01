var express = require('express');
var router = express.Router();

// NOTE: this path is relative to /profile/

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
});

module.exports = router;
