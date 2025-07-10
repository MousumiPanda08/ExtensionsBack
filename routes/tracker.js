const express = require("express");
const router = express.Router();
const TimeEntry = require("../models/TimeEntry");

router.post("/", async (req, res) => {
  const { website, timeSpent } = req.body;

  if (!website || !timeSpent) {
    return res.status(400).json({ error: "Missing website or timeSpent" });
  }

  try {
    const entry = new TimeEntry({ website, timeSpent });
    await entry.save();
    res.status(200).json({ message: "Time entry saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving entry" });
  }
});

module.exports = router;
