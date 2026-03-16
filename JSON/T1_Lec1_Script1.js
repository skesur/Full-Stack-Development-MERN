let obj1 = {
            "Name":"Saumya",
            "Age":19
        }
console.log(obj1)
console.log(obj1.Name)
console.log(obj1.Age)

let obj2 = '{"Name":"Saumya","Age":19}'
console.log(JSON.parse(obj2))

let cars=[
    {"color":"Red","Brand":"Mercides","noOfDoors":2},
    {"color":"Yellow","Brand":"BMW","noOfDoors":4}
]
let carsJson = JSON.stringify(cars)
console.log(`Your Car Data is ${carsJson}`)
console.log(cars[0])

for (let i=0; i<cars.length; i++){
    console.log(`I have a ${cars[i].color} ${cars[i].Brand} which has ${cars[i].noOfDoors} doors`)
}

let test = require("./Lec1_Test1.json")
console.log(test)
console.log(test["xyz"]["Name"])
console.log(test["xyz"]["Topic"][2])

test["DataStructures"].forEach(el => {
    bno = 0
    for (let i = 0;i>1;i++){
        
    }
});