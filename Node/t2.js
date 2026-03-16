// Intialize 2 numbres. print addition by incrementing both every 100ms
a = 1
b = 0

setInterval(()=>{
    console.log(`A = ${a}, B = ${b}, Sum = ${a+b}`)
    a++
    b++
},100)