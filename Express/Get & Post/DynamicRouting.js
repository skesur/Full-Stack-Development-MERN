const express = require('express');
const app = express();

// Dynamic Routing

// req.params - /day/monday
// req.query - /day?q=Monday
// req.body

app.get("/day/:day",(req,res)=>{
    res.send(`Day is ${req.params.day}`);
})
app.get("/month/:month",(req,res)=>{
    res.send(`Month is ${req.params.month}`);
})
app.get("/:year/:month/:day",(req,res)=>{
    res.send(`Today is ${req.params.day}, Month is ${req.params.month}, Year is ${req.params.year}`)
})
app.all(/\w*/,(req,res)=>{
    res.status(404).send("<h1 style='color:red;'>Page Not Found</h1>")
})

app.listen(3000)