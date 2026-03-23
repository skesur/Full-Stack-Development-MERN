// given a file nos.txt with some random numbers space separated, read the file sort number in ascending numbers and write output 
// in console and s.txt

const fs = require('fs');

let f = fs.readFileSync("nos.txt","utf-8").split(" ")
console.log(f)

let n = f.sort((a,b)=>a-b)
console.log(n)

fs.writeFileSync("s.txt",n.toString(),(err)=>{
    if (err) console.log(err);
})