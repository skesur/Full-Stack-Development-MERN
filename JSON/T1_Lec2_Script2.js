// var n = [10,20,30];
// var obj = {
//     "name" : "chintan",
//     "rollno" : 30
// };
 
// for(x in n)
//     console.log(x+"-->"+n[x])
// for(x in obj)
//     console.log(x+"-->"+obj[x])
// for(x of n)
//     console.log(x)

const sub = {
    "FSD" : [
        {
            "Topic" : "HTML",
            "Course" : "beginner",
            "Content" : ["tags", "table", "form"]
        },
        {
            "Topic" : "CSS",
            "Course" : "beginner",
            "Content" : ["tags", "table", "form"]
        }
    ]
};

sub["FSD"].forEach(el => {for(x in el) console.log(x+" --> "+el[x])})