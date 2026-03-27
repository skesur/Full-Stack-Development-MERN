const http = require('http');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200, {"Content-Type":"application/json"});
        const js = {
            "name":"Rahul",
            "course":"NodeJS",
            "status":"Enrolled"
        }
        res.write(JSON.stringify(js))
        res.end();
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("No page found");
        res.end();
    }
}).listen(3001,()=>{console.log("Server Started")});