const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret : "myKey",
    resave : false,
    saveUninitialized : false,
    cookie : {"maxAge" : 1*24*60*60*1000}
}));

app.get("/", (req,res)=>{
    if (!req.session.visits){
        req.session.visits = 1;
        res.send(`Hello 1st time user!`);
    }else{
        req.session.visits++;
        res.send(`You visited ${req.session.visits} times`);
    }

    // delete -> req.session.destroy();
});

app.listen(3000);