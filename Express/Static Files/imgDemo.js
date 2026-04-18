const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send(`
        <img src='./3.jpg' alt="image"/>            
    `)
})

app.listen(5000);