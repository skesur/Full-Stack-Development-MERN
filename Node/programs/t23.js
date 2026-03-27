// craete an html file with a card with photo and name 
const http = require('http');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200, {"Content-Type":"application/json"});
        
        res.end();
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("No page found");
        res.end();
    }
}).listen(3001,()=>{console.log("Server Started")});