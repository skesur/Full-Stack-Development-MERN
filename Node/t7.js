// create a text file with given JSON obj  read data from file and cal. n1=a+b, n2=c-b and n3=mul all elements of c. crete a file s2.txt and write n1 + n2 + n3 in it
const fs = require("fs");
fs.readFile("num.txt","utf-8",(err,data)=>{
    if(err) console.log(err)
    d = JSON.parse(data)
    console.log(d)
})