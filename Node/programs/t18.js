// Use "events" module to execute async func syncly 
// cfol- Create folder abc if it does not exists, write "Folder created"
// cfile- Create and write ina file "xyz.txt", write "File created"
// afile- Append in file "xyz.txt", write "Append success"
// rfile- Read data from file and write in console
// dfol- Delete folder and file, write "All operations complete"

const fs = require('fs');
const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("cfol",()=>{
    if(!fs.exists(`abc`,(err)=>{})){
        fs.mkdir(`abc`,(err)=>{
            if(!err){
                console.log("Create folders if not exists");
                ee.emit("cfile")
            }
        });
    }
})
ee.on("cfile",()=>{
    if(!fs.exists(`abc/xyz.txt`,(err)=>{})){
        fs.writeFile(`abc/xyz.txt`,"Some data ...",(err)=>{
            if(!err){
                console.log("Create and write file with data")
                ee.emit("afile")
            }
        });
    }
})
ee.on("afile",()=>{
    if(!fs.exists(`abc/xyz.txt`,(err)=>{})){
        fs.appendFile(`abc/xyz.txt`,"Some data ...",(err)=>{
            if(!err){
                console.log("append file with data")
                ee.emit("rfile")
            }
        });
    }
})
ee.on("rfile",()=>{
    if(!fs.exists(`abc/xyz.txt`,(err)=>{})){
        fs.readFile(`abc/xyz.txt`,"utf-8",(err,data)=>{
            if (!err){
                console.log(data)
                ee.emit("dfol")
            }   
        });
    }
})
ee.on("dfol",()=>{
    if(!fs.exists(`abc/xyz.txt`,(err)=>{})){
        fs.rm(`abc`,{"recursive":true},(err)=>{});
        console.log("File and Folder deleted")
        console.log("All operations complete")
    }
})

ee.emit("cfol")