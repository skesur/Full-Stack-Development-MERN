// Synchronous code
console.log("Start1")
for(let i=0;i<10;i++) console.log("Waiting...1");
console.log("End1")

//Asunchronous code
console.log("Start2")
setTimeout(()=>{
    for(let i=0;i<10;i++) console.log("Waiting...2");
},3000);
console.log("End2")