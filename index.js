const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB using MONGO_URI from CodeSandbox DevTool
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import routes
const trackerRoutes = require("./routes/tracker");
const reportRoutes = require("./routes/report");

// Use routes
app.use("/api/track", trackerRoutes);
app.use("/api/report", reportRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
