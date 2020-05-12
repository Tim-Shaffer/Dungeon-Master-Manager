const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  isMaster: {
    type: Boolean,
    defaultValue: false
  },

  date: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = User = mongoose.model("users", UserSchema);

