import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const [userFormData, setUserFormData] = useState({
        name: "",
        username: "",
        email: "",
      });
    
      const navigate= useNavigate()

      const location = useLocation()

      const dataobj = location.state
      
      const handleChange = (event) => {
        setUserFormData({
          ...userFormData,
          [event.target.name]: event.target.value,
        });
      };

    
      useEffect(()=>{
        setUserFormData(dataobj)
        console.log("ufd",userFormData)
      },[])

      console.log("ufdo",userFormData)
      const UpdateProcess = () => {
        axios.put(`http://localhost:3001/users/${userFormData.id}`,userFormData)
        .then(res=>{
            alert('Data updated successfully')
            navigate('/users')
        })
        .catch((error) => console.log(error));
      };
    
      return (
        <div className="container">
          <h3>Edit Form</h3>
    
          <div className="row">
            <div className="input-field col s12">
              <input
             
                id="name"
                type="text"
                name="name"
                value={userFormData.name}
                className="validate"
                onChange={handleChange}
              />

            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
               value={userFormData.email}
                id="email"
                type="email"
                name="email"
                className="validate"
                onChange={handleChange}
              />
            
            </div>
          </div>
    
          <div className="row">
            <div className="input-field col s12">
              <input
              value={userFormData.username}
                id="username"
                type="text"
                name="username"
                className="validate"
                onChange={handleChange}
              />
            
            </div>
          </div>
    
          <div className="row">
            <div className="input-field col s12">
              <button onClick={UpdateProcess} className="btn teal wave-effect">
                Update User
              </button>
            </div>
          </div>
        </div>
      );
}

export default EditUser