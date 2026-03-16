// given a file nos.txt with some random numbers space saparated, read the file sort numbers in ascending order and write o/p in console and s.txt

const fs = require("fs")

var d = fs.readFileSync("./nos.txt","utf-8")

var n = d.split(" ")
console.log(n.sort((a,b)=>a-b))

fs.writeFileSync("./s.txt",n.sort((a,b)=>a-b).toString())