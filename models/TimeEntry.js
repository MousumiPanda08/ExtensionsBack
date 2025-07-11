// models/TimeEntry.js
const mongoose = require("mongoose");

const TimeEntrySchema = new mongoose.Schema({
  website: String,
  totalTime: Number,
  category: String,
  date: Date,
});

module.exports = mongoose.model("TimeEntry", TimeEntrySchema);
