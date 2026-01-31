const Joi = require("joi")

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(50).required().pattern(/[a-zA-Z0-9]{7,50}/),
})

const registerValidationSchema = Joi.object({
  email: Joi.string().email().message("Email is not valid").required(),
  password: Joi.string().min(7).max(50).required().pattern(/[a-zA-Z0-9]{7,50}/),
  confirmPassword: Joi.ref("password"),
  username: Joi.string().alphanum().min(4).max(50).required(),
  age: Joi.number().integer().min(15).max(90).required(),
})


module.exports = {
  loginValidationSchema,
  registerValidationSchema
}