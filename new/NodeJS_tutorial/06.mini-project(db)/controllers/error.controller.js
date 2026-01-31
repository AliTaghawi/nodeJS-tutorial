const routeNotFound = (res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "Route Not Found!" }));
  res.end();
};

const productNotFound = (res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "Product Not Found!" }));
  res.end();
};

const internalError = (res) => {
  res.writeHead(500, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "Internal server error!" }));
  res.end();
}

const ErrorControllers = {
  routeNotFound,
  internalError,
  productNotFound,
}


module.exports = ErrorControllers;
