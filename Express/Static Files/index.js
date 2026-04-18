const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname,{"index":"html/abc.html"}));

app.listen(3000);