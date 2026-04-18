// Write an express.js script to define one JSON array of 3 objects 
// having members
// ‘name’ and ‘height’. height must be sorted descending order 
// according to name

const express = require('express');
const app = express();
const data = [{
    "name":"abc",
    "height":208
},
{
    "name":"def",
    "height":158
},
{
    "name":"XYZ",
    "height":192
}]

var data1 = JSON.parse(JSON.stringify(data));

app.get("/",(req,res)=>{
    res.send(data1);
})
app.get("/sort",(req,res)=>{
    res.send(data.sort((a,b)=>b.height-a.height));
})
app.listen(5000);