const { default: mongoose } = require("mongoose")
const DB_URI = "mongodb://localhost:27017/mongoose-tutorial"
mongoose.set("strictQuery", true)
try {
  mongoose.connect(DB_URI)
  console.log("sever connected to DB")
} catch (error) {
  console.log( error.message || "InternalSeverError")
}