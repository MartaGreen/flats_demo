const express = require("express");
const router = express.Router();

const { getPageAmount } = require("../db/flats");

router.get("/", async (req, res) => {
  const pageAmount = await getPageAmount();

  if (!pageAmount)
    res.status(500).send("Error occured while getting pages amount");
  res.json(pageAmount);
});

module.exports = router;
