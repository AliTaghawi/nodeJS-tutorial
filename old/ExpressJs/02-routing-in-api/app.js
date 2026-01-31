const express = require("express");
const app = express();
const users = [
  {id: 1, name: "user1"},
  {id: 2, name: "user2"},
  {id: 3, name: "user3"},
  {id: 4, name: "user4"},
]
const products = [
  {id: 1, name: "product1"},
  {id: 2, name: "product2"},
  {id: 3, name: "product3"},
  {id: 4, name: "product4"},
]

app.get("/", (req, res) => {
  // res.statusCode = 200;
  res.status(200).send(`
    <h2>routing section</h2>
    <ul>
      <li>
        <a href="/users">Users</a>
        <ul>
          <li><a href="/users/1">user1</a></li>
          <li><a href="/users/2">user2</a></li>
          <li><a href="/users/3">user3</a></li>
          <li><a href="/users/4">user4</a></li>
        </ul>
      </li>
      <li><a href="/products">Products</a></li>
    </ul>
  `);
});

app.get("/users", (req, res) => {
  res.status(200).json({
    statusCode: res.statusCode,
    data: {users}
  })
})

app.get("/users/:ID", (req, res) => {
  const {ID} = req.params
  const user = users.find((user) => user.id == ID)
  if (!user) {
    res.status(404).json({
      statusCode: res.statusCode,
      error : {
        message: "user not found"
      }
    })
  } else {
    res.status(200).json({
      statusCode: res.statusCode,
      data: {
        user
      }
    })
  }
})

app.get("/products/:ID?", (req, res) => {
  const {ID} = req.params
  let product = null
  if (ID) {
    product = products.find(product => product.id == ID)
    if (!product) {
      return res.status(404).json({
        statusCode: res.statusCode,
        error : {
          message: "product not found"
        }
      })
    }
    return res.status(200).json({
      statusCode: res.statusCode,
      data: {
        product
      }
    })
  }
  res.status(200).json({
    statusCode: res.statusCode,
    data: {products}
  })
})

app.get("/stuff/:id/:username/:version/:stuffID", (req, res) => {
  res.send(req.params)
})

app.listen(3000, () => {
  console.log("app runs on prot 3000 : http://localhost:3000");
});
