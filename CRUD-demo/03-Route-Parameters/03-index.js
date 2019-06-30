
const express = require("express");
const app = express();

app.get("/", (req, res)=>{     
    res.send("Hello World!!!");
})

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
})

app.get("/api/courses/:id", (req, res)=>{   // passing id as parameter in URL
    res.send(`Parameter ID passed: ${req.params.id}`);        
})

app.get("/api/courses/:year/:month", (req, res)=>{      //passing multiple parameters in URL
    res.send(req.params);       // displaying all the parameters passed to the function
})

app.get("/api/courses/:year/:month", (req, res)=>{      //We can also pass optional parameters, called QueryString. Just type in URL 'nameOfOptionalParamter = itsValue' separated with '?'
    res.send(req.query);       // displaying optional parameters OR query String values
})

//================= Common Material ===================
// This Material is used in almost every sample

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening to Port: ${port}`));