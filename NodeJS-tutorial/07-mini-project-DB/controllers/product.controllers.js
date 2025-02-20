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

async function create(req, res) {
  try {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })
    req.on("end", async () => {
      const product = {...JSON.parse(body)}
      const result = await productModel.create(product);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    })
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    const id = req.url.split("/")[3]
    const product = await productModel.findById(id);
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({message: "product notFound"}));
      res.end();
      return
    }
    req.on("end", async () => {
      const parsedProduct = {...JSON.parse(body) }
      const result = await productModel.update(id ,parsedProduct);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    })
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  try {
    const id = req.url.split("/")[3]
    const product = await productModel.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({message: "product notFound"}));
      res.end();
      return
    }
    const result = await productModel.remove(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(result));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

const productControllers = {
  get,
  getOne,
  create,
  update,
  remove
};

module.exports = productControllers;
