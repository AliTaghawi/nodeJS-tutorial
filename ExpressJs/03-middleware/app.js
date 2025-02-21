const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded())

// app.use((req, res, next) => {
//   console.log("log1")
//   next()
// }, (req, res, next) => {
//   console.log("log2")
//   next()
// })

const getTime = (req, res, next) => {
  req.time =  Date.now()
  next()
}

const auth = (req, res, next) => {
  const {username, pass} = req.query
  if (username == "seyedali" && pass == "1234") {
    return next()
  }
  res.send("you are unauthorized")
}

const log3 = (req, res, next) => {
  console.log("log3")
  next()
}

app.get("/", getTime, (req, res, next) => {
  console.log(req.time)
  res.send("finish request")
})

app.use(log3)

app.get("/user",auth, getTime, (req, res, next) => {
  console.log(req.time)
  res.send("user request")
})

app.listen(3000, () => {
  console.log("app runs on port 3000 : http://localhost:3000")
})