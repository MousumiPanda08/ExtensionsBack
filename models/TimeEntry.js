const mongoose = require("mongoose");

const TimeEntrySchema = new mongoose.Schema({
  website: String,
  timeSpent: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TimeEntry", TimeEntrySchema);
