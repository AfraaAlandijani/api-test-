const Product = require("../model/productSchema");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.send({
      message: "return all the products",
      products: products,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllProducts };
