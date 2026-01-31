const express = require("express");
const camelCaseKey = (...arg) => import("camelcase-keys").then(({default: camelCaseKeys}) => camelCaseKeys(...arg) )
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(camelCaseMiddleware);

app.post("/", (req, res, next) => {
  res.send({
    body: req.body,
    query: req.query,
    params: req.params
  })
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} | http://localhost:${PORT}`);
});

async function camelCaseMiddleware(req, res, next) {
  req.body = await camelCaseKey(req.body, {deep: true})
  req.params = await camelCaseKey(req.params)
  req.query = await camelCaseKey(req.query)
  next()
}