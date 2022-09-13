import React from 'react'
import Advicenav from './Advicenav'
import './Advicevisiting.css'
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';


function Advicevisiting() {
  const {t, i18n} = useTranslation('common');
  return (
    
    <div>
        <div className='advice-nav-list'>
          <ul className='advices'>
            <div className='left'>
              <li className='advice-item'><Link className='advice-link' to={'/questions'}>{t("advicenav.questions")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicevisiting'}>{t("advicenav.advicevisiting")}</Link></li>
              <li className='advice-item'><Link  className='advice-link' to={'/adviceskinhair'} >{t("advicenav.adviceskinhair")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicenutrition'}>{t("advicenav.advicenutrition")}</Link></li>
            </div>
            <div className='right'>
              <li className='advice-item'><Link className='advice-link' to={'/adviceparasites'}>{t("advicenav.adviceparasites")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/adviceurinarystone'}>{t("advicenav.adviceurinarystone")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicefemalecat'}>{t("advicenav.advicefemalecat")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicemalecat'}>{t("advicenav.advicemalecat")}</Link></li>
              <li className='advice-item'><Link className='advice-link' to={'/advicelymedisease'}>{t("advicenav.advicelymedisease")}</Link></li>

            </div>
          </ul>
        </div>
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