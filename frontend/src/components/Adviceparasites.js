import React from 'react'
import Advicenav from './Advicenav';
import './Adviceparasites.css'
import {useTranslation} from "react-i18next";


function Adviceparasites() {
  const {t, i18n} = useTranslation('common');

  return (
    <div>
      <Advicenav/>
        <h2>{t("parasites.header")}</h2>
        <div className='parasites-wrapper'>
          <h4>{t("parasites.header2")}</h4>
          <div><p>{t("parasites.paragraph1")}</p>
          </div>
          <div className='kirpimg'><img className='kirp' src='kirp.jpeg'></img></div>
          
          
        </div>
        <div className='parasites-wrapper'>
          <h4>{t("parasites.header3")}</h4>
          <p>{t("parasites.paragraph2")}</p>
          <p>{t("parasites.paragraph3")}</p>
          <p>{t("parasites.paragraph4")}</p>
          <p>{t("parasites.paragraph5")}</p>
        </div>
    </div>
  )
}

export default Adviceparasites