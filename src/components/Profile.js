import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Profile.css'
import { Link } from 'react-router-dom'

//import React, { useState } from "react";
import ReactDOM from "react-dom";


function Profile() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "oliviaP",
      password: "pass1"
    },
    {
      username: "kevin_nav",
      password: "iloveuprm"
    }
  ];

  const errors = {
    uname: "invalid credentials",
    pass: "invalid credentials"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );


  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? 
        <div> 
          <div className="rand">User is successfully signed in</div>
          <br></br>
          <div className='aligner'> <b> User Information: </b> </div> 
          <p> <b> Name </b> </p>
          <div className="user-info"> Kevin Navarro </div> 
          <br></br>
          <p> <b> Email </b> </p>
          <div className="user-info"> kevin.navarro213@upr.edu </div> 
          <br></br>
          <p> <b> Password </b> </p>
          <div className="user-info"> ••••••••• </div> 
          <br></br>
        </div> : renderForm}
        <a>Not registered? <Link to="/signup" className='signup'>Sign Up</Link></a>
      </div>
    </div>
  );
}

export default Profile

