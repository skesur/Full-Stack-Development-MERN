// Write an ExpressJS to take a textarea & submit button. After clicking 
// submit button the content of textarea should be represented on next 
// page by writing each sentence (separated by dot) in new line.

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send(`
        <html>
            <body>
                <form methond="get" action="/search">
                    <textarea name="textbox"></textarea>
                    <input type="submit" value="search">
                </form>
            </body>
        </html>                
    `)
})

app.get("/search",(req,res)=>{
    const text = req.query.textbox;
    const arr = text.replaceAll(".","<br>");
    res.send(arr);

})

app.listen(3000)