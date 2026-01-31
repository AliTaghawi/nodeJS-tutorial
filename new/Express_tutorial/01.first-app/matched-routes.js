const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.status(200).send("hello routes")
})

app.get("/file.txt", (req, res) => { // . is accepted in route
  res.status(200).send("Accepted " + req.url)
})

// app.get("/ab?cd", (req, res) => { // b is optional
//   res.status(200).send("Accepted " + req.url)
// })

// app.get("/ab+cd", (req, res) => { // b can be one or more
//   res.status(200).send("Accepted " + req.url)
// })

// app.get("/ab*cd", (req, res) => { // ab(alphabet-numeric)cd => any thing can be in (*) place
//   res.status(200).send("Accepted " + req.url)
// })

// app.get("/ab(cd)?e", (req, res) => { // cd  together is optional => /abcde or /abe
//   res.status(200).send("Accepted " + req.url)
// })

// app.get(/a/, (req, res) => { // any route that has "a" letter
//   res.status(200).send("Accepted " + req.url)
// })

// app.get(/[a-z0-9\._]{5,50}@[a-z]{1,7}\.[a-z]{2,10}/ig, (req, res) => { // route takes email
//   res.status(200).send("Accepted " + req.url)
// })

app.get(/.*nodejs$/, (req, res) => { // any route that ends with "nodejs"
  res.status(200).send("Accepted " + req.url)
})

app.listen(3000, () => {
  console.log("app runs on port 3000 : http://localhost:3000")
})