const express = require('express');
const app = express();

// app => get, post, put, delete, all
// res => set("content-type", "text/plain"), type ("text/plain"), setHeader ("content-type","text/html")

app.get("/",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1>Hello World</h1>");
    res.end("Last Line")
    // if you write res.send("string") after res.send("string") or res.write() then it will give error
});
app.get("/about",(req,res)=>{
    res.set("content-type","text/html");
    res.end("<h1>This is About Us Page</h1>");
});
app.get("/api",(req,res)=>{
    var s1 = {
        "name":"abc",
        "rollno":20
    };
    //res.send(s1) // {"name":"abc","rollno":20} (json)
    //res.send("data"+s1); // data[object Object]
    res.send("data"+JSON.stringify(s1));
})

// listen => (PORT, server_name, allowed_REQUEST_queue, Callback)

app.listen(3000,"localhost",100,()=>{console.log("Server Started!");});