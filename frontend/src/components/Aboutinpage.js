import React from 'react'
import '../App.css';
import './Aboutinpage.css';
import MapContainer from './Map';
import ButtonMailto from './ButtonMailto';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {useTranslation} from "react-i18next";


const slideImages = [
    {
      url: '/galerii1.jpeg',
      caption: '',
    },
    {
      url: '/galerii2.jpeg',
      caption: ''
    },
    {
      url: '/galerii3.jpeg',
      caption: ''
    },
  ];
  

export default function Aboutinpage(){
    const {t, i18n} = useTranslation('common');
    return (
    <div>   
        <div className='about-page-container'>
            <h2>{t("about.aboutinpage-heading")}</h2>
            <p>{t("about.description")}</p>
            <div className='map-container'>
                <div className='phone-mail-container'> 
                    <ButtonMailto mailto="mailto:tlk@tatari.ee" className='btns mailbtn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    {t("about.write-us")}
                    </ButtonMailto>
                    <button className='call-us'>
                        <a className='phone-nr' href="tel:+372 646 7084"  data-rel="external">+372 646 7084</a>
                    </button>
                    
                </div>
                <MapContainer className='map'/>

            </div>
            <div className='about-wrapper'> 
                <div className='about-description'>
                    <h2 className='family-heading'>{t("about.family")}</h2>
                    <h3>{t("about.andrus")}</h3>
                    <p>{t("about.andrus-desc")}</p>

                    <h3>{t("about.katrin")}</h3>
                    <p>{t("about.katrin-desc")}</p>

                    <h3>{t("about.helerin")}</h3>

                    <h3>{t("about.cetlin")}</h3>
                </div>
                <div className='house-pic-div'>
                    <img className='housepic' src='/tatarimaja.jpg' alt='.'/>
                </div>
            </div>
            <div className='partners-container'>
                <h2>Täname meie partnereid!</h2>
                <div className='partners-wrapper'>
                    <img className='partner' src='/ifLogo.jpeg'/>
                    <img className='partner' src='/dimedumLogo.jpg'/>
                    <img className='partner' src='/kelmikulaLogo.png'/>
                    <img className='partner' src='/laboklinLogo.jpeg'/>
                    <img className='partner' src='/loomakaitseLogo.png'/>
                </div>
            </div>
            
            <div className="slide-container">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                    <div className='slide-image' style={{'backgroundImage': `url(${slideImage.url})`}}>
                        <span>{slideImage.caption}</span>
                    </div>
                    </div>
                ))} 
                </Slide>
            </div>
            
        </div>
    </div>
)}