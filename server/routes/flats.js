const express = require("express");
const router = express.Router();

const { getFlats } = require("../db/flats");

router.get("/", async (req, res) => {
  const page = req.query.page ?? 1;
  const flats = await getFlats(page);

  if (!flats) {
    res.status(500).send("Error occured while getting flats");
    return;
  }
  res.json(flats);
});

module.exports = router;
