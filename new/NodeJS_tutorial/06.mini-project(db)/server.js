const http = require("http");

const ErrorControllers = require("./controllers/error.controller");
const ProductControllers = require("./controllers/product.controller");

const PORT = 3000;
const apiRoute = "/api/products";
const singleProductRegex = /\/api\/products\/[0-9]+/;
const reqMethods = {
  get: "GET",
  post: "POST",
  patch: "PATCH",
  delete: "DELETE",
};

const server = http.createServer((req, res) => {
  const URL = req.url;
  const method = req.method;
  if (URL == apiRoute && method == reqMethods.get) {
    ProductControllers.get(req, res)
  } else if (URL == apiRoute && method == reqMethods.post) {
    ProductControllers.create(req, res)
  } else if (URL.match(singleProductRegex) && method == reqMethods.get) {
    ProductControllers.getById(req, res)
  } else if (URL.match(singleProductRegex) && method == reqMethods.patch) {
    ProductControllers.update(req, res)
  } else if (URL.match(singleProductRegex) && method == reqMethods.delete) {
    ProductControllers.deleteOne(req, res)
  } else {
    ErrorControllers.routeNotFound(res)
  }
});

server.listen(PORT, () => {
  console.log(`Server runs on port: ${PORT}, http://localhost:${PORT}`);
});
