import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'> 
        <img className='mainBackground' src='/mainBackground.jpeg' alt='.'/>
          <div className='hero-container-wrapper'>
          {/*<video src='' autoPlay loop muted/>*/}
          <h1>SÕBRA TERVISEKS!</h1>
          <p>Oleme su lemmiku jaoks olemas argipäeviti 10:00 - 18:00</p>
          <div className='hero-btns'>
          <Link to='/about'>
              <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>VÕTA MEIEGA ÜHENDUST</Button>
          </Link>
          </div>
        </div>
    </div>
    
  )
}

export default HeroSection