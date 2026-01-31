const fs = require("fs");


// blocking vs non-blocking


// // Non-blocking example
// console.log("first log");
// fs.readFile("file.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("file data:", data.toString());
//   }
// });
// console.log("last log");
// // Output will be:
// // first log
// // last log
// // file data: <contents of file.txt>



// Blocking example
console.log("first log");
const data = fs.readFileSync("file.txt", "utf8");
console.log("file data:", data);
console.log("last log");
// Output will be:
// first log
// file data: <contents of file.txt>
// last log
