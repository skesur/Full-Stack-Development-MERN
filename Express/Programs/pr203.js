// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input 
// fields, one dropdown which contains options to select like (addition, 
// subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will 
// give a message “Please enter the valid number”. Also, user must 
// select any type of formula from the dropdown else give a message 
// “You have not selected any formula”. (Message will be displayed on 
// “/calc” page.) 
// 3. If one formula is selected and numbers are entered then Both 
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”.

const express = require('express');
const app = express();
const cp = require("cookie-parser");

app.use(cp());
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"pr203.html"}))
app.post("/cal",(req,res)=>{
    res.cookie("n1",req.body.n1,{"maxAge":50000})
    res.cookie("n2",req.body.n2,{"maxAge":50000})
    res.cookie("op",req.body.op,{"maxAge":50000})
    let op = req.cookies.op;
    let no1 = parseInt(req.cookies.n1);
    let no2 = parseInt(req.cookies.n2);
    let result = 0;
    if (op=="add"){
        result = no1+no2
    }else if (op=="sub"){
        result = no1-no2
    }else if (op=="mul"){
        result = no1*no2
    }else if (op=="div"){
        result = no1/no2
    }
    res.send(`
        No 1 : ${no1}<br><br>
        No 2 : ${no2}<br><br>
        Result : ${result}
    `)
})
app.listen(3000);