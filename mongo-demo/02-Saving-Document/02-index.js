const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB Successfully!'))
    .catch((err) => console.error('Could not connect to Mongodb', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);

// making an async function, as we are gonna send async request
async function createCourse() {

    // alter these course info to add new courses
    const course = new Course({
        name: "Angular Course",
        author: "Mosh",
        tags: ["framework", "back-end", "front-end"],
        isPublished: true
    });

    // this is an async request
    const result = await course.save();
    console.log(result);
}

createCourse();