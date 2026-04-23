//  write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to 
// savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session 
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret : "myKey",
    resave : false,
    saveUninitialized : false,
    cookie : {"maxAge" : 1*24*60*60*1000}
}));

app.use(express.urlencoded({"extended":true}));
app.use(express.static(__dirname,{"index":"pr197.html"}));

app.get("/username",(req,res)=>{
    if (!req.session.username){
        req.session.username = req.query.name;
    }  
    res.redirect("/fetchsession");
})

app.get("/fetchsession", (req,res)=>{
    res.send(`
        Session : ${req.session.username}<br><br>
        <form method="get" action="/logout">
            <input type="submit" value="logout">
        </form>
    `);
});

app.get("/logout", (req,res)=>{
    req.session.destroy();
    res.redirect("/");
})

app.listen(3010);