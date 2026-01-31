// const http = require("http");
const http = require("http")

http
  .createServer((req, res) => {
    // res.writeHead(200, { "content-type": "text/plain" });
    // res.writeHead(200, { "content-type": "text/html" });
    res.writeHead(200, { "content-type": "application/json" });
    // res.end("this is text")
    // res.write("<h1>this is a html</h1>")
    res.write(JSON.stringify({name: "test", type: "json"}))
    res.end()
  })
  .listen(3000, () => {
    console.log("server run on port 3000,   http://localhost:3000");
  });
