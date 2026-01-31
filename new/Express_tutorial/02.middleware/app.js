const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.use(morgan("combined"))
app.use(express.json());
app.use(express.urlencoded());
app.use(mid1, mid2, (req, res, next) => {
  console.log("inside middleware");
  next();
});

app.get("/", routeMiddleware, (req, res, next) => {
  res.send({ route: "Home Page" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} | http://localhost:${PORT}`);
});

function mid1(req, res, next) {
  console.log("middleware 1");
  next();
}

function mid2(req, res, next) {
  console.log("middleware 2");
  next();
}

function routeMiddleware(req, res, next) {
  console.log("Route Middleware");
  next();
}
