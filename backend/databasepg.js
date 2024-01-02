const { Client } = require("pg");

const client = new Client({
  username: "postgres",
  password: "00000",
  host: "localhost",
  database: "world_countries",
  port: 5432,
});

client.connect();

client.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res.rows);
  client.end();
});
