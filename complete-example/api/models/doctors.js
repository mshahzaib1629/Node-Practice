const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hospitaldb')

const doctorsSchema = mongoose.Schema({
    name: String,
    age: Number
});
const Doctor = mongoose.model("Doctor", doctorsSchema);

async function getDoctors() {
   
    const doctors = await Doctor.find();
   
    return doctors;
}
async function addDoctor(name, age) {
    var d = new Doctor({
        name: name,
        age: age
    });
    d.save();

    return d;
}

async function updateDoctor(id, name){
    var d = await Doctor.findById(id)
    d.name = name;
    d.save();
    return d;
}

async function deleteDoctor(id){

    var d = Doctor.findById(id);
    const result = await d.remove();
    return result;
}

module.exports.getDoctors = getDoctors;
module.exports.addDoctor = addDoctor;
module.exports.updateDoctor = updateDoctor;
module.exports.deleteDoctor = deleteDoctor;