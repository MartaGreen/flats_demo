const { client } = require("./index.js");
const PAGE_FLATS_LIMIT = 12;

const getPageAmount = async () => {
  const query = "SELECT COUNT(*) FROM flats";
  const res = await client.query(query);
  const rows = res.rows[0].count;
  const pagesAmount = Math.ceil(rows / PAGE_FLATS_LIMIT);
  console.log(pagesAmount);
};

const getFlats = async (page) => {
  const OFFSET = PAGE_FLATS_LIMIT * (page - 1);

  const query = `
    SELECT * FROM flats
    LIMIT ${PAGE_FLATS_LIMIT}
    OFFSET ${OFFSET}
  `;

  const res = await client.query(query);
  return res.rows;
};

module.exports = { getFlats, getPageAmount };
