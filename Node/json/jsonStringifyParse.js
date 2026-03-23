const a = {
    "A":"LJU",
    "B":["CSE","IT","CE"],
    "C":[{
        "D":"Hi",
        "E":["are",4,{
            "F":["Sem","We"]
        }]
    }],
    "G":{
        "H":"Students",
        "I":["of","!"]
    },
    "J":[{
        "K":"Python",
        "L":"branch",
    },"FSD-2"]
}
console.log(a.C[0].E[2].F[1]+" "+a.C[0].E[0]+" "+a.G.H+" "+a.G.I[0]+" "+a.C[0].E[2].F[0]+" "+a.C[0].E[1]+" "+
    a.G.I[0]+" "+a.B[0]+" "+a.J[0].L)
console.log("Your data is "+a)
//console.log("Your data is "+JSON.stringify(a).C[0].E[2].F[1])  //TypeError 
console.log(JSON.stringify(a).C) //undefined


s = JSON.parse('{"abc":"xyz","def":"pqr"}') //All keys should be double cotted if not then SyntaxError
console.log(s)