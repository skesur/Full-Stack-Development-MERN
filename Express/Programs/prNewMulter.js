// upload multiple file on server with time stamp and also maximum size of file is 1 mb

const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs')

app.use(express.static(__dirname,{"index":"multerMultiDemo.html"}));

// var upload = multer({'dest':'./multiple'});

// app.post("/upload",upload.array("myfile"),(req,res)=>{
//     res.type("text/html");
    // if (req.files){
    //     for (let i=0;i<req.files.length;i++){
    //         fs.renameSync("./single/"+req.files[i].filename,"./single/"+req.files[i].originalname);
    //         res.write(`'${req.files[i].originalname}' is uploaded successfully in '${req.files[i].destination.split('/')[1]}' folder!!!<br>`);
    //     }
    // }else{
    //     res.send("No file to upload");
    // }
    // res.send();
// });

var store = multer.diskStorage({
    destination: "./multiple",
    filename: (req,res,cb)=>{
        for (let i=0;i<req.files.length;i++){
            cb(null,Date.now()+res.originalname)
        }
    }
})

var upload = multer({
    storage : store,
    limits : {fileSize : 1*1024*1024}
})

app.post("/upload",upload.array("myfile",5),(req,res)=>{
    if (req.files){
        for (let i=0;i<req.files.length;i++){
            res.write(`'${req.files[i].originalname}' is uploaded successfully!!!\n`);
        }
    }else{
        res.send("No file to upload");
    }
    res.send();
});

app.listen(3000);