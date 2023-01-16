import React, {useState} from 'react'
import { ReactDOM } from 'react-dom';
import Addnews from '../Addnews';
import './Admin.css';
import Database from '../Adminpassword.json'


function Admin() {
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const info = Database.auth
  
  // User Login info

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = info
    
    // Compare user info
    if (userData) {
      if (info.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true)
        sessionStorage.setItem("isSubmitted", "true");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    console.log('Success')
  };
  
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form className='usernamepassword' onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Kasutajanimi</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Parool</label>
          <input  type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  let loggeIn = sessionStorage.getItem("loggedIn")
  return (
    <div className="app">
      <div className="login-form">
        
        {sessionStorage.getItem('isSubmitted') ? 
        <div className='addnews-container'>
            <Addnews />
        </div> : renderForm}
      </div>
    </div>
  );
}
export default Admin