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
    ref: "users"
  },

  characters: [{
      type: Schema.Types.ObjectId,
      ref: "characters"
  }],
  
  isActive: {
    type: Boolean,
    default: true
  }
  
});

module.exports = Campaign = mongoose.model("campaigns", CampaignSchema);