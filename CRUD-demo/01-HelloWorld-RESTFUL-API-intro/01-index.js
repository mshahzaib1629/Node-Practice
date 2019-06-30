
const express = require("express");
const app = express();

app.get("/", (req, res)=>{      // "/" means whenever we are at homepage of the Listening Port, we'll execute this arrow function
    res.send("Hello World!!!");     // return 'Hello World' message
})

app.get("/api/courses", (req, res)=>{
    res.send([1, 2, 3]);        // return array on calling this url
})

// Setting port 3000 for running our node application
app.listen(3000, ()=> console.log("Listening to Port: 3000"));      //Type: 'localHost:3000' to access the current app on Port: 3000
