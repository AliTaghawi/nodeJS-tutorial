// const commonJSdefault = require("./commonjs-module")
// console.log(commonJSdefault)

// const {add, test , des} = require("./commonjs-module")
// console.log(add(3, 2), test, des(5, 2))

import esDefault, {add , des, test} from "./es-module.js"
console.log(esDefault);

console.log(add(3, 2), test, des(5, 2))