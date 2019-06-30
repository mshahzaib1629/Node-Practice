
var url="http://mylogger.io/log";

function log(message){
    //Send an HTTP Request
    console.log(message);
}

//exporting as an object
// module.exports.log = log;

//exporting as a function
module.exports = log
