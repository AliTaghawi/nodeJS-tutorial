const { body } = require("express-validator");

const loginValidator = () => [
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").isLength({min: 7, max: 20}).withMessage("Password is invalid")
  // body("password").isStrongPassword({minLength: 8, minLowercase: 1, minUppercase:1, minNumbers:1, minSymbols: 1}).withMessage("Password is invalid")
]

const registerValidator = () => [
  body("email").isEmail().withMessage("Email is invalid"),
  body("fullName").isString().isLength({min: 5, max: 40}).withMessage("your full name is shorter or larger then 5 to 40 characters"),
  body("age").custom(value => {
    if (isNaN(value)) {
      throw ("age must be number")
    } else if (+value < 13 || +value > 90) {
      throw ("age must be between 13 to 90 years old")
    } else {
      return true
    }
  }),
  body("mobile").isMobilePhone(["fa-IR", "en-US"]).withMessage("you mobile number is invalid"),
  body("password").isStrongPassword({minLength: 8, minLowercase: 1, minUppercase:1, minNumbers:1, minSymbols: 1}).withMessage("Password is invalid"),
  body("confirmPassword").custom((value, {req}) => {
    if (value != req.body.password) {
      throw new Error("password dose't match")
    } else {
      return true
    }
  }),

]

module.exports = {
  loginValidator,
  registerValidator
}