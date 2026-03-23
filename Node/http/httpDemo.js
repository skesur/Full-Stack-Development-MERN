// Imp Types of Content-Type
// 1) text/plain
// 2) text/html
// 3) text/css
// 4) application/json
// 5) application/js
// 6) image/jpg
// 7) image/png

// 1. Require
const http = require('http');

// 2. Create Server
const server = http.createServer((req,res)=>{
    console.log(req.url)
    // 3. Write Header
    res.writeHead(200,{"Content-Type":"text/html"});
    // 4. Write Response
    res.write("<h1 style='color:red'> Hello World !!! <h1>");
    // 5. End Respone
    res.end();
});

// Start Your Server
server.listen(3000, ()=>{
    console.log("Server started visit http://localhost:3000");
})