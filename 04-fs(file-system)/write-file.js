const fs = require("fs")
const data = "Hello my New File!\n"

// blocking, non blocking

// non blocking
// fs.writeFile("write.txt", data, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("writing file is done!")
//   }
// })
// fs.writeFile("write.txt", data, {flag: 'a', encoding: "utf-8"}, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("writing file is done!")
//   }
// })


// blocking
// fs.writeFileSync("write.txt", data)
fs.writeFileSync("write.txt", data, {flag: "a", encoding: "utf-8"})