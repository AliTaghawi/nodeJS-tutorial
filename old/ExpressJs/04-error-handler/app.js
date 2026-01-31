const express = require("express")
const app = express()

app.get("/", (req, res, next) => {
  // console.log(number) // number is not defined to receive error
  // res.send("<h1>error handler chapter.</h1>")
  try {
    console.log(number) // number is not defined to receive error
    res.send("<h1>error handler chapter.</h1>")
  } catch (error) {
    next(error)
  }
})

// ... routes

app.use((req, res, next) => {
  res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: "notFound",
      // message: `method "${req.method}" in route "${req.url}" not found!`
      message: 'method: ' + req.method + ' in route ' + req.url + ' not found!'
    },
    data: null
  })
})

app.use((err, req, res, next) => {
  return res.json({
    statusCode: err.status || 500, 
    error : {
      message: err.message || "InternalServerError!"
    }
  })
})

app.listen(3000, () => {
  console.log("app runs on port 3000 : http://localhost:3000")
})