// create a user signup form using Express.js and cookies. Implement the following 
// requirements:
// Create a form with the following fields:
// o Name (input field)
// o Email (input field)
// o Gender (radio buttons: Male, Female, Others)
// o Submit button
// When the user submits the form, store their information (name, email, gender) in a 
// cookie named "registered" that expires in 15 seconds.
// Display a confirmation message to the user after successfully submitting the form & 
// Create a link to display the details stored in the "registered" cookie.
// When the user clicks to the link, retrieve the information from the cookie and display 
// it on the /details page also include a link on the /details page to Logout. When the 
// user clicks the link, user redirected to home page.
// Use post method.

const express = require('express');
const app = express();
const cp = require("cookie-parser");

app.use(cp());
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"pr208.html"}))

app.post("/submit",(req,res)=>{
    let {name,email,gender} = req.body;
    let registered = {name,email,gender};
    res.cookie("registered",registered,{"maxAge":15000});
    res.send(`You submitted form <a href="/details" >View Details </a>`)
})

app.get("/details",(req,res)=>{
    res.send(`
        <h1>Registered Info</h1><br>
        Name : ${req.cookies.registered.name}<br>
        Email : ${req.cookies.registered.email}<br>
        Gender : ${req.cookies.registered.gender}<br><br>
        <a href="/">Logout</a>
    `)
})

app.listen(3020);