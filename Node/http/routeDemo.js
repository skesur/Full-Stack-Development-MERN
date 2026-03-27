const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Home Page</h1>");
        res.end();
    }else if(req.url=='/about'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>About us</h1>");
        res.end()
    }else if(req.url=='/gallery'){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write('<img src="/i1" alt="Photo">');
        res.end()
    }else if(req.url=='/i1'){
        res.writeHead(200, {"Content-Type":"image/png"});
        var d = fs.readFileSync("./i1.png");
        res.end(d);
    }else if(req.url=="/login"){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<form>username: <input type='text'><br><br>password: <input type='password'><br><br><input type='submit' name='Login' value='Login'></form>")
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("No page found");
        res.end();
    }
}).listen(3001,()=>{console.log("Server Started")});