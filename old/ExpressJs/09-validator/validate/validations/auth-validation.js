const Schema = require("validate")

const loginSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: {
      required: "Email is required (custom)",
      match: "Email is invalid"
    }
  },
  password: {
    type: String,
    required: true,
    length: {min: 8},
    message: {
      length: "Password need to be more than 8 characters"
    }
  }
})

const registerSchema = new Schema({
  username: {
    type: String,
    required: true,
    length: {min: 5, max: 20},
    message: {
      type: "The type of username must be string",
      length: "Username needs to be more than 5 and less than 20 characters"
    }
  },
  email: {
    type: String,
    required: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: {
      required: "Email is required (custom)",
      match: "Email is invalid"
    }
  },
  password: {
    type: String,
    required: true,
    length: {min: 8},
    message: {
      length: "Password need to be more than 8 characters"
    }
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin", "writer"],
    message: {
      enum: `Role needs to be one of "user", "admin" and "writer"`
    }
  }
})

module.exports = {
  loginSchema,
  registerSchema
}