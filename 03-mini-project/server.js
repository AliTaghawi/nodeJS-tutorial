const http = require("http");
const PORT = 3000;
const productControllers = require("./controllers/product.controllers");
const errorHandlerController = require("./controllers/errorHandler.controller");

const server = http.createServer((req, res) => {
  if (req.url == "/api/products" && req.method == "GET") {
    productControllers.get(req, res);
  } else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method == "GET") {
    productControllers.getOne(req, res)
  } else {
    errorHandlerController.notFound(res)
  }
});

server.listen(PORT, () => {
  console.log(`server runs on port ${PORT}, http://localhost:${PORT}`);
});
