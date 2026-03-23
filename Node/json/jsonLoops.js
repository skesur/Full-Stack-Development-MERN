let n = [10,20,30]
let ob = {"name":"dhruvi","rollno":30}
for (x in n) console.log(x+" "+n[x]);
for (x in ob) console.log(x+" "+ob[x]);
for (x of n) console.log(x);
//for (x of ob) console.log(x); //TypeError because for of loop is not iterable through objects


const sub = {
    "FSD":[
        {
            "Topic":"HTML",
            "Course":"Beginner",
            "content":["tags","table","form"]
        },
        {
            "Topic":"CSS",
            "Course":"Beginner",
            "content":["tags","table","form"]
        }
    ]
}
sub["FSD"].forEach(el => {
    for (x in el){
        console.log(x + " : " + el[x])
    }
})