import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";



function HeroSection() {
  const {t, i18n} = useTranslation('common');
  return (
    
    <div className='hero-container'> 
        <img className='mainBackground' src='/mainBackground.jpeg' alt='.'/>
          <div className='hero-container-wrapper'>
          {/*<video src='' autoPlay loop muted/>*/}
          <h1>{t('herosection.title')}</h1>
          <p>{t('herosection.description')}</p>
          <div className='hero-btns'>
          <Link to='/about'>
              <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>{t('herosection.contactus-btn')}</Button>
          </Link>
          </div>
        </div>
    </div>
    
  )
}

export default HeroSection