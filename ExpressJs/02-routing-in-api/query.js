const express = require("express")
const app = express()
const posts = require("./post.json")

// const queryString = require("querystring")
// console.log(queryString.parse("key1=value1&key2=value2&key3=value3"))
// console.log(queryString.stringify({
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// }))

// app.get("/", (req, res) => {
//   res.send(req.query)
// })

app.get("/blogs", (req, res) => {
  const {title, desc} = req.query
  const regexTitle = new RegExp(title ?? "", "gi")
  const regexDesc =  desc ? new RegExp(desc ?? "", "gi") : null
  const filteredBlogs = posts.filter(post => (post.title.match(regexTitle) || post.body.match(regexDesc)))
  res.send({posts : filteredBlogs})
})

app.listen(3000, () => {
  console.log("app run on port 3000 : http://localhost:3000")
})