const express = require('express');
const app = express();
const nm = require('nodemailer');

app.use(express.static(__dirname,{"index":"prNodeMailer.html"}));

const transport = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user : "saumyakesur@gmail.com",
        pass : "1234 1234 1234 1234"
    }
});

app.get("/submit",(req,res)=>{
    const mailObj = {
        from : "saumyakesur@gmail.com",
        bcc : req.query.to,
        subject : req.query.sub,
        text : req.query.mail
    }
    transport.sendMail(mailObj,(err,info)=>{
        if (err) console.log(err)
        else console.log(info)
    })
    res.send("Mail Sent Successfully!!!");
});

app.listen(3020);