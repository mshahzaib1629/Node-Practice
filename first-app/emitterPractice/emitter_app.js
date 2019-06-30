
const Emitter_Logger = require("./emitter_logger");
const eventRaiser = new Emitter_Logger();

//Register an Listner
eventRaiser.on("messageLogged", (arg) => {      //'messageLogger' is an event raised from the class Emitter_Logger when we call 'log' method there
    console.log("Listner Called", arg);
})

eventRaiser.log("Hello");