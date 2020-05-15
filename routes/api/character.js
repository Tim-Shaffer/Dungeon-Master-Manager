const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();
const mongoose = require("mongoose");

// Load User model
const Character = require("../../models/Character");

// @route GET api/character/:id
// @desc Get Character information for the user 
// @access Public
router.get("/:id", (req, res) => {

    // Grab the Character based on the id 
    // Character.findOne({ userId: mongoose.Types.ObjectId(req.params.id) })
    Character.findOne({ userId: req.params.id })
      .populate("user")
      .then(dbChar => {
        console.log(JSON.stringify(dbChar));
        // return res.status(200).json(dbChar)
        return res.json(dbChar)
      })
      .catch( (err) => {res.json(err)})
});

// @route POST api/character/:id
router.post("/:id", (req, res) => {

  console.log(JSON.stringify(req.body));

  let newChar = {};
  newChar = {
    userId: req.params.id,
    name: req.body.name,  
    attributes: req.body.attributes
  }
  Character.create(newChar)
    .then( (dbChar) => {return res.status(200).json(dbChar)})
    .catch( (err) => {res.json(err)})

});
  
  module.exports = router;