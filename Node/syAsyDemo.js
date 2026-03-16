// sync
// console.log("Start")

// for(let i = 0;i<10;i++) console.log("Waiting...")
// console.log("This Is The End")

// Async
console.log("Start")

setTimeout(()=>{
    for(let i=0;i<10;i++) console.log("Waiting...")
},3000);

console.log("This Is The End");