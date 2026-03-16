const fs = require("fs")

fs.mkdir("mydatasync",(err)=>{
    if(err) console.log("err mkdir")
    else console.log("mkdir")
});
fs.writeFile("./mydatasync/f1.txt","Some data....",(err)=>{
    if(err) console.log("err write filr")
    else console.log("write file")
});
fs.appendFile("./mydatasync/f1.txt","Appended Data....",(err)=>{
    if(err) console.log("err append file")
    else console.log("append file")
})
fs.copyFile("./mydatasync/f1.txt","./mydatasync/f2.txt",(err)=>{
    if(err) console.log("err copy file")
    else console.log("copy file")
});
fs.rename("./mydatasync/f2.txt","./mydatasync/fn.txt",(err)=>{
    if(err) console.log("err rename file")
    else console.log("rename file")
})

fs.readFile("./mydatasync/f1.txt","utf-8",(err,data)=>{
    if(err) console.log("err read")
    else console.log(data)
})
fs.readFile("./mydatasync/fn.txt","utf-8",(err,data)=>{
    if(err) console.log("err read")
    else console.log(data)
})

fs.rm("./mydatasync",{
    "recursive":true
}, (err)=>{
    if(err) console.log("err delete")
    else console.log("deleted")
});
