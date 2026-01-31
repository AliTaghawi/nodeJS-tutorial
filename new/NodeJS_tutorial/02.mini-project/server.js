const http = require("http");
// const products = require("./data/products.json");
const ProductControllers = require("./controllers/product.controllers");
const ErrorControllers = require("./controllers/error.controllers");

const PORT = 3000;
const productRoute = "/api/products";
const singleProductRegex = /\/api\/products\/[0-9]+/;

const server = http.createServer((req, res) => {
  const URL = req.url;
  const method = req.method;

  if (URL == productRoute && method == "GET") {
    ProductControllers.get(req, res);
  } else if (URL == productRoute && method == "POST") {
    ProductControllers.create(req, res);
  } else if (URL.match(singleProductRegex) && method == "GET") {
    ProductControllers.getById(req, res);
  } else if (URL.match(singleProductRegex) && method == "PATCH") {
    ProductControllers.update(req, res);
  } else if (URL.match(singleProductRegex) && method == "DELETE") {
    ProductControllers.deleteOne(req, res);
  } else {
    ErrorControllers.routeNotFound(res);
  }
});

server.listen(PORT, () => {
  console.log(`server runs on PORT ${PORT},  http://localhost:${PORT}`);
});
