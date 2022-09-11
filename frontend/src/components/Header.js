import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";


function Header() {
    const {t, i18n} = useTranslation('common');
    return (
    <div>
        <div className='header'>
            <div className='header-wrap'>
                
                <div>
                    <a className='tel-nr'>+372 646 7084</a>
                </div>
                <div className='company-time'>
                   <span>E-R 10-18 </span>
                   <span>L-P <i className="fa fa-lock" /></span>
                </div>
                
                <div className='header-company-location'>
                    <Link to='/' className='header-location'>
                        Tatari 3, Tallinn
                    </Link>
                </div>
                <div className='language-container'>
                    <button onClick={() => i18n.changeLanguage('est')}>
                        <img className='language-change' src='./estonia.jpg' alt='estonian flag'></img>
                    </button>
                    <button onClick={() => i18n.changeLanguage('en')}>
                        <img className='language-change' src='./english.jpg' alt='english flag'></img>
                    </button>
                    <button onClick={() => i18n.changeLanguage('ru')}>
                        <img className='language-change' src='./russia.jpg' alt='estonian flag'></img>
                    </button>
                </div>
                <Link to='/admin' className='log-in-btn' >LOG-IN</Link>
            </div>
        </div>
    </div>
  )
}

export default Header