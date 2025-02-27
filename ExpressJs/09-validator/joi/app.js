const express = require("express")
const { NotFoundError, ErrorHandler } = require("./utils/errorHandler")
const { loginValidationSchema, registerValidationSchema } = require("./validations/auth.validation")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/login", async (req, res, next) => {
  try {
    await loginValidationSchema.validateAsync(req.body)
    res.send(req.body)
  } catch (error) {
    error.status = 400
    next(error)
  }
})

app.post("/register", async (req, res, next) => {
  try {
    const {confirmPassword} = req.body
    if (!confirmPassword) throw {message: "Confirming password is required"}
    await registerValidationSchema.validateAsync(req.body)
    res.send(req.body)
  } catch (error) {
    error.status = 400
    next(error)
  }
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
  console.log("server run on port 3000 : http://localhost:3000")
})