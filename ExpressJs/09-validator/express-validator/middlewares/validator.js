const { validationResult } = require("express-validator")

const checkValidation = (req, res, next) => {
  const error = validationResult(req)
  const obj = {}
  error?.errors?.forEach(err => {
    obj[err.path] = err.msg
  })

  console.log(obj)
  if (Object.keys(obj).length > 0) {
    throw {
      status: 400,
      error: obj,
      message: "validation failed"
    }
  }
  next()
}

module.exports = {
  checkValidation
}