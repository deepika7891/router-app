import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import Login from './components/Login';
import Register from './components/Sign';
import Calculator from './components/Calculator';
import Protected from './components/Protected';
import Weather from './components/Weather';
import ToDo from './components/Todo';
import Switch from './components/Switch'
function App() {
  const isUserLoggedIn = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/SwitchComponent' element={<Switch />} />
        <Route path='/ToDo' element={<ToDo/>} />
          <Route path='/Weather' element={<Weather/>} />
          <Route path='/Calculator' element={<Calculator/>} />
          {/* <Route path="/Home" index element={<Home />} /> */}
          <Route path="/Home" element={
                    <Protected isSignedIn = {isUserLoggedIn}>
                    <Home />
                    </Protected>
                                      }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
