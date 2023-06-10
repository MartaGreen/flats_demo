const { getFlats } = require("./db/flats");

const express = require("express");
const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  const page = req.query.page ?? 1;
  console.log("page", page, req.query, req);
  const flats = await getFlats(page);
  console.log("got flats", flats);

  res.status(200).json(flats);
});

app.listen(port, "0.0.0.0", async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
