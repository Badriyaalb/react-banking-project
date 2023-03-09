import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/HomeComponents/Cardssection.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
    {/* <Route path='/Signup' element={<Signup/>}/>     */}
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
);


