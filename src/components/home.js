import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Calculator from './Calculator';
import Weather from  './Weather';
import './home.css';
import ToDo from './Todo';
import SwitchComponent from './Switch';
import Navbar from './Navbar';

function Home() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Calculator />}></Route>
              <Route exact path='/Weather' element={<Weather/>}></Route>
              <Route exact path='/Todo' element={<ToDo/>}></Route>
              <Route exact path='/Switch' element={<SwitchComponent/>}></Route>
          </Routes>
      </>
  )
}
export default Home
