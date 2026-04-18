// Write an expressJS code which loads login.html file upon browsing 
// localhost:3010. The Login.html file contains input for 
// username,password and two checkboxes named remember and 
// subscribe,on submitting the file it should go to /data page where 
// username,password and selected checkboxes are pinted,in addition to 
// that a logout button should be there,onclicking this button it should 
// go back to home page “localhost:3010/”.(GET/POST any method can 
// be used)[Write all necessary files code]

const express = require('express');
const app = express();

app.use(express.static(__dirname,{"index":"pr153.html"}))
app.get("/login",(req,res)=>{
    res.send(`
        Username : ${req.query.username}<br><br>
        Password : ${req.query.password}<br><br>
        Remember Me : ${(req.query.remember)?"Yes":"No"}<br><br>
        Subscribe : ${(req.query.subscribe)?"Yes":"No"}<br><br>
        <form action="/">
            <input type='submit' value='logout'>
        </form>`)
})
app.listen(3010);