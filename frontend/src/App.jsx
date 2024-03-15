/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NotFound from './pages/NotFound';
import Success from './pages/Success';
import Home from "./pages/Home";
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
           <Route path='*' element={<NotFound/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App