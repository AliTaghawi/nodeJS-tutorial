const ProductModels = require("../models/product.model");
const ErrorControllers = require("./error.controller");

async function get(req, res) {
  try {
    const product = await ProductModels.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {
    console.log(error);
    ErrorControllers.internalError(res);
  }
}

async function create(req, res) {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const payload = JSON.parse(body);
      const result = await ProductModels.create(payload);
      console.log(result);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Product created successfully" }));
      res.end();
    });
  } catch (error) {
    console.log(error);
    ErrorControllers.internalError(res);
  }
}

async function getById(req, res) {
  try {
    const id = req.url.split("/")[3];
    const product = await ProductModels.findOne(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {
    console.log(error);
    ErrorControllers.internalError(res);
  }
}

async function update(req, res) {
  const id = req.url.split("/")[3];
  const product = await ProductModels.findOne(id);
  console.log(product);
  if (!product) {
    return ErrorControllers.productNotFound(res);
  }
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const payload = JSON.parse(body);
      const result = await ProductModels.updateOne(id, payload);
      console.log(result);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Product updated successfully" }));
      res.end();
    });
  } catch (error) {
    console.log(error);
    ErrorControllers.internalError(res);
  }
}

async function deleteOne(req, res) {
  const id = req.url.split("/")[3];
  const product = await ProductModels.findOne(id);
  console.log(product);
  if (!product) {
    return ErrorControllers.productNotFound(res);
  }
  try {
    const result = await ProductModels.deleteOne(id);
    console.log(result);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Product deleted successfully", data: result }));
    res.end();
  } catch (error) {
    console.log(error);
    ErrorControllers.internalError(res);
  }
}

const ProductControllers = {
  get,
  create,
  getById,
  update,
  deleteOne,
};

module.exports = ProductControllers;
