const products = require("../data/products.json");
async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

const productModels = {
  find,
};

module.exports = productModels;
