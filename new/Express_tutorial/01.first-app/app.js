const express = require("express");
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Tablet", price: 399.99 },
];

app.get("/", (req, res) => {
  // res.send("this is a text test")
  // res.send("<h1> this is a html </h1>")
  res.statusCode = 200;
  res.send({ message: "this is a json" });
});

app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

app.get("/users/:ID", (req, res) => {
  const { ID } = req.params;
  const user = users.find((user) => user.id === +ID);
  if (user) {
    res.status(200).json({
      statusCode: res.statusCode,
      user,
    });
  } else {
    res.status(404).json({
      statusCode: res.statusCode,
      error: {
        message: "User not found",
      },
    });
  }
});

app.get("/products/:ID?", (req, res) => {
  const { ID } = req.params;
  if (ID) {
    const product = products.find((item) => item.id == ID);
    if (product) {
      return res.status(200).json({
        statusCode: res.statusCode,
        product,
      });
    } else {
      return res.status(404).json({
        statusCode: res.statusCode,
        error: { message: "product not found" },
      });
    }
  }
  res.status(200).json({
    statusCode: res.statusCode,
    products,
  });
});

app.get("/getAllRoute/:id?/:username?/:version", (req, res) => {
  const { id, username, version } = req.params;
  res.status(200).json({
    statusCode: res.statusCode,
    data: {
      id,
      username,
      version,
    },
  });
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}, http://localhost:${PORT}`);
});
