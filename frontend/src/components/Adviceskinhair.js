import React from 'react';
import Advicenav from './Advicenav';
import './Adviceskinhair.css'
import {useTranslation} from "react-i18next";


function Adviceskinhair() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className='skinhair-container'>
      <Advicenav/>
        <h2>{t("adviceskin.header")}</h2>
        <div className='skinhair-wrapper'>
          <h4>{t("adviceskin.bacterial")}</h4>
          <p>{t("adviceskin.bacterial_p")}</p>
        </div>
        <div className='skinhair-wrapper'>
          <h4>{t("adviceskin.fungal")}</h4>
          <p>{t("adviceskin.fungal_p")}</p>
        </div>
        <div className='skinhair-wrapper'>
          <h4>{t("adviceskin.hormonal")}</h4>
          <p>{t("adviceskin.hormonal_p")}</p>
        </div>
        <div className='skinhair-wrapper'>
          <h4>{t("adviceskin.allergy")}</h4>
          <p>{t("adviceskin.allergy_p")}</p>
        </div>
    </div>
  )
}

export default Adviceskinhair