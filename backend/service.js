const { Pool } = require("pg");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
// const notifier = require("node-notifier");

const app = express();

const pool = new Pool({
  username: "postgres",
  password: "00000",
  host: "localhost",
  database: "world_countries",
  port: 5432,
});

app.use(
  cors({
    origin: true,
    methods: "GET, POST, PUT, DELETE",
  })
);

app.use(express.json());

app.get("/api/data", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.send(result.rows);
});

app.post("/api/data/users", async (req, res) => {
  const { firstname, lastname, email, message, country, city, province } =
    req.body;

  // (firstname.length < 1 ||
  //   lastname.length < 1 ||
  //   email.length < 1 ||
  //   message.length < 1 ||
  //   country.length < 1 ||
  //   city.length < 1 ||
  //   province.length < 1) ? res.json({ successful: false, message: "All fields are required"}) : none;

  try {
    const query = `INSERT INTO users (firstname, lastname, email, message, country, city, province) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const values = [firstname, lastname, email, message, country, city, province];
    const result = await pool.query(query, values);

    res.status(200).json({ successful: true, message: "Form submitted successfully!" });
    // axios
    //   .post("/api/data/users", req.body)
    //   .then((response) => {
    //     console.log(response.data);
    //     res.json({ successful: true, message: "User added" });
    //   })
    //   .catch((error) => {
    //     console.log(error);
        // alert.error(error.message);
        // error.message !== "Request failed with status code 404" ? 
        // res.json({ successful: true, message: "Form submited succesfully" })
        // :
        // res.json({ successful: false, message: error.message });
      // });
  } catch (err) {
    // err.message !== "Request failed with status code 404" ? 
    // res.json({ successful: true, message: "Form submited succesfully" })
    // :
    res.json({ successful: false, message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
