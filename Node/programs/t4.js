// Given a json object with name and height of n people, print the name and height of person with max height
const nameHeight = {
    "Saumya":5.6,
    "Chintan":6.0,
    "Harshraj":5.7
}
let h = 0
let na = ""
for (x in nameHeight){
    if (h<nameHeight[x]){
        h=nameHeight[x]
        na=x
    }
}
console.log(h+" "+na)

const nh = [
    {
        "name":"Saumya",
        "height":5.6
    },
    {
        "name":"Chintan",
        "height":6.0
    },
    {
        "name":"Harshraj",
        "height":5.7
    }
]
let n = nh.sort((a,b)=>(b.height-a.height))
console.log(n[0].name+" "+n[0].height)