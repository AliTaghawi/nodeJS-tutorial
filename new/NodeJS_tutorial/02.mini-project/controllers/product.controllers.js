const ProductModel = require("../models/product.model");
const ErrorControllers = require("./error.controllers");

async function get(req, res) {
  try {
    res.writeHead(200, { "content-type": "application/json" });
    const products = await ProductModel.find();
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function getById(req, res) {
  try {
    const id = req.url.split("/")[3];
    const product = await ProductModel.findById(id);
    if (product) {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    } else {
      ErrorControllers.productNotFound(res);
    }
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const result = await ProductModel.create({
        id: Date.now(),
        ...JSON.parse(body),
      });
      res.writeHead(201, { "content-type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  const id = req.url.split("/")[3];
  const product = await ProductModel.findById(id);
  if (!product) {
    return ErrorControllers.productNotFound(res);
  }
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    const payload = { ...JSON.parse(body) };
    const result = await ProductModel.update(id, payload);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(result));
    res.end();
  });
}

async function deleteOne(req, res) {
  const id = req.url.split("/")[3];
  const product = await ProductModel.findById(id);
  if (!product) {
    return ErrorControllers.productNotFound(res);
  }
  const result = await ProductModel.deleteOne(id);
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify(result));
  res.end();
}

const ProductControllers = {
  get,
  getById,
  create,
  update,
  deleteOne,
};

module.exports = ProductControllers;
