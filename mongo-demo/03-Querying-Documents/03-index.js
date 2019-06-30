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

async function createCourse() {

    // alter these course info to add new courses
    const course = new Course({
        name: "Angular Course",
        author: "Mosh",
        tags: ["framework", "back-end", "front-end"],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}


// ============ Querying Document ===============

async function getAllCourses(){

    const courses = await Course.find();
    console.log(courses);
}

async function getFilteredCourses(){

    const courses = await Course.find({isPublished: true})
    .sort({name: 1})            //name: 1 means arrange in ascending order wrt name, -1 means decending order
    .limit(10)
    .select({name: 1, tags: 1});

    console.log(courses);
}


async function queryOperatorsApplied(){

    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in 
    // nin (not in)

    const courses = await Course
    // .find({price: { $gte: 10 }})
    // .find({price: { $gte: 10, $lt: 20 }})       // in range of 10 to 20 
    .find({price: { $in: [10, 15, 20] }})
    .sort({name: 1})
    .limit(10)
    .select({name: 1, tags: 1})
}

async function logicalOperatorsApplied(){

    // or
    // and

    const courses = await Course
    .find()
    // .or( [ {author: "Shahzaib"} , {isPublished: true} ] )   //OR Operator
    .and( [ {author: "shahzaib"}, {isPublished: true} ] )       //AND Operator
    .sort({name: 1})
    .limit(10)
    .select({name: 1, tags: 1})
}

// createCourse();
// getAllCourses();
getFilteredCourses();