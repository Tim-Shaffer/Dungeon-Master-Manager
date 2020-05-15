const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();

// Load User model
const Character = require("../../models/Character");

// @route GET api/users/:id
// @desc Get User information from id found in token!
// @access Public
router.get("/:id", (req, res) => {
    // get route for the authorized user to determine if Master or Player
    // app.get("/user/:id", function(req, res) {
      
    // Grab the user based on the id from the token
    Character.findOne({ userId: req.params.id })
      .then( (dbUser) => {return res.status(200).json(dbUser)})
      .catch( (err) => {res.json(err)})
  
  });
  
  module.exports = router;