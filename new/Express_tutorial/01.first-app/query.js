const express = require("express");
const posts = require("./post.json");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const { key1, key4, key3 } = req.query;
  console.log({ key1, key4, key3 });
  res.send({ key1, key4, key3 });
});

app.get("/posts", (req, res) => {
  const { title, desc } = req.query;
  const titleRegex = new RegExp(title ?? '', "gi");
  const descRegex = new RegExp(desc ?? '', "gi");
  console.log(titleRegex, descRegex)
  const filter = posts.filter((p) => {
    console.log((p.title.match(titleRegex) || p.body.match(descRegex)))
    if (p.title.match(titleRegex) || p.body.match(descRegex)) return p
  });
  res.send({posts: filter})
});

app.listen(PORT, () => {
  console.log(`app runs on port ${PORT} : http://localhost:${PORT}`);
});
