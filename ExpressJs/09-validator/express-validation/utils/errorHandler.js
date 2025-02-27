const {validationMapper} = require("./express-validation-mapper")
const NotFoundError = (req, res, next) => {
  return res.status(404).json({
    statusCode: req.statusCode,
    error: {
      type: "NotFound",
      message: "route " + req.url + " not found",
    },
  });
};

const ErrorHandler = (err, req, res, next) => {
  return res.json({
    statusCode: err.status || err.statusCode || 500,
    error: {
      message: err.message || "InternalServerError",
      invalidParams: validationMapper(err),
    },
  });
};

module.exports = {
  NotFoundError,
  ErrorHandler,
};
