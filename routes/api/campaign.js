const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();

// Load User model
const Campaign = require("../../models/Campaign");

// @route GET api/users/:id
// @desc Get User information from id found in token!
// @access Public
router.get("/:id", (req, res) => {
      
    // Grab the user based on the id from the token
    Campaign.findOne({ userId: req.params.id })
    .populate("characters")  
    .then( (dbUser) => {return res.status(200).json(dbUser)})
      .catch( (err) => {res.json(err)})
  
  });
  
  module.exports = router;