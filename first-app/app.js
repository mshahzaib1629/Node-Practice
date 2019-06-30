
const logger = require('./logger');

// if logger was exported as an object
// logger.log('Hello');

// if logger was exported as function
// logger('hello');


// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


// const fs = require('fs');

// var files = fs.readdirSync('./');
// console.log(files);



const EventEmitter = require("events"); //'EventEmitter', started with capital letter means it's a class
const emitter = new EventEmitter(); // Here 'emitter' means object of 'EventEmitter'

//Register an Listner
emitter.on("messageLogged", (arg) => { //or 'emitter.addListner' can also be used. Here 1st parameter is the event name to be listned and 
    console.log("Listner Called!", arg);     //2nd parameter, i.e function() is call-back function, it is the function that should be called on occuring particular event
}) 

emitter.emit("messageLogged", {id:1, url:'http://'}) // 'emit' is used to raise an event
                                                     // {} are used to pass the arguments with raising an event
