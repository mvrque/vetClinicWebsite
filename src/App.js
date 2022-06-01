import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import News from './components/pages/News';

import Header from './components/Header';



function App() {
  return (
    <>
    <Router>
    <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/news' element={<News/>} />
        <Route path='map'/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
