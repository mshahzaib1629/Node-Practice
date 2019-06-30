
const express = require("express");
const app = express();


const courses = [
    {id: 1, name:"course1"},
    {id: 2, name:"course2"},
    {id: 3, name:"course3"}
]

app.get("/", (req, res)=>{     
    res.send("Hello World!!!");
})

app.get("/api/courses", (req, res) => {     //this funciton will retrun complete array of courses
    res.send(courses);
})

app.get("/api/courses/:id", (req, res)=>{   // this function will return the course with given id
    const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if(!course)
        res.status(404).send(`The Course with ID ${req.params.id} is not found`);
    else
        res.send(course);       
})

//================= Common Material ===================
// This Material is used in almost every sample

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening to Port: ${port}`));