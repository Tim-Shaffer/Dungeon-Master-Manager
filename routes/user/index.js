const router = require("express").Router();
const userRoutes = require("./users");


router.get("/user", ensureAuthenticated, function(req, res) {
      res.redirect("/");
});

function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
            console.log("logged In");
            return next();
      } else {
            // req.flash('error_msg', 'You are not logged in');
            res.redirect('/user/login');
      }
}

// user routes
router.use("/", userRoutes);

module.exports = router;



// // Export routes for server.js to use.
// module.exports = router;