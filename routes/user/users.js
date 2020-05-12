var express = require("express");
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../../models/user');

// Signup /user/register
router.get("/register", function(req, res) {
      res.render("register");
});

// Login /user/login
router.get("/login", function(req, res) {
    res.render("login");
});

// Register User /user/register
router.post("/register", function(req, res) {
  
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    var isMaster = req.body.isMaster;

    // Validation
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors) {
        res.render('register', {
            errors: errors
        });
    } else {
        var newUser = new User({
            username: username,
            password: password,
            isMaster: isMaster
        });

        User.createUser(newUser, function(err, user){
            if (err) throw err;
            console.log(user);
        })

        req.flash('success-msg', 'You are registered and can now login');

        res.redirect('/');
    }
});

passport.use(new LocalStrategy(
    function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
        if (err) throw err;
        if(!user){
            return done(null, false, {message: 'Unknown User'});
        }  
        
        User.comparePassword(password, user.password,  function(err, isMatch){
            if (err) throw err;
            if(isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Invalid Password'});
            }
        });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

router.post('/login',
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/users/login', failureFlash: true}),
  function(req, res) {
    res.redirect('/users');
  });

router.get('/logout',
  function(req, res) {
    req.logOut();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
  });


// Export routes for server.js to use.
module.exports = router;