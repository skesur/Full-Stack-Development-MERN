const express = require('express');
const app = express();

app.get("/",(req,res,next)=>{
    console.log("First Hello");
    next();
})
app.get("/",(req,res,next)=>{
    console.log("Second Hello");
    next();
})
app.get("/",(req,res)=>{
    console.log("Final Hello");
    res.send("<h1>Final Final Hello</h1>")
})

app.listen(5000);