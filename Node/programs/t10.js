// create a file help.txt and write "Some Help text inside ...". append this file with "Appending help data ...". 
// read this file and display on console. use all async functions but the order write, append, read must be stictly followed.

const fs = require('fs');

fs.writeFile("help.txt","Some Help text inside ...",(err)=>{
    if (err) console.log(err);
    console.log("Write success...")
    fs.appendFile("help.txt","Appending help data ...",(err)=>{
        if (err) console.log(err);
        console.log("Append success...")
        fs.readFile("help.txt","utf-8",(err,data)=>{
            if (err) console.log(err);
            console.log("Data : "+data)
            console.log("Read success...")
        })
    })
})