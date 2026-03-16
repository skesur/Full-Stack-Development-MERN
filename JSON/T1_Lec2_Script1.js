const a = {
    A : 'LJU',
    B : ["CSE", "IT", "CE"],
    C : [{
        "D" : "Hi",
        "E" : ["are", 4, {"F" : ["Sem","We"]
        }]
    }],
    "G" : {
        "H" : "students",
        "I" : ["of", "!"]
    },
    "J" : [{
        "K":"Python",
        "L":"branch"
    },"FSD-2"]
}

console.log(`${a["C"][0]["E"][2]["F"][1]} ${a["C"][0]["E"][0]} ${a["G"]["H"]} ${a["G"]["I"][0]} ${a["C"][0]["E"][2]["F"][0]} ${a["C"][0]["E"][1]} ${a["G"]["I"][0]} ${a["B"][0]} ${a["J"][0]["L"]}${a["G"]["I"][1]}`)

s = JSON.stringify(a)
console.log(s.C)

var b = JSON.parse('{"abc":"xyz","bef":"pqr"}')
console.log(b.abc)
