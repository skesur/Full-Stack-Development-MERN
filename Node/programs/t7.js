let obj = JSON.parse('{"fruit":"apple"}',
    function (a,b){
        if(b=="apple")
            return "orange";
        else
            return b
    }
);
console.log(obj);
let obj1 = JSON.parse('{"a1":5,"a2":10}',
    function (a,b){
        if(b==10)
            return b+10;
        else
            return b
    }
);
console.log(obj1);