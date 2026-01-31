const fs = require("fs");

// fs.appendFile("write.txt", "Hello World!\n", "utf8", (err) => {
//   if (err) console.log(err);
// });

// fs.appendFileSync("write.txt", "Hello World Sync!\n", "utf8");

const checkExists = fs.existsSync("write.txt");
if (checkExists) {
  // fs.unlink("write.txt", (err) => {
  //   if (err) console.log(err);
  // });
  fs.unlinkSync("write.txt");
} else {
  console.log("File does not exist");
}
