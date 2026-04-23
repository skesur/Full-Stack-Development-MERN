const express = require('express');
const app = express();

const api = require("./api.js");

app.use("/",api); // if noot written this line then router will not work

app.listen(3040,()=>{console.log("Server Started!!!")})