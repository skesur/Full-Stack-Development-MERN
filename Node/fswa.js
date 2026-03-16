const fs = require("fs")

// Sync Function
// console.log("Write Start")
// fs.writeFileSync("./A2.txt", "Good Morning!!\nHello World!!","utf-8");
// console.log("File Written")
// console.log("Write End")

// Async Function
// console.log("Writting Starts")
// fs.writeFile("./A3.txt", "Good Night!!\nHiii World!!",(err)=>{
//     if(err) console.log("Cannot right "+err)
//     console.log("File write success")
// })
// console.log("Writting Ends")

// Sync Function
// console.log("Append start")
// fs.appendFileSync("./A2.txt", "\nGood Morning!!\nHello World!!","utf-8");
// console.log("File Appended")
// console.log("Append end")

// Async Function
console.log("Append start")
fs.appendFile("./A3.txt", "\nGood Night!!\nHiii World!!",(err)=>{
    if(err) console.log("Cannot append "+err)
    console.log("File append success")
})
console.log("Append end")