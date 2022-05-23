import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
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
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    
                    <Link to='/About'>Kliinikust</Link>
                    <Link to='/services'>Teenused</Link>
                    <Link to='/products'>Tooted</Link>
                    <Link to='/news'>Uudised</Link>
                    <Link to='/'>Kirjuta meile</Link>   
                </div>
                
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Tatari Loomakliinik OÜ
                    </Link>
                </div>
                <small className='website-rights'>
                    2022
                </small>
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
        </section>
    </div>
  )
}

export default Footer