const fs = require("fs");

// fs.appendFile("write.txt", "\nnew data appended to file", "utf-8", (err) => {
//   if (err) console.log(err);
// });

// fs.appendFileSync("write.txt", "\nnew data appended sync to file", "utf-8"); // will add data to file

const checkExist = fs.existsSync("file.txt") // will check if file exist
if (checkExist) {
  // fs.unlink("file.txt", (err) => { // will delete file
  //   if (err) console.log(err)
  // })
  fs.unlinkSync("file.txt")
} else {
  console.log("file dose't exist!")
}
console.log("file deleted successfully 2")