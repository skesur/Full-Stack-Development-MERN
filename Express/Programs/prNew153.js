const express = require('express');
const app = express();

app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"prNew153.html"}))
app.post("/cal",(req,res)=>{
    let op = req.body.op;
    let no1 = parseInt(req.body.no1);
    let no2 = parseInt(req.body.no2);
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
app.listen(3010);