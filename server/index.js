const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8000;

const flats = require("./routes/flats");
const pages = require("./routes/pages");

app.use("/flats", flats);
app.use("/pages", pages);

app.listen(port, "0.0.0.0", async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
