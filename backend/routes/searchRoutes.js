const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json",
      },
    });
    res.json(response.data.query.search);
  } catch (error) {
    res.status(500).send("Error retreiving data from wikipedia");
  }
});
