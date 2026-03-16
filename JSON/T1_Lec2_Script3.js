// Given a json object with name and height of n people, print the name and height of person with maximum height

// const data = {
//     "Chintan" : 6,
//     "Saumya" : 15.8,
//     "Qirat" : 5.81,
//     "Nishtha" : 5.5,
//     "Harshil" : 4
// };
// var max = Number.MIN_VALUE;
// var n;
// for(x in data){
//     if(data[x] > max){
//         max = data[x]
//         n = x
//     }
// }
// console.log(n+"-->"+max)

// var p = [
//   {
//     name: "chintan",
//     height: 120,
//   },
//   {
//     name: "saumya",
//     height: 112,
//   },
//   {
//     name: "neel",
//     height: 116,
//   },
//   {
//     name: "harshil",
//     height: 98,
//   },
// ];

// var sorted = p.sort((a, b) => b.height - a.height);
// console.log(sorted[0].name + " : " + sorted[0].height);

// given an array of n elements, creat a function 'FS' which creats an object that has first element as key and last element of array as its value

// var arr = ["abc", "xyz", "pqr", "mno"]
// console.log(fs1(arr))

// function fs1(arr){
//     temp = {}
//     temp[arr[0]] = arr[arr.length -1]
//     return temp
// }

// function fs2(arr){
//     temp = {}
//     for(var x=0;x<arr.length/2;x++){
//         temp[arr[x]] = arr[arr.length-1-x]
//     }
    
//     return temp
// }

// given two json objects div1 and div2 having an array to stor name of all students creat a new data which stores name of all students in alpha. order
var t = {
    "div1" : {
        "name" : ["z", "b", "h", "t"]
    },
    "div2" : {
        "name" : ["y", "a", "g", "e"]
    }
}

let arr = t["div1"]["name"].concat(t["div2"]["name"])
console.log(arr.sort())