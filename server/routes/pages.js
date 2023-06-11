const express = require("express");
const router = express.Router();

const { getPageAmount } = require("../db/flats");

router.get("/", async (req, res) => {
  const pageAmount = await getPageAmount();

  res.json(pageAmount);
});

module.exports = router;
