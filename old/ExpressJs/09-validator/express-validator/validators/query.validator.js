const { query } = require("express-validator");

const queryValidation = () => [
  query("title").isEmpty().isString().matches(/[a-z0-9]*/gim).withMessage("invalid title"),
  query("sort").matches(/AEC|DES/).withMessage("invalid sort item")
]

module.exports = {
  queryValidation
}