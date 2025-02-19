const { createWriteStream } = require("fs");
const http = require("http");
const multiparty = require("multiparty");
const { extname } = require("path");

http.createServer((req, res) => {
  const { url, method } = req;
  if (url == "/" && method == "POST") {
    let form = new multiparty.Form();
    form.parse(req);
    form.on("part", (part) => {
      const ext = extname(part.filename)
      // part.pipe(createWriteStream(`./uploaded-files/${part.filename}`))
      part.pipe(createWriteStream(`./uploaded-files/${Date.now() + ext}`))
      .on("close", () => {
        res.writeHead(200, {
          "content-type": "text/html"
        })
        res.end(`
          <h2>File uploaded successfully: ${part.filename}</h2>
        `)
      })
    })
  } else {
    res.writeHead(200, {
      "content-type" : "text/html"
    });
    res.end(`
      <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file" />
        <button>Upload file</button>
      </form>
    `)
  }
}).listen(3000);

console.log("server is running on port 3000 : http://localhost:3000");
