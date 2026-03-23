// u = "http://localhost:8080/default.html?year=2025&month=feb" check whether given year is leap year or not

const url = require("url");

var u = "http://localhost:8080/default.html?year=2020&month=feb";

var pU = url.parse(u,true);

var y = pU.query.year

if ((y%4==0 && y%100!=0)||(y%400==0)){
    console.log(`${y} is a leap year`)
}else{
    console.log(`${y} is not a leap year`)
}