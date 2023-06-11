const express = require("express");
const router = express.Router();

const { getFlats } = require("../db/flats");

router.get("/", async (req, res) => {
  const page = req.query.page ?? 1;
  const flats = await getFlats(page);

  res.json(flats);
});

module.exports = router;
