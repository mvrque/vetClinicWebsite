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
                    <Link className='advice-nav-link' to='/advicenutrition'>Toitmisest</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/adviceparasites'>Parasiidid</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/adviceurinarystone'>Kasside kusekivid</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/advicefemalecat'>Emase kassi jooksuaeg</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/advicemalecat'>Isase kassi jooksuaeg</Link></li>
                <li className='advice-nav-item'>
                    <Link className='advice-nav-link' to='/advicelymedisease'>Puukborrelioos</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Advicenav