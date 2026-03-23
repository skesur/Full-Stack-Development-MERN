const fs = require("fs");

console.log("ReadStart1");
let d = fs.readFileSync("a1.txt","utf-8");
console.log(d);
console.log("ReadEnd1\n");

console.log("ReadStart2");
fs.readFile("a1.txt","utf-8",(err,data)=>{
    if(err) console.log(err)
    console.log(data)
});
console.log("ReadEnd2");
