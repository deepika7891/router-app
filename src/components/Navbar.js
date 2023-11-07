import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const logout = () => {
  //  const userdata = localStorage.removeItem('userdata');
  //   console.log("userdata",userdata);
    window.location.href = '/';
  }

  return (
    <nav>
      <div className='logo'>
        logo
      </div>
      <div>
        <ul>
          <li>
            <Link to="/home/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/home/Weather">Weather</Link>
          </li>
          <li>
            <Link to="/home/ToDo">Todo-list </Link>
          </li>
          <li>
            <Link to="/home/SwitchComponent">Switch-Case</Link>
          </li>
          <li>
            <Link to="/" onClick={logout}>Logout</Link>
          </li>
        </ul>
        {/* <Outlet /> */}
      </div>
    </nav>
  )
}
