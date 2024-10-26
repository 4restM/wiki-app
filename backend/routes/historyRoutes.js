const express = require("express");
const router = express.Router();
const { History } = require("../models"); // Import History model from models/index.js

// Endpoint to retrieve history
router.get("/history", async (req, res) => {
  try {
    const history = await History.findAll({ order: [["createdAt", "DESC"]] });
    res.json(history);
  } catch (error) {
    console.error("Failing to retrieve history", error);
    res.status(500).json({ error: "Failed to retrieve history" });
  }
});

// Endpoint to add a new search to history
router.post("/history", async (req, res) => {
  const { item } = req.body;
  try {
    const newEntry = await History.create({ item });
    res.status(201).json(newEntry);
  } catch (error) {
    console.error("Failing to add history entry", error);
    res.status(500).json({ error: "Failed to add history entry" });
  }
});

module.exports = router;
