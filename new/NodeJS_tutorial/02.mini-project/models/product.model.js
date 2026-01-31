const fs = require("fs");
const products = require("../data/products.json");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

async function findById(id) {
  const product = products.find((item) => item.id == id);
  return Promise.resolve(product);
}

async function create(newProduct) {
  return new Promise((resolve, reject) => {
    products.push(newProduct);
    fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(products),
      (err) => {
        if (err) reject(err);
        resolve({
          message: "new product created successfully",
          data: newProduct,
        });
      }
    );
  });
}

// آپدیت به مدل خودم
// async function update(id, payload) {
//   return new Promise((resolve, reject) => {
//     const newList = products.map(product => {
//       if (product.id == id) {
//         return {...product, ...payload}
//       }
//       return product
//     })
//     fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(newList), (err) => {
//       if (err) reject(err)
//       resolve({message: "product updated successfully"})
//     })
//   })
// }

// آپدیت به مدل دوره
async function update(id, payload) {
  return new Promise((resolve, reject) => {
    products.map((product) => {
      if (product.id == id) {
        Object.assign(product, payload);
      }
      return;
    });
    fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(products),
      (err) => {
        if (err) reject(err);
        resolve({ message: "product updated successfully" });
      }
    );
  });
}

async function deleteOne(id) {
  return new Promise((resolve, reject) => {
    const newList = products.filter((item) => item.id != id);
    fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(newList),
      (err) => {
        if (err) reject(err);
        resolve({ message: "product deleted successfully" });
      }
    );
  });
}

const ProductModels = {
  find,
  findById,
  create,
  update,
  deleteOne,
};

module.exports = ProductModels;
