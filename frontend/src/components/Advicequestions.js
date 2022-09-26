import React from 'react'
import Advicenav from './Advicenav';
import './Advicequestions.css'
import {useTranslation} from "react-i18next";






function Advicequestions() {
  const {t, i18n} = useTranslation('common');
  
  
  return (
    <div>
      <Advicenav/>
      <h2>{t("questions.header")}</h2>
        <div  className='questions-container'>
            <div className='question'>
                
            <h4> {t("questions.dewormer_q")}</h4>
            </div>  
          <div className='answer'>
              <p>{t("questions.dewormer_a")}</p>
          </div>
        </div>

        <div className='questions-container'>
            <div className='question'>

              <h4>{t("questions.vaccination_q")}</h4>
            </div>
            <div className='answer'>
              <p>{t("questions.vaccination_a")}</p>
            </div>
  
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.vacc_dewormer_q")}</h4>
            </div>
      
            <div className='answer'>
              <p>{t("questions.vacc_dewormer_a")}</p>
            </div>
       
        </div>
        <div className='questions-container'>
            <div className='question'>
          

              <h4>{t("questions.finland_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.finland_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.traveling_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.traveling_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.vac_schedule_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.vac_schedule_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.nails_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.nails_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.food_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.food_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>
           

              <h4>{t("questions.chipping_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.chipping_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.castster_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.castster_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question'>


              <h4>{t("questions.parking_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.parking_a")}</p>
            </div>
            
        </div>
        <div className='questions-container'>
            <div className='question bigger'>


              <h4 >{t("questions.drips_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.drips_a")}</p>
            </div>
            
            
        </div>
        <div className='questions-container'>
            <div className='question'>
            

              <h4>{t("questions.tick_q")}</h4>
            </div>
            
            <div className='answer'>
              <p>{t("questions.tick_a")}</p>
            </div>
            
        </div>
      </div>
    
  )
  }


export default Advicequestions