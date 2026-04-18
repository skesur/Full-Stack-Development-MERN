const express = require('express');
const app = express();

// Middleware == function (After request and before response)
// 2 types of middleware
// 1) in-built middleware
// 2) custom middleware

app.use(express.urlencoded({"extended":true}))

app.get("/",(req,res)=>{
    res.send(`
        <html>
            <body>
                <form method="post" action="/search">
                    <input name="q" type="text">
                    <input type="submit" value="search">
                </form>
            </body>
        </html>                
    `)
})

app.post("/search",(req,res)=>{
    res.send(`You searched for ${req.body.q}`)
})

app.listen(5000)