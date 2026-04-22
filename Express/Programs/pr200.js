//  You have been assigned to develop a user feedback form for a website 
// using Express.js and cookies. Implement the following requirements: 
//  Process a form with the following fields: Name, Email , Message , Rating 
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user 
// submits the form, store their feedback information (name, email, message, 
// and rating) in a cookie named "feedback" that expires in 10 seconds. 
// Display a confirmation message to the user after successfully submitting the 
// form & Create a link to display the feedback details stored in the "feedback" 
// cookie. When the user click to the link, retrieve the feedback information 
// from the cookie and display it on the page also include a link on the 
// feedback details page to Logout. When the user clicks the link, user 
// redirected to home page. Make app.js file use get method in express js. No 
// need to write html file having form elements.

const express = require('express');
const app = express();
const cp = require("cookie-parser");

app.use(cp());
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"pr200.html"}))
app.get("/submit",(req,res)=>{
    let {name,email,area,rating} = req.query;
    let feedback = {name,email,area,rating};
    res.cookie("feedback",feedback,{"maxAge":10000})
    res.send(`
        <a href="/show">Show Feedback</a><br><br>
        <a href="/">Logout</a>
    `)
})
app.get("/show",(req,res)=>{
    res.send(`
        <h1>Feedback Info</h1><br>
        Name : ${req.cookies.feedback.name}<br>
        Email : ${req.cookies.feedback.email}<br>
        Message : ${req.cookies.feedback.area}<br>
        Rating : ${req.cookies.feedback.rating}<br><br>
        <a href="/">Logout</a>
    `)
})
app.listen(3000);