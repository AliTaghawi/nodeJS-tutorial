const notFound = (res) => {
  res.writeHead(404, { "content-type": "application/json" });
  res.write(JSON.stringify({ message: "Not Found!" }));
  res.end();
};

const routeNotFound = (res) => {
  res.writeHead(404, { "content-type": "application/json" });
  res.write(JSON.stringify({ message: "Route Not Found!" }));
  res.end();
};

const productNotFound = (res) => {
  res.writeHead(404, { "content-type": "application/json" });
  res.write(JSON.stringify({ message: "Product Not Found!" }));
  res.end();
};

const ErrorControllers = {
  notFound,
  routeNotFound,
  productNotFound,
};

module.exports = ErrorControllers;
