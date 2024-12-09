const http = require("http");
http.createServer(function(req, res){
  // res.writeHead(200, {"Content-Type": "text/plain"})
  // res.end("text response")

  // res.writeHead(200, {"Content-Type": "text/html"})
  // res.end("<h2>html response</h2>")

  // res.writeHead(200, {"Content-Type": "text/xml"})
  // res.write("<XML><Key>i'm a key</Key></XML>")
  // res.end()

  res.writeHead(200, {"Content-Type": "application/json"})
  res.write(JSON.stringify({name: "seyed ali", lastName: "taghawi"}))
  res.end()

}).listen(3000, () => {
  console.log("serve run on port 3000: http://localhost:3000")
})