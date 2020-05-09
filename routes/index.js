var express = require("express");
var router = express.Router();

router.get("/", ensureAuthenticated, function(req, res) {
      res.render("index");
});

function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
            return next();
      } else {
            // req.flash('error_msg', 'You are not logged in');
            res.redirect('/users/login');
      }
}

// Export routes for server.js to use.
module.exports = router;