import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Courses from '../src/pages/Courses';
import Location from '../src/pages/Location';
import Error from '../src/pages/Error';
import './App.css';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/faculty' element={<Courses/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
