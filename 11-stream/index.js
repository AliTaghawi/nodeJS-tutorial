const fs = require("fs");
const readStreamData = fs.createReadStream("./read.txt");
const writeStreamData = fs.createWriteStream("./write.txt")
let counter = 0;
// let buff = []
readStreamData.on("ready", () => {
  console.log("read stream is ready");
});

readStreamData.on("data", (chunk) => {
  counter++;
  console.log("#"+counter+"th chunk data is : ")
  // console.log(chunk)
  // buff.push(chunk)
  writeStreamData.write(chunk)
})

readStreamData.on("error", (err) => {
  console.log("read stream got error: ")
  console.log(err.message)
})

readStreamData.on("end", () => {
  console.log("read stream ended")
  // console.log(buff.join())
  // console.log(buff.toString)
})
