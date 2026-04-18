const express = require('express');
const app = express();
const cp = require("cookie-parser");

app.use(cp());

app.get("/",(req,res)=>{
    // res.cookie("abc","SOme DAta"); // set
    // res.send(req.cookies); // get

    res.cookie("fname","Saumya");
    res.cookie("lname","Kesur");
    res.clearCookie("lname"); // delete
    res.cookie("rollNo",25,{"expires":new Date(Date.now()+5000)});
    res.cookie("marks",83,{"maxAge":2000})
    res.send(req.cookies);
})

// cookie will expire at the end of the "session" when browser is closed but in modern browser expires cookies after 400 days
// if cookies is updated then 400 days after the moment of updation

app.listen(3010);