
const express = require("express");
const app = express();

app.use(express.json()); // using express.json as a middle-ware

const courses = [
    {id: 1, name:"course1"},
    {id: 2, name:"course2"},
    {id: 3, name:"course3"}
]

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

app.post("/api/courses", (req, res) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send("Name is required and should be 3 characters minimum");
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