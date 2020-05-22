const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

// Require the models
var db = require("../../models/");

// @route GET api/campaign/:id
// @desc Get Campaign information from id 
// @access Public
router.get("/:id", (req, res) => {
      
    // Grab the user based on the id from the token
    db.Campaign.findOne({ userId: req.params.id, isActive: true })
    .populate("characters")  
    .then( (dbCampaign) => {
      return res.status(200).json(dbCampaign)})
    .catch( (err) => {res.json(err)})
  
  });

// @route POST api/campaign/:id
router.post("/:id", (req, res) => {

  let newCampaign = {};
  const campChars = []
  for (let i=0; i < req.body.characters.length; i++) {
    campChars.push(mongoose.Types.ObjectId(req.body.characters[i]))
  }
  newCampaign = {
    name: req.body.name, 
    userId: mongoose.Types.ObjectId(req.params.id),
    characters: campChars, 
    isActive: true,
  }
  db.Campaign.create(newCampaign)
    .then( (dbCampaign) => {return res.status(200).json(dbCampaign)})
    .catch( (err) => {res.json(err)})

});

// @route DELETE api/character/:id
router.delete("/:id", (req, res) => {

  let updateCamp = {};
  updateCamp = { 
    isActive: false
  }
  db.Campaign.findOneAndUpdate({_id: req.params.id}, updateCamp, {new: true})
    .then( (dbCamp) => {
      return res.status(200).json(dbCamp)})
    .catch( (err) => {res.json(err)})

});
  
module.exports = router;