const _ = require('lodash')
const a = [1,[1,[1,[1,[1]]]]]
const new_a = _.flattenDeep(a)
console.log(new_a)