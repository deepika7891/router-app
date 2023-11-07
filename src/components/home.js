import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Calculator from './Calculator';
import Weather from  './Weather';
import './home.css';
import ToDo from './Todo';
import SwitchComponent from './SwitchCase';
import Navbar from './Navbar';

function Home() {
  return (
      <>
     
          <Navbar />
          <Routes>
              <Route exact path='/Calculator' element={<Calculator />}></Route>
              <Route exact path='/Weather' element={<Weather/>}></Route>
              <Route exact path='/Todo' element={<ToDo/>}></Route>
              <Route exact path='/SwitchComponent' element={<SwitchComponent/>}></Route>
          </Routes>
       
      </>
  )
}
export default Home
