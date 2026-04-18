// Middleware == function (After request and before response)
// 2 types of middleware
// 1) in-built middleware
// 2) custom middleware

const express = require('express');
const app = express();

function f1(req,res,next){
    console.log("Hello from middleware "+new Date().toLocaleTimeString());
    next(); // If commented then it will not go to root and browser will load always
}

app.use(f1); // Global middleware
// app.use("/about", f1); // local middleware

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>"+new Date().toLocaleTimeString());
})
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>");
})
// app.get("/about",f1,(req,res)={}) // local middleware
app.listen(3000);

// error -> 1) Server already in use , 2) pointer is not blinking => change port number