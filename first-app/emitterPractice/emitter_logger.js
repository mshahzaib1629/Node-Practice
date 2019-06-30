const EventEmitter = require("events");

class Emitter_Logger extends EventEmitter {
    
    log(){  // when a function is inside a class, we refer it as a method
        console.log("Emitting messageLogged");
        this.emit("messageLogged", {id:1, url:'http://'});  //messageLogged event is raised. Its Listner is placed in eventHandler class.
    }                                                       //'this' references to EventRaiser class itself, which extends EventEmitter.
}



module.exports = Emitter_Logger;