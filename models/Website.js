const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  domain: String,
  type: {
    type: String,
    enum: ["productive", "unproductive"],
  },
});

module.exports = mongoose.model("Website", WebsiteSchema);
