const express = require('express');
const app = express();

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("entry",{
        "user":"Saumya"
    })
});

app.get("/marksheet",(req,res)=>{
    res.render("marksheet",{
        "T1":parseInt(req.query.t1),
        "T2":parseInt(req.query.t2),
        "T3":parseInt(req.query.t3),
        "T4":parseInt(req.query.t4),
        "Total": parseInt(req.query.t1)+parseInt(req.query.t2)+parseInt(req.query.t3)+parseInt(req.query.t4)
    })
});

app.listen(3000);