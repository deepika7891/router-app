import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
    <div className='logo'>
      logo
    </div>
    <div>
      <ul>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/Weather">Weather</Link>
        </li>
        <li>
         <Link to="/ToDo">Todo-list </Link>
         </li>
        <li>
        <Link to="/SwitchComponent">Switch-Case</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
