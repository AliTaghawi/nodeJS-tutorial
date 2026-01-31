const express = require("express")
const omitEmpty = require("omit-empty")
const app = express() 
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/", deleteEmpty, (req, res, next) => {
  res.send({
    body: req.body,
    query: req.query,
    params: req.params
  })
})

app.listen(PORT, () => {
  console.log(`server runs on port ${PORT} | http://localhost:${PORT}`)
})

async function deleteEmpty(req, res, next) {
  req.body = omitEmpty(req.body, {omitZero: true})
  req.params = omitEmpty(req.params)
  req.query = omitEmpty(req.query)
  next()
}