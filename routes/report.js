const express = require("express");
const router = express.Router();
const TimeEntry = require("../models/TimeEntry");
const Website = require("../models/Website");

router.get("/", async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const entries = await TimeEntry.aggregate([
      { $match: { date: { $gte: sevenDaysAgo } } },
      { $group: { _id: "$website", totalTime: { $sum: "$timeSpent" } } },
    ]);

    const result = await Promise.all(
      entries.map(async (entry) => {
        const site = await Website.findOne({ domain: entry._id });
        return {
          website: entry._id,
          totalTime: entry.totalTime,
          category: site ? site.type : "unclassified",
        };
      })
    );

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to generate report" });
  }
});

module.exports = router;
