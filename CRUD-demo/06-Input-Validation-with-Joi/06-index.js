const Joi = require("@hapi/joi");
const express = require("express");
const app = express();

app.use(express.json()); // using express.json as a middle-ware

const courses = [
    {id: 1, name:"course1"},
    {id: 2, name:"course2"},
    {id: 3, name:"course3"}
]

//================= GET ===================

app.get("/", (req, res)=>{     
    res.send("Hello World!!!");
})

app.get("/api/courses", (req, res) => {     
    res.send(courses);
})

app.get("/api/courses/:id", (req, res)=>{   
    const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if(!course)
        res.status(404).send(`The Course with ID ${req.params.id} is not found`);
    else
        res.send(course);       
})


//================= POST ===================
//POST method is used to add some data

app.post("/api/courses", (req, res) => {
    const schema = {                                //defining a schema for validating input request body
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);  //comparing the input request body with our defined schema

    // if(result.error){
    //     res.status(400).send(result.error.details); //here displaying all the details of error
    //     return;
    // }
   
    if(result.error){
        res.status(400).send(result.error.details[0].message); //here for simplicity,  displaying only the error message
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
})

//================= Common Material ===================
// This Material is used in almost every sample

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening to Port: ${port}`));