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
                <div className='company-time'>
                   <span>E-R 10-18 </span>
                   <span>L-P <i class="fa fa-lock" /></span>
                </div>
                
                <div className='header-company-location'>
                    <Link to='/' className='header-location'>
                        Tatari 3, Tallinn
                    </Link>
                </div>
                <div className='language-container'>
                    <img className='language-change' src='./english.jpg' alt='english'></img>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header