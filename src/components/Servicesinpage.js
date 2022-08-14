import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Servicesinpage.css'
import {useTranslation} from "react-i18next";



function Servicesinpage() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className='services-container'>
        <h2>{t("services.header")}</h2>
        <p></p>

        <div className='services-wrapper'>
            <div className='service'>
                <i className="service-icon fas fa-heartbeat"/>
                <h3>{t("services.healthcheck")}</h3>
            </div>
            <div className='service '>
              <i className="service-icon fas fa-syringe"/>
              <h3>{t("services.vaccination")}</h3></div>            
            <div className='service'>
              <i className="service-icon fas fa-scissors"/>
              <h3>{t("services.nails")}</h3></div>            
            <div className='service'>
              <i className="service-icon fas fa-microchip fa-light"/>
              <h3>{t("services.chip")}</h3></div>   
            <div className='service'>
              <i className="service-icon fas fa-circle-notch"/>
              <h3>{t("services.ultrasound")}</h3></div>
            <break/>
            <div className='service'>
              <i className="service-icon fas fa-vials"/>
              <h3>{t("services.analyses")}</h3></div>            
            <div className='service'>
              <i className="service-icon fas fa-dna"/>
              <h3>{t("services.genetictests")}</h3></div>            
            <div className='service'>
              <i className="service-icon fas fa-microscope"/>
              <h3>{t("services.knee")}</h3></div>   
            <div className='service'>
              <i className="service-icon fas fa-user-doctor"></i>
              <h3>{t("services.surgical")}</h3></div> 
            <div className='service'>
              <i className="service-icon fas fa-tooth"/>
              <h3>{t("services.teeth")}</h3></div>   
        </div>
        <p>{t("services.information")}</p>
    </div>
  )
}

export default Servicesinpage