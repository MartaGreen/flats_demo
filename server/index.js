const { getFlats } = require("./db/flats");

const express = require("express");
const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send("<h1>Hello world</h1>");
});

app.listen(port, "0.0.0.0", async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  const flats = await getFlats();
  console.log("got flats", flats);
});
