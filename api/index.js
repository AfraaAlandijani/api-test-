const express = require("express");
const productRoute = require("../routes/productRoute");
const connectDB = require("../config/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
connectDB();

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.use("/products", productRoute);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
