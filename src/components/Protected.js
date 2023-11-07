import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() =>{
        let Login = JSON.parse(localStorage.getItem('userdata'));
        console.log('Login:', Login);
        if(Login){
            navigate('/home');
        }
        else{
            navigate('/');
        }
    },[navigate])
    return (
        <div>
        <Component />
    </div>
  )
}

export default Protected
