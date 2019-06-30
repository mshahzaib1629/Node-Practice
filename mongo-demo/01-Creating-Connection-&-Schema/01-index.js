const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
.then(() => console.log('Connected to MongoDB Successfully!'))
.catch((err) => console.error('Could not connect to Mongodb', err));

// Schema defines the shape of Document (similiar to Row in Relational Databases) 
// in a MongoDB Collection (similar to Table in Relational Database)
const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

// Once we have Schema, we compile it in model to define document, which returns a Class
// Model takes two arguments, 1. Singular-name of the Collection for which this model is for; 2. Our Schema
const Course = mongoose.model('Course', courseSchema);

// And next we make an object based on that class to insert a row value in document
const course = new Course({
    name: "Node.js Course",
    author: "Shahzaib",
    tags: ["node", "express", "backend"],
    isPublished: true
})