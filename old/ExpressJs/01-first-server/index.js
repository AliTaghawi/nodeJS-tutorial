const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("welcome to route...");
  // res.send("Hello ExpressJS")
  // res.send("<h1>Hello ExpressJS</h1>")
  res.status(200).send({ message: "Hello ExpressJS" });
});

app.listen(3000, () => {
  console.log("server run on port 3000: http://localhost:3000");
});
