// fkjr pjqq dzds csep

const nm = require('nodemailer');

const transport = nm.createTransport({
    host : "smtp.gmail.com",
    port : 465,
    auth : {
        user : "saumyakesur@gmail.com",
        pass : "fkjr pjqq dzds csep"
    }
});

const mailobj = {
    from : "saumyakesur@gmail.com",
    // to : "moviemaniyatube@gmail.com,qiratmukhi@gmail.com",
    bcc : "qiratmukhi@gmail.com,moviemaniyatube@gmail.com",
    subject : "TEST EMAIL",
    text : "HHAALLOOO WOORRLLDDD",
    html : "<h1 style='color:red'>HHAALLOOO WOORRLLDDD</h1>"
}

transport.sendMail(mailobj,(err,info)=>{
    if (err) console.log(err)
    else console.log(info)
})