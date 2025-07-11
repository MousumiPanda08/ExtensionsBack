const express = require("express");
const router = express.Router();
const TimeEntry = require("../models/TimeEntry");

// Classify websites as productive/unproductive
function classifyWebsite(website) {
  const productive = [
    "github.com",
    "stackoverflow.com",
    "leetcode.com",
    "w3schools.com",
    "geeksforgeeks.org",
    "kaggle.com"
  ];
  const unproductive = [
    "youtube.com",
    "instagram.com",
    "facebook.com",
    "twitter.com",
    "tiktok.com",
    "netflix.com"
  ];

  if (productive.includes(website)) return "productive";
  if (unproductive.includes(website)) return "unproductive";
  return "unclassified";
}

// Route to receive time tracking data
router.post("/", async (req, res) => {
  try {
    const { website, timeSpent } = req.body;

    if (!website || !timeSpent) {
      return res.status(400).json({ error: "Missing website or timeSpent" });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const category = classifyWebsite(website);

    // Find if entry for the website exists today
    let entry = await TimeEntry.findOne({ website, date: today });

    if (entry) {
      entry.totalTime += timeSpent;
    } else {
      entry = new TimeEntry({
        website,
        totalTime: timeSpent,
        category,
        date: today,
      });
    }

    await entry.save();
    res.status(200).json({ message: "Time logged successfully" });

  } catch (err) {
    console.error("Error tracking time:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
