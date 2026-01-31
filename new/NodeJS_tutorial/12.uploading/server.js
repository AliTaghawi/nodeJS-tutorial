const { createWriteStream } = require("fs");
const http = require("http");
const multiparty = require("multiparty");
const { extname } = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/" && method === "POST") {
    const form = new multiparty.Form();
    form.parse(req)
    form.on("part", (part) => {
      const filename = Date.now() + extname(part.filename);
      part.pipe(createWriteStream(`./upload/${filename}`)).on("close", () => {
        res.writeHead(201, { "content-type": "application/json" });
        res.write(
          JSON.stringify({ message: "file uploaded successfully", filename })
        );
        res.end();
      });
    });
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
      <form action="/" enctype="multipart/form-data" method="POST">
        <input type="file" name="upload-file" />
        <button>upload</button>
      </form>
    `);
  } 
});

server.listen(PORT, () => {
  console.log(`server runs on port ${PORT}: http://localhost:${PORT}`);
});
