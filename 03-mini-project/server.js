const http = require("http");
const PORT = 3000;
const productControllers = require("./controllers/product.controllers");

const server = http.createServer((req, res) => {
  if (req.url == "/api/products") {
    productControllers.get(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        message: "Route not found",
      })
    );
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server runs on port ${PORT}, http://localhost:${PORT}`);
});
