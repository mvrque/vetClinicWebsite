import React from 'react';
import './Partners.css';
import '../App.css';

function Partners() {
  return (
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
  )
}

export default Partners