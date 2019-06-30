
const http = require("http");


//================== This is just for explaining concept ====================
// const server = http.createServer(); // this function is used to create web server
// //Interesting Fact: this server is Event Emitter, so we have all cabilities of Event Emitter

// server.on("connection", (socket) =>{    //whenever we open port: 3000 in browser, this event is raised
//     console.log("New COnnection!")
// })

// ================= In real world, this happens in background ==============
const server = http.createServer((req, res) => {    // defining a call back function for every request
    if(req.url === '/'){            
        res.write("hello World");   // if rquested url is '/', then return hello world in response
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));   // if requested url is '/api/courses', then returning array of objects using JSON
        res.end();
    }

})  

// in practical life, we use framework 'Express' for handling all that stuff

server.listen(3000); //whenever we run this application, this server will listen on Port: 3000

console.log("Listening on Port: 3000....")