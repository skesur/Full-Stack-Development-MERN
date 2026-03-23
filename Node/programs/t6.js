// given two json objects div1 and div2 having an array to store name of all students create a new data which stores
// name of all students in alphabetical order
const t = {"div1":{name:["Z","B","H","T"]},"div2":{name:["Y","A","G","E"]}}
console.log(t["div1"].name.concat(t["div2"].name).sort())