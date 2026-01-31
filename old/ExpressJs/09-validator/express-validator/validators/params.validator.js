const { param } = require("express-validator");

const IDValidation = param("id").isMongoId().withMessage("invalid ID")

module.exports = {
  IDValidation
}