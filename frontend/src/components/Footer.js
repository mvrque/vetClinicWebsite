import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
import Axios from "axios";



function Footer() {
    

    
    return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-wrapper'>
            {/*<div className='latest-news-container'>
                    <h2>Viimased uudised</h2>
                    <div className='latest-news-wrapper'>
                        {<h2 className='latest-news-header'>{newsList[newsList.length-1].newsHeader}</h2>}
                        {<p>{newsList[newsList.length-1].newsDescription}</p>}
                </div>
                   
                </div>*/}
                <div className='footer-worktime-items'>
                    <h2>Avatud</h2>
                    <div className='worktime-info'>
                        <div className='working-days'>
                            <p>E-R</p>
                            <p>L-P</p>
                        </div>
                        <div className='working-time'>
                            <p>10:00-18:00</p>
                            <p>SULETUD</p>
                        </div>
                        
                    </div> 
                    <span className='register-phone'>Teie paremaks teenindamiseks on vajalik eelnev registreerimine telefoni teel.</span>    
                </div> 
                
                <div className='footer-contact-items'>
                        <h2>Kontakt</h2>
                        <div className='social-icons'>
                            <a href="https://www.facebook.com/tatari.loomakliinik" target="_blank" rel="noreferrer">
                                <i className='fab fa-facebook-f' />
                            </a>
                            <a href="https://www.instagram.com/tatariloomakliinik/" target="_blank" rel="noreferrer">

                                <i className='fab fa-instagram' />
                            </a>
                        </div>
                        <Link to='/About'><i className="bi bi-geo-alt"></i>Tatari 3, Tallinn</Link>
                        <Link className='mobiĺe-phone' to='/About'>+372 646 7084</Link>
                        <Link to='/About'>tlk@tatari.ee</Link>
                       
                </div> 
                
                <div className='footer-advice'>
                    <ul className='footer-advice-list'>
                        <h2>Nõuanded</h2>
                        <li><Link to={'/questions'}>Korduma kippuvad küsimused</Link></li>
                        <li ><Link to={'/advicevisiting'}>Nõuandeid loomakliiniku külastamiseks</Link></li>
                        <li ><Link to={'/adviceskinhair'}>Nahk ja karvastik</Link></li>
                        <li ><Link to={'/advicenutrition'}>Toitmisest</Link></li>
                        <li ><Link to={'/adviceparasites'}>Parasiidid</Link></li>
                        <li ><Link to={'/adviceurinarystone'}>Kasside kusekivid</Link></li>
                        <li ><Link to={'/advicefemalecat'}>Emase kassi jooksuaeg</Link></li>
                        <li ><Link to={'/advicemalecat'}>Isase kassi jooksuaeg</Link></li>
                        <li ><Link to={'/advicelymedisease'}>Puukborrelioos</Link></li>
                           
                    </ul>

                </div>
            </div>
            



            {/*<section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the acamef askadaeu ska
                </p>
                <p className='footer-subscription-text'>
                    You can subscribe anytime.
                </p>
                <div className='input-area'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'></input>
                        <Button buttonStyle='btn--primary'>Subscribe</Button>
                    </form>
                </div>
            </section>*/}
            
            
            
        </div>
       
    </div>
    
    
  )
}

export default Footer