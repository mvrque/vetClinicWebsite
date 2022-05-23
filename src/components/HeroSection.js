import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'> 
        <img className='mainBackground' src='/mainBackground.jpeg' alt='.'/>
        {/*<video src='' autoPlay loop muted/>*/}
        <h1>OLEME SINU LEMMIKU JAOKS OLEMAS!</h1>
        <p>Avatud E-R 10:00-18:00</p>
        <div className='hero-btns'>
            
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>VÕTA MEIEGA ÜHENDUST</Button>
        </div>
    </div>
    
  )
}

export default HeroSection