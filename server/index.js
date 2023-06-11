const { getFlats, getPageAmount } = require("./db/flats");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8000;

app.get("/", async (req, res) => {
  const page = req.query.page ?? 1;
  const pageAmount = await getPageAmount();
  const flats = await getFlats(page);

  res.json(flats);
});

app.listen(port, "0.0.0.0", async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
