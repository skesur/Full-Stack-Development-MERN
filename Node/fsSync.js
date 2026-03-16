const fs = require("fs")

// fs.mkdirSync("mydatasync");
// fs.writeFileSync("./mydatasync/f1.txt","Some data....");
// fs.appendFileSync("./mydatasync/f1.txt","Appended Data....")
// fs.copyFileSync("./mydatasync/f1.txt","./mydatasync/f2.txt");
// fs.renameSync("./mydatasync/f2.txt","./mydatasync/fn.txt")

// var d1 = fs.readFileSync("./mydatasync/f1.txt","utf-8")
// var d2 = fs.readFileSync("./mydatasync/fn.txt","utf-8")
// console.log(d1)
// console.log(d2)


fs.unlinkSync("./mydatasync/fn.txt")
fs.rmSync("./mydatasync",{
    "recursive":true
});
