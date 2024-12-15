const productModel = require("../model/product.model");
async function get(req, res) {
  try {
    const products = await productModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function getOne(req, res) {
  try {
    const id = req.url.split("/")[3]
    const product = await productModel.findById(id);
    if (product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({message: "product notFound"}));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
}

const productControllers = {
  get,
  getOne,
};

module.exports = productControllers;
