const express = require("express")
const morgan = require("morgan")
const camelCaseKey = (...args) => import("camelcase-keys").then(({default: camelCaseKeys}) => camelCaseKeys(...args))
const omitEmpty = require("omit-empty")
const app = express()

// app.use(morgan("combined"))
app.use(morgan(':method :url :status :response-time ms :user-agent'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(camelCase)

async function camelCase(req, res, next) {
  req.body = await camelCaseKey(req.body, {deep: true})
  req.query = await camelCaseKey(req.query)
  req.params = await camelCaseKey(req.params)
  next()
}
function removeEmptyFields(options = {}) {
  return function(req, res, next) {
    req.body = omitEmpty(req.body, options)
    next()
  }
}

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

// const log3 = (req, res, next) => {
//   console.log("log3")
//   next()
// }

app.get("/", getTime, (req, res, next) => {
  console.log(req.time)
  res.send("finish request")
})

// app.use(log3)

app.get("/user",auth, getTime, (req, res, next) => {
  console.log(req.time)
  res.send("user request")
})

app.post("/blogs", (req, res, next) => {
  res.send({
    body: req.body,
    query: req.query,
    params: req.params
  })
})

app.post('/create',removeEmptyFields(), (req, res) => {
  res.send({
    body: req.body
  })
})

app.listen(3000, () => {
  console.log("app runs on port 3000 : http://localhost:3000")
})