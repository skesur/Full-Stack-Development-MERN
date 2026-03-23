// given a path "LJU/abc/t1.txt", find name of folder and create that folder. extract name of file and create that 
// file in given folder at current location with some data. Copy this file to other file at same location. Delete 
// original file and print data from copy file.

const fs = require('fs');
const path = require('path');

var f = "LJU/abc/t1.txt";
var dir = path.dirname(f);
var b = path.basename(f);
var base = path.basename(f).split(".")[0];
var ext = path.extname(f);

console.log(dir,base,ext)

if(!fs.existsSync(`${dir.split("/")[0]}`)){
    fs.mkdirSync(dir.split("/")[0]);
}
if(!fs.existsSync(`${dir.split("/")[0]}/${dir.split("/")[1]}`)){
    fs.mkdirSync(`${dir.split("/")[0]}/${dir.split("/")[1]}`);
}
console.log("Create folders if not exists");

if(!fs.existsSync(`${dir.split("/")[0]}/${dir.split("/")[1]}/${base}${ext}`)){
    fs.writeFileSync(`${dir.split("/")[0]}/${dir.split("/")[1]}/${base}${ext}`,"Some data ...");
}
console.log("Create and write file with data")

if(!fs.existsSync(`${dir.split("/")[0]}/${dir.split("/")[1]}/${base}Copy${ext}`)){
    fs.copyFileSync(`${dir.split("/")[0]}/${dir.split("/")[1]}/${base}${ext}`,`${dir.split("/")[0]}/${dir.split("/")[1]}/${base}Copy${ext}`);
}
console.log("Data copied in a copy file")

fs.unlinkSync(path.join(dir,b));
console.log("Original file deleted");

var read = fs.readFileSync(path.join(dir,`${base}Copy${ext}`));
console.log("Copied Data : "+read);
