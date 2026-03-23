const fs = require('fs');

fs.mkdirSync("MyDataDemo");
console.log("Folder created");

fs.writeFileSync("MyDataDemo/mf1.txt","Some data ...");
console.log("File written");

fs.appendFileSync("MyDataDemo/mf1.txt","Some other data ...");
console.log("File appended");

fs.copyFileSync("MyDataDemo/mf1.txt","MyDataDemo/mf1Copy.txt");
console.log("File copied");

fs.renameSync("MyDataDemo/mf1Copy.txt","MyDataDemo/mf1New.txt");
console.log("File renamed");

let d1 = fs.readFileSync("MyDataDemo/mf1.txt","utf-8");
let d2 = fs.readFileSync("MyDataDemo/mf1New.txt","utf-8");

console.log("File 1 read")
console.log(d1)

console.log("File 2 read")
console.log(d2)

fs.unlinkSync("MyDataDemo/mf1New.txt")
console.log("New file deleted")

fs.rmSync("MyDataDemo",{"recursive":true});
console.log("folder empty and deleted folder")