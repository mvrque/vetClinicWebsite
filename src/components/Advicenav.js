import React from 'react';
import { Link } from 'react-router-dom';
import './Advicenav.css'


function Advicenav() {
  return (
    <nav className='advice-navbar'>
        <div className='advice-navbar-container'>
            <ul className='advice-nav-menu'>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/questions'>Korduma kippuvad küsimused</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/advicevisiting'>Nõuandeid loomakliiniku külastamiseks</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/adviceskinhair'>Nahk ja karvastik</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/'>Toitmisest</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/'>Parasiidid</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/'>Kasside kusekivid</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/'>Emase kassi jooksuaeg</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/'>Isase kassi jooksuaeg</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/'>Puukborrelioos</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Advicenav