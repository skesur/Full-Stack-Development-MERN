// create a json object which contains array of objects. each object has name of shape and some value. calculate paremeter of circle
// and square, by using side value of side and diameter and object is return in json file, output must be return in shape.txt

const fs = require('fs');

let sh = require("./shape.json")

let cD = sh[0]["diameter"]
let sD = sh[1]["diameter"]

let cP = 3.14*cD
let sP = 2*sD

fs.writeFileSync("shape.txt",`circle : ${cP}, square : ${sP}`);
console.log(`circle : ${cP}, square : ${sP}`);