// Require the models
var db = require("../models");

// require necessary package
var mongoose = require("mongoose");

// export the constructor to make available in other files
module.exports = function(app) {

  // get route for the authorized user to determine if Master or Player
  app.get("/user/:id", function(req, res) {

    // Grab the user based on the id from the token
    db.User.find({ _id: req.params.id })
      .then( (dbUser) => {return res.status(400).json(dbUser)})
      .catch( (err) => {res.json(err)})

  });

};
  