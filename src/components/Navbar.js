import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


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
                            Kliinikust
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Teenused ja hinnad
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Tooted
                        </Link>
                    </li>
                    <li className='advice-nav nav-item'>
                        <Link to='/advicevisiting' className='nav-links' onClick={closeMobileMenu} //</li>onMouseEnter={e => {setStyle({display:'block'});}} onMouseLeave={e => {setStyle({display: 'none'})}} 
                        >Nõuanded
                        </Link>
                            <ul className='on-hover'>
                                <li className='advice-item'><Link className='advice-link' to={'/questions'}>Korduma kippuvad küsimused</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicevisiting'}>Nõuandeid loomakliiniku külastamiseks</Link></li>
                                <li className='advice-item'><Link  className='advice-link' to={'/adviceskinhair'} onClick={closeMobileMenu}>Nahk ja karvastik</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicenutrition'}>Toitmisest</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/adviceparasites'}>Parasiidid</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/adviceurinarystone'}>Kasside kusekivid</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicefemalecat'}>Emase kassi jooksuaeg</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicemalecat'}>Isase kassi jooksuaeg</Link></li>
                                <li className='advice-item'><Link className='advice-link' to={'/advicelymedisease'}>Puukborrelioos</Link></li>
                            </ul>
                    </li>
                    <li className='nav-item'>
                        <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                            Uudised
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;