const { getFlats, getPageAmount } = require("./db/flats");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8000;

app.get("/flats", async (req, res) => {
  const page = req.query.page ?? 1;
  const flats = await getFlats(page);

  res.json(flats);
});

app.get("/pages", async (req, res) => {
  const pageAmount = await getPageAmount();

  res.json(pageAmount);
});

app.listen(port, "0.0.0.0", async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
