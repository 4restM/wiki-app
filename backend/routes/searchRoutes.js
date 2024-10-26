const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/search", async (req, res) => {
  const { query } = req.query;
  console.log(`Searching for ${query}`);

  try {
    const response = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json",
      },
    });
  } catch (error) {
    console.error("Error retrieving data from Wikipedia:", error.message);
    res.status(500).send("Error retrieving data from Wikipedia");
  }
});

module.exports = router;
