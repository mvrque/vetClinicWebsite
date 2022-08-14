import React from 'react'
import Advicenav from './Advicenav'
import './Advicevisiting.css'
import {useTranslation} from "react-i18next";


function Advicevisiting() {
  const {t, i18n} = useTranslation('common');
  return (
    
    <div>
        <h2>{t("advicevisiting.header")}</h2>
        <div className='main-container'>
        <div className='image-wrapper'>
            <img className='dogrunning' src='adviceVisitingpic.jpeg'></img>
          </div>
          <div className='advice-list-wrapper'>
          <ul className='advice-visiting-list'>
            <li>
              <span>{t("advicevisiting.reserve")}</span>
            </li>
            <li>
              <span>{t("advicevisiting.vaccination")}</span>
            </li>
            <li>
              <span>{t("advicevisiting.dewormer")}</span>
            </li>
            <li>
              <span>{t("advicevisiting.agressive")}</span>
            </li>
            <li>
              <span>{t("advicevisiting.consultation")}
              </span>
            </li>
            <li>
              <span>{t("advicevisiting.medicalhistory")}
              </span>
            </li>
            <li>
              <span>{t("advicevisiting.leash")}
              </span>
            </li>
            <li>
              <span>{t("advicevisiting.parking")}
              </span>
            </li>
          </ul>
          </div>
          
        </div>
    </div>
  )
}

export default Advicevisiting