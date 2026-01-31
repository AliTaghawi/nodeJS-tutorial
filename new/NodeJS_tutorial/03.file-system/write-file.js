const fs = require("fs");
const data =
  "Hello, Node.js File System! \nThis is a test write operation. \n";

// // non-blocking write to a file
// fs.writeFile("write.txt", data, (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("Data written to file successfully.");
//   }
// });

// // 'a' flag is used to append data to the file if it exists
// fs.writeFile("write.txt", data, { encoding: "utf8", flag: "a" }, (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("Data written to file successfully.");
//   }
// });

// Synchronous write to a file (blocking)
fs.writeFileSync("write.txt", data);
console.log("Data written to file successfully (synchronous).");
// 'a' flag is used to append data to the file if it exists
fs.writeFileSync("write.txt", data, { encoding: "utf8", flag: "a" });
console.log("Data written to file successfully (synchronous).");

try {
  fs.writeFileSync("write.txt", data, { flag: "a", encoding: "utf8" });
  console.log("Data written to file successfully (synchronous)");
} catch (error) {
  console.log(error);
}
