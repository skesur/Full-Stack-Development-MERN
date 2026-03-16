const  fs = require("fs");

console.log("read start");

// var d = fs.readFileSync("./A1.txt")
// console.log(d.toString());

fs.readFile("./A2.txt","utf-8",(err,data)=>{
    if(err) console.log("err");
    else console.log(data);
});

console.log("read end");