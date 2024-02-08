let a = 34 ;
const {readFileSync,writeFileSync} = require('fs');
// const information = require('./1-names')
// const os = require('os')
// console.log(information)
// if(a<50){
//     console.log("your number is too small")
// }
// else{
//     console.log("your number is too high")
// }
// console.log(module)
// console.log(os.userInfo())
// console.log(os.uptime())
const first = readFileSync('./text.txt','utf-8');
console.log(first)