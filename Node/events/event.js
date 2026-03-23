const EventEmitter = require("events");
const ee = new EventEmitter();

function hello(){
    console.log("Hello World");
}

function hello1(){
    console.log("Hello Universe")
}

ee.on("he",hello);
ee.on("he",hello1);
ee.on("he",()=>{console.log("Hello Multiverse")}) // if you want to remove it, it won't happen because no name


ee.emit("he");

ee.removeListener("he",hello)

console.log("after removing")

ee.emit("he")

console.log("No. of listeners before remove all "+ee.listenerCount("he"))

ee.removeAllListeners("he")

console.log("No. of listeners before remove all "+ee.listenerCount("he"))
