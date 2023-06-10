const { Client } = require("pg");

const client = new Client({
  host: "postgres",
  port: 5432,
  database: "flats_db",
  user: "mariik",
  password: "password",
});

client.connect();

module.exports = { client };
