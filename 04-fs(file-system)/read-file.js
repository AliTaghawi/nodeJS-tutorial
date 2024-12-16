const fs = require("fs")
// blocking, non blocking

// non blocking
// console.log("--------------  ","fist log");
// fs.readFile("./file.txt", (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }
// })
// console.log("--------------  ","second log")


// blocking
console.log("--------------  ","first log")
const data = fs.readFileSync("file.txt", "utf-8")
console.log(data)
console.log("--------------  ","second log")
