export default "es module default export test"

function add(a, b) {
  return a + b
}

function des (a, b) {
  return a - b
}

export {
  add,
  des
}

export const test = "es module named exports"