import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
      });
    
      const loginProcess = () => {
       if(loginDetails.email==='admin' && loginDetails.password ==='admin'){
        sessionStorage.setItem('role','admin')
        navigate('/profile')
       }
       else{
        sessionStorage.setItem('role','guest')
        navigate('/home')
       }
      };
    
      const handleChange = (event) => {   
        setLoginDetails({
          ...loginDetails,
          [event.target.name]: event.target.value,   // username : users'input
        });
      };

  return (
    <div className="container">
      <h3>Login Form</h3>
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
            id="password"
            type="password"
            name="password"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button onClick={loginProcess} className="btn teal wave-effect">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
