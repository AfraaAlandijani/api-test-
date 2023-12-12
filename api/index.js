const express = require("express");
const productRoute = require("../routes/productRoute");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.use("/products", productRoute);

app.listen(3002, () => {
  console.log(`server is running at 3002`);
});
