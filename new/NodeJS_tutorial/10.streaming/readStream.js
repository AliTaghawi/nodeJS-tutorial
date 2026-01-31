const fs = require("fs");

const readStreamData = fs.createReadStream("./read.txt");
const writeStreamData = fs.createWriteStream("./write.txt");

let counter = 0;
readStreamData.on("ready", () => {
  console.log("ready to stream \n");
});

readStreamData.on("data", (chunk) => {
  counter++;
  console.log(`\n#${counter}th chunk of stream data:`);
  writeStreamData.write(chunk);
});

readStreamData.on("error", (err) => {
  console.log("An error in reading happened: ", err);
});

writeStreamData.on("error", (err) => {
  console.log("An error in writing happened: ", err);
});

readStreamData.on("end", () => {
  console.log("\nstreaming ended");
});

writeStreamData.on("close", () => {
  console.log("writing is finish");
});
