const http = require('http');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Home Page</h1>");
    }else if(req.url=='/about'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>About us</h1>");
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("No page found");
    }
}).listen(3001,()=>{console.log("Server Started")});