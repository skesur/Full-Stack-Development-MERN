const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Home Page</h1>");
        res.write("<p><a href='/about'>About us</a></p>");
        res.write("<p><a href='/contact'>Contact us</a></p>");
        res.end();
    }else if(req.url=='/about'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>About us</h1>");
        res.end()
    }else if(req.url=='/contact'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Contact us</h1>");
        res.end()
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("No page found");
        res.end();
    }
}).listen(3001,()=>{console.log("Server Started")});