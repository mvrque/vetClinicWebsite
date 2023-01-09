import React, { Suspense } from 'react';
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
import Advicenutrition from './components/Advicenutrition';
import Adviceparasites from './components/Adviceparasites';
import Adviceurinarystone from './components/Adviceurinarystone';
import Advicefemalecat from './components/Advicefemalecat';
import Advicemalecat from './components/Advicemalecat';
import Advicelymedisease from './components/Advicelymedisease';
import Scrolltotop from './Scrolltotop';
import Admin from './components/pages/Admin';




function App() {
  return (
    <>
    <Suspense fallback="loading">
    <Router>
    <Scrolltotop>
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
        <Route path='/advicenutrition' element={<Advicenutrition/>}/>
        <Route path='/adviceparasites' element={<Adviceparasites/>}/>
        <Route path='/adviceurinarystone' element={<Adviceurinarystone/>}/>
        <Route path='/advicefemalecat' element={<Advicefemalecat/>}/>
        <Route path='/advicemalecat' element={<Advicemalecat/>}/>
        <Route path='/advicelymedisease' element={<Advicelymedisease/>}/>
       
       
       <Route path='/admin' element={<Admin/>}/>


        

      </Routes>
      </Scrolltotop>
    </Router>
    </Suspense>
    </> 

  );
}

export default App;
