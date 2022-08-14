import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import {useTranslation} from "react-i18next";



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [style, setStyle] = useState({display: 'none'}); 
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
 
    useEffect(( ) => { 
        showButton()
    }, [])

    window.addEventListener('resize', showButton);
    const {t, i18n} = useTranslation('common');
    return (
    
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={"/"} className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='tatari-loomakliinik' src='./kameeleonLogo.jpeg' alt='Tatari Loomakliinik'></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            {t("navbar.clinic")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.services")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.products")}
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                        {t("navbar.news")}
                        </Link>
                    </li>
                    <li className='advice-nav nav-item'>
                        <Link to='/advicevisiting' className='nav-links' onClick={closeMobileMenu} //</li>onMouseEnter={e => {setStyle({display:'block'});}} onMouseLeave={e => {setStyle({display: 'none'})}} 
                        >{t("navbar.advice")}
                        </Link>
                            <ul className='on-hover'>
                                <li className='advice-item'><Link className='advice-link' to={'/questions'}>{t("advicenav.questions")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicevisiting'}>{t("advicenav.advicevisiting")}</Link></li>
                                <li className='advice-item'><Link  className='advice-link' to={'/adviceskinhair'} onClick={closeMobileMenu}>{t("advicenav.adviceskinhair")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicenutrition'}>{t("advicenav.advicenutrition")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/adviceparasites'}>{t("advicenav.adviceparasites")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/adviceurinarystone'}>{t("advicenav.adviceurinarystone")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicefemalecat'}>{t("advicenav.advicefemalecat")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicemalecat'}>{t("advicenav.advicemalecat")}</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicelymedisease'}>{t("advicenav.advicelymedisease")}</Link></li>
                            </ul>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;