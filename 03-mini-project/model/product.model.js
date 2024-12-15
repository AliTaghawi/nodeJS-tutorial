const products = require("../data/products.json");
async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find(item => item.id == id)
    resolve(product);
  });
}

const productModels = {
  find,
  findById
};

module.exports = productModels;
