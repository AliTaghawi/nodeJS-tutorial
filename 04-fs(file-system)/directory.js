const fs = require("fs");
const dirAddress = "./new-dir/new-one1";
const checkExist = fs.existsSync(dirAddress);

// if (checkExist) {
//   console.log("dir already exist")
// } else {
//   // fs.mkdir(dirAddress, {recursive: true}, (err) => { // without error
//   fs.mkdir(dirAddress, (err) => { // with error
//     console.log(err)
//   })
// }

// fs.mkdirSync(dirAddress) // with error
// fs.mkdirSync(dirAddress, { recursive: true }); // without error

// fs.readdir("./", (err, files) => { // will give all files and folders name of dir in array
//   console.log(files);
// });

// fs.rmdir("./new-dir", {maxRetries: 3} , (err) => { // will return error if dir not empty
//   console.log(err)
// })


// fs.rm() used for deleting both files and folders
fs.rm("./new-dir", {recursive: true} , (err) => { // will delete dir anyway even if it's not empty (will delete with all children)
  console.log(err)
})
fs.rm("test.txt", {recursive: true} , (err) => { // will delete dir anyway even if it's not empty (will delete with all children)
  console.log(err)
})