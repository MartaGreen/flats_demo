const { client } = require("./index.js");

const getFlats = async () => {
  const res = await client.query("SELECT * FROM flats");
  console.log("test");
  console.log(res);
  return res;
};

module.exports = { getFlats };
