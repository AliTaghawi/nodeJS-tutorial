const { createReadStream, statSync } = require("fs")
const http = require("http")
const fileName = "./VID-20201215-WA0007.mp4"
http.createServer((req, res) => {
  const readStream = createReadStream(fileName)
  const {size} = statSync(fileName)
  const range = req.headers.range
  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-")
    start = parseInt(start, 10);
    end = end ? parseInt(start, 10) : size -1;
    res.writeHead(206, {
      "content-range" : `bytes ${start}-${end}/${size}`,
      "accept-ranges" : "bytes",
      "content-length": (start-end) + 1,
      "content-type" : "video/mp4"
    })
    createReadStream(fileName, {start, end}).pipe(res)
  } else {
    res.writeHead(200, {
      "Content-Type": "video/mp4"
    })
    readStream.pipe(res)
  }

}).listen(3000)
console.log("server is running on prot 3000 : http://localhost:3000")
