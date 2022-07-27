import React from 'react';
import { Link } from 'react-router-dom';
import './Someservices.css'


function SomeServices() {
  return (
    
    <div>
        
        <div className='someservices-container'>
            
            <Link className='linktest' to={'/services'}>
                <div className='home-service'>
                    <i className="home-service-icon fas fa-heartbeat"/>
                    <h3>Tervisekontroll ja konsultatsioon</h3>
                </div>
            </Link>
            <Link className='linktest' to={'/services'}>
            <div className='home-service '>
                    <i className="home-service-icon fas fa-syringe"/>
                    <h3>Vaktsineerimine</h3>
                </div>
            </Link>

            <Link className='linktest' to={'/services'}>
                <div className='home-service'>
                <i className="home-service-icon fas fa-vials"/>
                <h3>Vere- ja uriinianalüüsid</h3>
                </div>
            </Link>
            <Link className='linktest' to={'/services'}>
                <div className='home-service'>
                <i className="home-service-icon fas fa-tooth"/>
                    <h3>Hambakivi eemaldus</h3>
                </div> 
            </Link>  
        </div>
    </div>
  )
}

export default SomeServices