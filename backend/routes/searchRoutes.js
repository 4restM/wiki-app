const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    console.log("get /search touched");
  } catch (error) {
    console.error("Error,", error);
  }
});
