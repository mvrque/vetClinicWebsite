import React from 'react';
import '../App.css';
import './AboutUs.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

function AboutUs() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className='about-container'>
      <div className='about-container-description'>
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
        <div className='services-btns'>
          <Link className='button-to-services' to={'/services'}>
            <Button className='btns button-to-services' buttonStyle='btn--primary' buttonSize='btn--large'>{t("about.services-btn")}</Button>
          </Link>
        </div>
      </div>
      <div className='papagoi-container'>
        <img className='papagoi' src='/papagoi.jpeg'/>
      </div>
    </div>
  )
}

export default AboutUs