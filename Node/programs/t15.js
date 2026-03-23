// wap to simulate sequence of events 
// 1) when "con" event is fired print "Connection successful"
// after that fire an event "DataRecieved" which print "Data recieved successfully"
// finally print "Thank you" in the last line

const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("con",()=>{console.log("Connection successful");ee.emit("dr")})
ee.on("dr",()=>{console.log("Data recieved successfully")})

ee.emit("con")
console.log("Thank you")