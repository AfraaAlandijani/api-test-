const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send({
    products: [
      { id: 1, title: "apple iphone 5", price: 300 },
      { id: 2, title: "apple iphone 6", price: 320 },
      { id: 3, title: "apple iphone 7", price: 380 },
    ],
  });
});

app.listen(3002, () => {
  console.log(`server is running at 3002`);
});
