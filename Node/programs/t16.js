// create an event that calculate that takes marks of 5 subjects out 25 and print its addition as total.
// create an event percentage which calculate percentage from total 
// output both total and percentage

const EventEmitter = require("events");
const ee = new EventEmitter();

var total = 0;
var per = 0;

function t(arr){
    for (let i in arr){total=total+arr[i]}
    console.log("Total : "+total)
}

function p(){
    per = (total*100)/125;
    console.log("Percentage : "+per)
}

ee.on("total",t);
ee.on("per",p);

ee.emit("total",[20,20,20,20,20]);
ee.emit("per");