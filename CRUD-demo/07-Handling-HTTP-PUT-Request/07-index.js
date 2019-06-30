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

app.post("/api/courses", (req, res) => {
    
    // const result = validateCourse(req.body);   // we can make code more simpler by using object destructing
    const { error } = validateCourse(req.body);   // here the object that is returned have 2 properties, i.e error & value. we are using only error property here

    if(error){
        res.status(400).send(error.details[0].message); 
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
})

//================= PUT ===================
//PUT method is used to update an existing data

app.put("/api/courses/:id", (req, res) => {
    
    // Look up the course. If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if(!course){
         res.status(404).send(`The Course with ID ${req.params.id} is not found`);
         return;
    }
    // Validate. If req is invalid, return 400 - bad request
     const { error } = validateCourse(req.body);  

     if(error){
         res.status(400).send(error.details[0].message);
         return;
     }

    // Update the Course
    course.name = req.body.name;
    res.send(course);
})

//================= Common Material ===================
// This Material is used in almost every sample

function validateCourse(course){
    const schema = {                    
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening to Port: ${port}`));

