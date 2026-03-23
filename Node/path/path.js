const path = require('path');
var pm = "D:/abc/test/f1.txt";

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(pm));
console.log(path.basename(pm).split(".")[0]);
console.log(path.extname(pm));

var pdata = path.parse(pm);
console.log(pdata);

console.log("Root directory is "+pdata.root);