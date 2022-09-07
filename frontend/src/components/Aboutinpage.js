import React from 'react'
import '../App.css';
import './Aboutinpage.css';
import MapContainer from './Map';
import ButtonMailto from './ButtonMailto';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
    return (
    <div>   
        <div className='about-page-container'>
            <h2>Tatari Loomakliinik - aastast 1995</h2>
            <p>Tatari Loomakliinik tegutseb 1995. aasta oktoobrikuust Tallinna kesklinnas, aadressil Tatari 3. Selle ajaga on dr. Andrus Joost oma tubli tööga teinud kliinikust ühe juhtiva asutuse tänapäeval populaarseteks muutunud eksootiliste lemmikloomade (närilised, linnud, reptiilid jms.) ravis ja hooldamises. Tatari Loomakliinikul on tihedad koostöösidemed mitme loomakaitsele pühendunud organisatsiooniga.</p>
            <div className='map-container'>
                <div className='phone-mail-container'> 
                    <ButtonMailto mailto="mailto:tlk@tatari.ee" className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        Kirjuta meile
                    </ButtonMailto>
                    <button className='call-us'>
                        <a className='phone-nr' href="tel:+372 646 7084"  data-rel="external">+372 646 7084</a>
                    </button>
                    
                </div>
                <MapContainer className='map'/>

            </div>
            <div className='about-wrapper'> 
                <div className='about-description'>
                    <h2 className='family-heading'>Meie perekond</h2>
                    <h3>Andrus Joost - loomaarst ja kliiniku juhataja</h3>
                    <p>Andrus Joost lõpetas EPMÜ Veterinaaria teaduskonna 1994. aastal. Tatari Loomakliiniku asutamisest (1995) peale on dr.Joost olnud kliiniku juhiks ja vedajaks.</p>

                    <h3>Katrin Vanem-Joost - loomaarst</h3>
                    <p>Katrin Vanem on lõpetanud EPMÜ Veterinaaria teaduskonna 2000. aastal ja samast aastast töötab ta Tatari Loomakliinikus.</p>

                    <h3>Helerin Talpsepp - administraator</h3>

                    <h3>Cetlin Jõgis - loomaarsti abiline</h3>
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