const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send(`
        <html>
            <body>
                <form methond="get" action="/search">
                    <input name="q" type="text">
                    <input type="submit" value="search">
                </form>
            </body>
        </html>                
    `)
})

app.get("/search",(req,res)=>{
    res.send(`You searched for ${req.query.q}`)
})

app.listen(5000)