const express = require("express")
const { ErrorHandler, NotFoundError } = require("./utils/errorHandler")
const { loginValidator, registerValidator } = require("./validators/auth.validator")
const { validationResult } = require("express-validator")
const { checkValidation } = require("./middlewares/validator")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res, next) => {
  res.send("hello")
})

app.post("/login",loginValidator(), checkValidation, (req, res, next) => {  
  // const error = validationResult(req)
  // // const result = error?.errors?.map((err) => {
  // //   return {[err.path]: err.msg}
  // // })
  // // res.send(result)
  // const obj = {}
  // error?.errors?.forEach(err => {
  //   obj[err.path] = err.msg
  // })
  res.send(req.body)
})

app.post("/register", registerValidator(), checkValidation, (req, res, next) => {
  res.send(req.body)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
  console.log("app runs at port 3000: http://localhost:3000")
})