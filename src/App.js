import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import Login from './components/Login';
import Register from './components/Sign';
import Calculator from './components/Calculator';
import Weather from './components/Weather';
import ToDo from './components/Todo';
import SwitchCase from './components/SwitchCase';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/s" element={<Register />} />

          <Route path="/" element={<Home />}>
            <Route path='/SwitchComponent' element={<SwitchCase />} />
            <Route path='/ToDo' element={<ToDo />} />
            <Route path='/Weather' element={<Weather />} />
            <Route path='/Calculator' element={<Calculator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
