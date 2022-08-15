import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-wrapper'>
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
                    <span className=''>Teie paremaks teenindamiseks on vajalik eelnev registreerimine telefoni teel.</span>    
                </div> 
                <div className='footer-advice'>
                <h2>Nõuanded</h2>
                    <ul className='footer-advice-list'>
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
                <div className='footer-contact-items'>
                        <h2>Kontakt</h2>
                        <Link to='/About'><i className="bi bi-geo-alt"></i>Tatari 3, Tallinn</Link>
                        <Link to='/services'>+372 646 7084</Link>
                        <Link to='/products'>tlk@tatari.ee</Link>
                        <div className='social-icons'>
                            <Link href='www.facebook.com'  className='social-icon-link facebook'  to='/'
                            target='_blank' aria-label='Facebook'>
                                <i className='fab fa-facebook-f' />
                            </Link>
                            <Link className='social-icon-link instagram' to='/'
                            target='_blank' aria-label='Instagram'>
                                <i className='fab fa-instagram' />
                            </Link>
                        </div>
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