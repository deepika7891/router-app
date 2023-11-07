import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
import Login from './components/Login';
import Register from './components/Sign';
import Home from './components/home';
import Calculator from './components/Calculator';
import Weather from './components/Weather';
import ToDo from './components/Todo';
import SwitchCase from './components/SwitchCase';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Protected Component={Home}/>}>
            <Route path='SwitchComponent' element={<SwitchCase />} />
            <Route path='ToDo' element={<ToDo />} />
            <Route path='Weather' element={<Weather />} />
            <Route path='Calculator' element={<Calculator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
