const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CharacterSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  attributes: {
      type: Array,
      required: true
  }
  
});

module.exports = Character = mongoose.model("characters", CharacterSchema);