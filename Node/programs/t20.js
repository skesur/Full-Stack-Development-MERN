const fs = require('fs');
const url = require("url");
const http = require('http');

var u = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

var pU = url.parse(u,true);

var c1 = pU.query.c1
var c2 = pU.query.c3
var c3 = pU.hash

if(!fs.existsSync("exam.txt")){
    fs.writeFileSync("exam.txt",`${c1}\n${c2}\n${c3}`);
}

var d = fs.readFileSync("D:/A1_25/Node/programs/exam.txt","utf-8")
var b = d.replaceAll("\n","<br>");

// 2. Create Server
const server = http.createServer((req,res)=>{
    console.log(req.url)
    // 3. Write Header
    res.writeHead(200,{"Content-Type":"text/html"});
    // 4. Write Response
    res.write(`<h1 style='color:red'>${b}</h1>`);
    // 5. End Respone
    res.end();
});

// Start Your Server
server.listen(3000, ()=>{
    console.log("Server started visit http://localhost:3000");
})