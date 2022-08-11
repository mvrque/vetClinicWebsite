import React from 'react';
import { Link } from 'react-router-dom';
import './Someservices.css';
import {useTranslation} from "react-i18next";


function SomeServices() {
    const {t, i18n} = useTranslation('common');
    return (
    
    <div>
        
        <div className='someservices-container'>
            
            <Link className='linktest' to={'/services'}>
                <div className='home-service'>
                    <i className="home-service-icon fas fa-heartbeat"/>
                    <h3>{t("services.healthcheck")}</h3>
                </div>
            </Link>
            <Link className='linktest' to={'/services'}>
            <div className='home-service '>
                    <i className="home-service-icon fas fa-syringe"/>
                    <h3>{t("services.vaccination")}</h3>
                </div>
            </Link>
            <div className='break'></div>

            <Link className='linktest' to={'/services'}>
                <div className='home-service'>
                <i className="home-service-icon fas fa-vials"/>
                <h3>{t("services.analyses")}</h3>
                </div>
            </Link>
            <Link className='linktest' to={'/services'}>
                <div className='home-service'>
                <i className="home-service-icon fas fa-tooth"/>
                    <h3>{t("services.teeth")}</h3>
                </div> 
            </Link>  
        </div>
    </div>
  )
}

export default SomeServices