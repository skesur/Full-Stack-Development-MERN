var obj = JSON.parse('{"a1":5,"a2":10}',
    function (a,b){
        if(b==10)
            return b+10;
        else
            return b;
    }
);
console.log(obj)