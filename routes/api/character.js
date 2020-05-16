const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();
const mongoose = require("mongoose");

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
        // return res.status(200).json(dbChar)
        return res.json(dbChar)
      })
      .catch( (err) => {res.json(err)})
});

// @route GET api/character
// @desc Get Character information for the user 
// @access Public
router.get("/", (req, res) => {

  db.Character.find()
    .then(dbChar => {
      // return res.status(200).json(dbChar)
      return res.json(dbChar)
    })
    .catch( (err) => {res.json(err)})
});

// @route POST api/character/:id
router.post("/:id", (req, res) => {

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