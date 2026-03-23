const url = require("url");

var u = "http:/drive.google.com:80/test/abc.html?c1='dhruvi'&c2=20#kaiuk";

var pU = url.parse(u,true);

console.log(pU);
console.log(pU.port);
console.log(pU.query.c2);