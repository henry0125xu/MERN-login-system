const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connected to Mongo Altas......");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(8080, () => {
  console.log("Server is running on port 8080......");
});
