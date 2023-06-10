const { client } = require("./index.js");

const getFlats = async (page) => {
  const LIMIT = 25;
  const OFFSET = LIMIT * (page - 1);

  const query = `
    SELECT * FROM flats
    LIMIT ${LIMIT}
    OFFSET ${OFFSET}
  `;

  const res = await client.query(query);
  return res.rows;
};

module.exports = { getFlats };
