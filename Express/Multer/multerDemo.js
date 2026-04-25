const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs')

app.use(express.static(__dirname,{"index":"multerDemo.html"}));

// var upload = multer({'dest':'./single'});

// app.post("/upload",upload.single("myfile"),(req,res)=>{
//     if (req.file){
//         fs.renameSync("./single/"+req.file.filename,"./single/"+req.file.originalname);
//         res.send(`'${req.file.originalname}' is uploaded successfully in '${req.file.destination.split('/')[1]}' folder!!!`);
//     }else{
//         res.send("No file to upload");
//     }
// });

var store = multer.diskStorage({
    destination: "./single",
    filename: (req,res,cb)=>{
        cb(null,"Saumya"+res.originalname)
    }
})

var upload = multer({storage : store})

app.post("/upload",upload.single("myfile"),(req,res)=>{
    if (req.file){
        res.write(`'${req.file.originalname}' is uploaded successfully!!!`);
    }else{
        res.send("No file to upload");
    }
    res.send();
});

app.listen(3000);