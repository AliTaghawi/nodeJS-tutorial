// module.exports = "commonJS default export test"

function add(a, b) {
  return a + b
}

function des (a, b) {
  return a - b
}

module.exports = {
  add,
  des
}

module.exports.test = "commonJS named exports"