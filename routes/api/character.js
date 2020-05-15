const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();
const mongoose = require("mongoose");

// Load User model
// const Character = require("../../models/Character");
// Require the models
var db = require("../../models/");

// @route GET api/character/:id
// @desc Get Character information for the user 
// @access Public
router.get("/:id", (req, res) => {

    // Grab the Character based on the userId 
    // db.Character.findOne({ userId: mongoose.Types.ObjectId(req.params.id) })
    db.Character.find({ userId: req.params.id })
      // .populate("User")
      .then(dbChar => {
        console.log(JSON.stringify(dbChar));
        // return res.status(200).json(dbChar)
        return res.json(dbChar)
      })
      .catch( (err) => {res.json(err)})
});

// @route GET api/character
// @desc Get Character information for the user 
// @access Public
router.get("/", (req, res) => {

  // console.log(count);
  db.Character.find()
    .then(dbChar => {
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
    userId: mongoose.Types.ObjectId(req.params.id),
    name: req.body.name,  
    attributes: req.body.attributes
  }
  db.Character.create(newChar)
    .then( (dbChar) => {return res.status(200).json(dbChar)})
    .catch( (err) => {res.json(err)})

});
  
  module.exports = router;