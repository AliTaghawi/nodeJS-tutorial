const http = require("http");
const { createReadStream, statSync } = require("fs");
const fileName = "./The Wolf of Wall Street 2013.mp4";

const server = http.createServer(async (req, res) => {
  const readStream = createReadStream(fileName);
  const { size } = statSync(fileName);
  const range = req.headers.range;
  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = +start;
    end = end? +end : size -1;
    console.log(start, end);
    res.writeHead(206, {
      "content-range": `bytes ${start}-${end}/${size}`,
      "accept-ranges": "bytes",
      "content-length": (end - start) +1,
      "content-type": "video/mp4"
    })
    createReadStream(fileName, {start, end}).pipe(res)
  } else {
    res.writeHead(200, { "content-type": "video/mp4" });
    readStream.pipe(res);
  }
});

server.listen(3000, () => {
  console.log("server runs on port 3000: http://localhost:3000");
});
