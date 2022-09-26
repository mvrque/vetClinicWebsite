import React from 'react';
import { Link } from 'react-router-dom';
import './Advicenav.css'
import {useTranslation} from "react-i18next";
import { useState } from 'react';


function Advicenav() {
    const {t, i18n} = useTranslation('common');
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
    // 👇️ toggle shown state
    
    setIsShown(current => !current);}
  return (
    <div className='advice-nav-list'>
          <div onClick={handleClick} className='nav-advice-div'>
            <h4>{t("advicenav.clickhere")}</h4>
          </div>
          { isShown && (
          <ul className='advices'>
              <li className='advice-item'><Link className='advice-link' to={'/questions'}>{t("advicenav.questions")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicevisiting'}>{t("advicenav.advicevisiting")}</Link></li>
              <li className='advice-item'><Link  className='advice-link' to={'/adviceskinhair'} >{t("advicenav.adviceskinhair")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicenutrition'}>{t("advicenav.advicenutrition")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/adviceparasites'}>{t("advicenav.adviceparasites")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/adviceurinarystone'}>{t("advicenav.adviceurinarystone")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicefemalecat'}>{t("advicenav.advicefemalecat")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicemalecat'}>{t("advicenav.advicemalecat")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicelymedisease'}>{t("advicenav.advicelymedisease")}</Link></li>
          </ul>
          )}
        </div>
  )
}

export default Advicenav