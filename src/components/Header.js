import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <section className='header'>
            
            <div className='header-wrap'>
                <div>
                    <a className='tel-nr'>+372 646 7084</a>
                </div>
                <div className='company-code'>
                   <span>Registrikood: 11485621 </span>
                   <span>KMKR nr: EE101218429</span>
                </div>
                
                <div className='header-company-logo'>
                    <Link to='/' className='header-year'>
                        Tatari Loomakliinik OÜ 2022
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header