import React from 'react';
import './Productsinpage.css';
import {useTranslation} from "react-i18next";

function Productsinpage() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className='products-container'>
        <div className='specific-container'>
            <h2>{t("products.header")}</h2>
            <a href="https://www.specific.ee" target="_blank" rel="noreferrer">
              <img className='specific-pic' src='/specificReklaam.jpg'/>
            </a>
            <p>{t("products.information")}</p>
        </div>
        <div className='products-others'>
          
            <img className='others-pic' src='/productsOthers.jpg'/>
        
        </div>
    </div>
  )
}

export default Productsinpage