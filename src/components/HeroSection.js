import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'> 
        <img className='mainBackground' src='/mainBackground.jpeg' alt='.'/>
        {/*<video src='' autoPlay loop muted/>*/}
        <h1>OLEME SINU LEMMIKU JAOKS OLEMAS!</h1>
        <p>Avatud E-R 10:00-18:00</p>
        <div className='hero-btns'>
        <Link to='/about'>
            <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>TEENUSED JA HINNAKIRI</Button>
        </Link>
        </div>
    </div>
    
  )
}

export default HeroSection