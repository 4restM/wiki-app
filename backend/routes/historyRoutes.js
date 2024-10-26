const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/history", async (req, res) => {
  const { query } = req.query;
  try {
    //todo after sequelize / mysql init
    console.log("get /history touched");
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

router.post("/history", async (req, res) => {
  const { searchInput } = req.body;
  try {
    //todo after sequelize / mysql init
    console.log("post /history touched");
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

module.exports = router;
