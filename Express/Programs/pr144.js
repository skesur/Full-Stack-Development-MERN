// write an express.js script to load an HTML file having username and 
// password and submit button. On clicking submit button. It should 
// jump on "check" page using "POST" method. If username is "admin" 
// , then jump on next middleware to print "welcome… admin" , if 
// username is not "admin" , then stay on same middleware to print 
// "warning msg" in red color.

const express = require('express');
const app = express();

app.use(express.urlencoded({"extended":true}));

app.get("/",(req,res)=>{
    res.send(`
        <html>
            <body>
                <form method="post" action="/check">
                    <input name="username" type="text">
                    <input name="password" type="password">
                    <input type="submit" value="search">
                </form>
            </body>
        </html>                
    `)
})

app.post("/check",(req,res)=>{
    if (req.body.username=="admin"){
        console.log(`Welcome... ${req.body.username}`);
        res.send(`Welcome... ${req.body.username}`);
    }else{
        console.log("Warning msg");
        res.send("<h1 style='color:red'>Warning msg</h1>");
    }
})

app.listen(3000);