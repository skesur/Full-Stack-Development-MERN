const expres = require('express');
const app = expres();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("form");
})

app.get("/submit", (req,res)=>{
    res.render("submit", {"un" : req.query.un, "m" : req.query.m});
})

app.listen(3000);