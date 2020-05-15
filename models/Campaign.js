const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CampaignSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  characters: [{
      type: Schema.Types.ObjectId,
      ref: "Character"
  }],
  
});

module.exports = Campaign = mongoose.model("campaigns", CampaignSchema);