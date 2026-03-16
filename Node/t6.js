// create a JSON onj which contains array of onjects. each onj has name of shape and some value. calculate a parameter of circle and square by using side value
const shape = require("./shape.json");
const fs = require("fs");

var circle = shape[0]["diameter"];
var square = shape[1]["side"];

para_c = 2 * Math.PI * circle;
para_s = 4 * square;
console.log(`Circle Area : ${para_c}\nSquare Area : ${para_s}`)
fs.writeFileSync(
  "shape.txt",
  `Circle Area : ${para_c}\nSquare Area : ${para_s}`,
);
