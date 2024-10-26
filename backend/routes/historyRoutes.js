const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/history", async (req, res) => {
  try {
    const history = await History.findAll({
      order: [["timestamp", "DESC"]],
    });
    res.json(history);
  } catch (error) {
    console.error("Failing to retreive history", error);
    res.status(500).json({ error: "Failed to retreive history" });
  }
});

router.post("/history", async (req, res) => {
  const { searchedItem } = req.body;
  try {
    const createHistory = await History.create({ searchedItem });
    res.status(201).json(createHistory);
  } catch (error) {
    console.error("Failed to save history:", error);
    res.status(500).json({ error: "Failed to save history" });
  }
});

module.exports = router;
