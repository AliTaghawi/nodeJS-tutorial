const express = require("express")
const { NotFoundError, ErrorHandler } = require("./utils/errorHandler")
const { loginSchema, registerSchema } = require("./validations/auth-validation")

const app = express() 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/login", async (req, res, next) => {
  try {
    const [error] = loginSchema.validate(req.body)
    if (error) throw error
    res.send(req.body)
  } catch (error) {
    next(error)
  }
})

app.post("/register", (req, res, next) => {
  try {
    const [error] = registerSchema.validate(req.body)
    if (error) throw error
    res.send(req.body)
  } catch (error) {
    next(error)
  }
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
  console.log("server run on port 3000 : http://localhost:3000")
})