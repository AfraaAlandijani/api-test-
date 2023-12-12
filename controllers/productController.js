const getAllProducts = async (req, res) => {
  try {
    const products = [
      { id: 1, title: "apple iphone 5", price: 300 },
      { id: 2, title: "apple iphone 6", price: 320 },
      { id: 3, title: "apple iphone 7", price: 380 },
    ];
    return res.send(products);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllProducts };
