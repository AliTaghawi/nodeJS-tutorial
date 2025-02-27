const express = require("express")
const { validate } = require("express-validation")
const { loginValidation, registerValidation } = require("./validations/auth.validation")
const { NotFoundError, ErrorHandler } = require("./utils/errorHandler")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/login", validate(loginValidation), (req, res, next) => {
  res.send(req.body)
})

app.post("/register", validate(registerValidation), (req, res, next) => {
  res.send(req.body)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
  console.log("app run on port 3000 : http://localhost:3000")
})