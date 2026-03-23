// create a text file with given json object, read data from file and calculate n1 = a+b, n2 = c-b, n3 = mul all elem of c
// create a file s2.txt and write n1+n2+n3 answer in it, use async only

const fs = require('fs');

let n = fs.readFile("num.txt","utf-8",(err)=>{
    if (err) console.log(err)
})

console.log(n)