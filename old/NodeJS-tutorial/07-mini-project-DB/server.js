const http = require("http");
const PORT = 3000;
const productControllers = require("./controllers/product.controllers");
const errorHandlerController = require("./controllers/errorHandler.controller");

const server = http.createServer((req, res) => {
  if (req.url == "/api/products" && req.method == "GET") {
    productControllers.get(req, res);
  } else if (req.url == "/api/products" && req.method == "POST") {
    productControllers.create(req, res)
  } else if (req.url.match(/\/api\/products\/[0-9]+[a-z]+/) && req.method == "GET") {
    productControllers.getOne(req, res)
  } else if (req.url.match(/\/api\/products\/[0-9]+[a-z]+/) && req.method == "PATCH") {
    productControllers.update(req, res)
  } else if (req.url.match(/\/api\/products\/[0-9]+[a-z]+/) && req.method == "DELETE") {
    productControllers.remove(req, res)
  } else {
    errorHandlerController.notFound(res)
  }
});

server.listen(PORT, () => {
  console.log(`server runs on port ${PORT}, http://localhost:${PORT}`);
});
