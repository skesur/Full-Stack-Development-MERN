// creat a file help.txt and write "Some Help Text Inside.". append this file with "appending help data". read this file and display on console. use all async functions but the order write, append, read must be followed
const fs = require("fs")

fs.writeFile("help.txt","some help text",(err)=>{
    if(err) console.log("Cannot write "+err);
    console.log("Write success");
    fs.appendFile("help.txt","\nAppend help text",(err)=>{
        if(err) console.log("Cannot append "+err);
        console.log("Append success");
        fs.readFile("help.txt","utf-8",(err,data)=>{
            if(err) console.log("read err "+err);
            else console.log(data);
            console.log("\nThank you!!!");
        });
    });
});