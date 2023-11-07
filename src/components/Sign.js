
import React, { useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Register() {


  const navigate = useNavigate();


  const SubmitEvent = (e) => {
          e.preventDefault();
          const {email, name, password} = e.target.elements;
          const storedData = localStorage.getItem('userdata') !=null ? JSON.parse(localStorage.getItem('userdata')) : []; 
          console.log(storedData);
          const signup = {
            id: storedData.length+1,
            name: name.value,
            email: email.value,
            password: password.value
          };
          //check if the email entered already exists in our data.
          if (storedData !== signup) {
            storedData.push(signup);
            localStorage.setItem('userdata', JSON.stringify(storedData));
            alert("registeration successful");
            navigate("/");
          }
          else{
            alert("already exist")
          }
  }

  useEffect(() => {
    JSON.parse( localStorage.getItem("userdata"))
  }, []);

  return (
    <div className='Container Register'>
      <div className='row' style={{ height: "100vh", width: "100%" }}>
        <div className='col-md' style={{ background: "#ff000096" }}></div>
        <div className='col-md' style={{ background: "#dbdfa5" }}>
        </div>
      </div>
      <div className='Register-card'>
        <p className='text'>SIGN UP</p>

        <form onSubmit={SubmitEvent}>
          <input type='name' placeholder='Name' name='name' required />

          <input type='email' placeholder='Email' name='email' required />

          <input type='password' placeholder='Password' name='password' required />

          <button type='submit' className='login-btn'>Register</button>

          <p className='Sign-in'>Have an account ?<a href='/'> Sign In</a></p>
        </form>

      </div>
    </div>
  )
}
export default Register
