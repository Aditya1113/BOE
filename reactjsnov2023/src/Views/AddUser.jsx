import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const navigate= useNavigate()
  
  const handleChange = (event) => {
    setUserFormData({
      ...userFormData,
      [event.target.name]: event.target.value,
    });
  };

  const AddProcess = () => {
    axios.post('http://localhost:3001/users',userFormData)
    .then(res=>{
        alert('Data added successfully')
        navigate('/users')
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h3>Login Form</h3>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            type="text"
            name="name"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="email"
            name="email"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="username"
            type="text"
            name="username"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button onClick={AddProcess} className="btn teal wave-effect">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
