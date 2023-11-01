import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState(['']);
    const [password, setPassword] = useState(['']);
    const navigate = useNavigate();

    const SubmitEvent =() =>{
        const userdata = JSON.parse(localStorage.getItem('userdata'));
        // console.log(typeof(userdata));
        const user = userdata.find (user => user.name === username && user.password === password);
        console.log("user" , user);
        if(user){
            alert("login user")
            navigate("/home");
        }
        else{
            alert("wrong username or password");
        }
    };
    

    return (
        <>
            <div className='Register Container'>
                <div className='row' style={{ height: "100vh", width: "100%" }}>
                    <div className='col-md' style={{ background: "#ff000096" }}></div>
                    <div className='col-md' style={{ background: "#fbf9e9" }}>
                    </div>
                </div>
                <div className='Register-card'>
                    <p className='text'>LOGIN </p>

                    <form onSubmit={SubmitEvent}>
                        <input type='name' placeholder='Username'  value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                        <input type='password' placeholder='Password'  minLength='3' value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                        <button type='submit' className='login-btn'>Login</button>

                        <p className='Sign-in'>Don't have an account ? <a href='/'>Register Here</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login