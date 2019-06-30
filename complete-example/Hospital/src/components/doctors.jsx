import React, { Component } from "react";
import axios from "axios";

class Doctors extends Component {
  state = {
    doctors: [{ name: "yahya" }, { name: "Abdul Rehman" }],
    newDoc: {
      name: ""
    }
  };
  fectDoctors = () => {
    var self = this;
    axios.get("http://localhost:4000/api/doctors").then(function(doctors) {
      console.log(doctors.data);
      self.setState({ doctors: doctors.data });
    });
  };
  componentDidMount() {
    this.fectDoctors();
  }

  componentDidUpdate() {
    this.fectDoctors();
  }

  addDoctor = () => {
    axios.post("http://localhost:4000/api/doctors", {
        name: this.state.newDoc.name,
        age: 30
      })
      .then(function(doctors) {
        console.log(doctors.data);
        //self.setState({ doctors: doctors.data });
      });
    this.fectDoctors();
  };
  render() {
    return (
      <div className="row">
        <input
          type="text"
          name=""
          id=""
          value={this.state.newDoc.name}
          onChange={e => {
            let d = { name: e.target.value };
            this.setState({ newDoc: d });
          }}
        />
        <button className="btn btn-info" onClick={this.addDoctor}>
          Add Doctor
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctors.map((doc, index) => (
              <tr key={index}>
                <td>{doc._id}</td>
                <td>{doc.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Doctors;
