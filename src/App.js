import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Advice from './components/pages/Advice';
import News from './components/pages/News';
import Questions from './components/pages/Questions';

import Header from './components/Header';
import Advicevisiting from './components/Advicevisiting';

import Adviceskinhair from './components/Adviceskinhair';



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
        <Route path='/advice' element={<Advice/>} />
        <Route path='/news' element={<News/>} />
        <Route path='map'/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/advicevisiting' element={<Advicevisiting/>}/>
        <Route path='/adviceskinhair' element={<Adviceskinhair/>}/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
