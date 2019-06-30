const express = require('express');
const mongoose = require('mongoose');
const doctorModel = require("./models/doctors");
const cors = require("cors");
mongoose.connect("mongodb://localhost/hospitaldb")
    .then(() => console.log("Connected to Mongo ...."))
    .catch((error) => console.log(error.message,'error'));
    
const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
app.listen(port, function () {
    console.log(`Listening on Port 4000....`);
})

app.get('/', function (request, response) {
    response.send("Hospitael Server Started");
});

app.get('/api/doctors', async function (request, response) {

    const doctors = await doctorModel.getDoctors();
    //console.log(doctors);
    response.send(doctors);
});

app.post('/api/doctors', async function (request, response) {

    const d = await doctorModel.addDoctor(request.body.name, request.body.age);
    //console.log(doctors);
    response.send(d);
});

app.put('/api/doctors/:id', async function(request, response) {

    const d = await doctorModel.updateDoctor(request.params.id, request.body.name);

    response.send(d);
});

app.delete('/api/doctors/:id', async function (request, response) {

    const d = await doctorModel.deleteDoctor(request.params.id);

    response.send(d);
})