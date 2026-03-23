// calculate perimeter of circle and square 
// create events to handle negative values
// "peri" - output perimeter
// "negr" - Redius must be positive
// "negs" - Side must be positive

const EventEmitter = require("events");
const ee = new EventEmitter();

var side = -2;
var rad = -2;

function peri(side, rad){
    if (rad<0){
        ee.emit("negr")
    }else{
        console.log(`Perimeter of Circle : ${3.14*2*rad}`)
    }
    if (side<0){
        ee.emit("negs")
    }else{
        console.log(`Perimeter of Square : ${4*side}`)
    }
}

ee.on("negs",()=>{console.log("Side must be positive")})
ee.on("negr",()=>{console.log("Redius must be positive")})

ee.on("peri", peri)
ee.emit("peri", side, rad)