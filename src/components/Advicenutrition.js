import React from 'react';
import Advicenav from './Advicenav';
import './Advicenutrition.css'
import {useTranslation} from "react-i18next";



function Advicenutrition() {
  const {t, i18n} = useTranslation('common');

  return (
    <div>
        <h2>{t("nutrition.header")}</h2>
        <div className='nutrition-wrapper'>
          <h4>{t("nutrition.headerfood")}</h4>
          <p>{t("nutrition.introduction1")}
          <br/>
          {t("nutrition.introduction2")}</p>
          <ul className='nutrition-list'>
            <li><span>{t("nutrition.list1")}</span></li>
            <li><span>{t("nutrition.list2")}</span></li>
            <li><span>{t("nutrition.list3")}</span></li>
            <li><span>{t("nutrition.list4")}</span></li>
            <li><span>{t("nutrition.list5")}</span></li>
            <li><span>{t("nutrition.list6")}</span></li>
            <li><span>{t("nutrition.list7")}</span></li>
            <li><span>{t("nutrition.list8")}</span></li>
          </ul>
          <p>{t("nutrition.legal")}</p>
        </div>
        <div className='nutrition-wrapper'>
          <h4>{t("nutrition.analyse")}</h4>
          <p>{t("nutrition.analyse1")}
          <br/>
          {t("nutrition.analyse2")}</p>
          <ul className='nutrition-list'>
            <h5>{t("nutrition.comparisingheader")}</h5>
            <li>{t("nutrition.second1")}</li>
            <li>{t("nutrition.second2")}</li>
            <li>{t("nutrition.second3")}</li>
            <li>{t("nutrition.second4")}</li>
            <h5>{t("nutrition.comparisingdry")}</h5>
            <li>{t("nutrition.second5")}</li>
            <li>{t("nutrition.second6")}</li>
            <li>{t("nutrition.second7")}</li>
            <li>{t("nutrition.second8")}</li>
            <li>{t("nutrition.second9")}</li>
            <li>{t("nutrition.second10")}</li>
            <li>{t("nutrition.second11")}</li>
            <li>{t("nutrition.second12")}</li>
          </ul>
        </div>
        <div className='nutrition-wrapper'>
          <h4>{t("nutrition.ingredientheader")}</h4>
          <p>{t("nutrition.ingredient1")}
            <br/>
            {t("nutrition.ingredient2")}
          </p>
        </div>
        <div className='nutrition-wrapper'>
          <h4>{t("nutrition.energyheader")}</h4>
          <p>{t("nutrition.energy1")}
          <br/>
          {t("nutrition.energy2")}
          </p>
          <ul className='nutrition-list'>
            <li>{t("nutrition.energylist1")}</li>
            <li>{t("nutrition.energylist2")}</li>
          </ul>
          <p>{t("nutrition.energy3")}</p>
          <ul className='nutrition-list'>
            <h5>{t("nutrition.energycalcheader")}</h5>
            <li>{t("nutrition.energycalc1")}</li>
            <li>{t("nutrition.energycalc2")}</li>
            <li>{t("nutrition.energycalc3")}</li>
            <li>{t("nutrition.energycalc4")}</li>
            <h5>{t("nutrition.food_a")}</h5>
            <li>{t("nutrition.energycalc5")}</li>
            <li>{t("nutrition.energycalc6")}</li>
            <li>{t("nutrition.energycalc7")}</li>
            <li>{t("nutrition.energycalc8")}</li>
            
          </ul>
          <p>{t("nutrition.howmuchfood")}</p>
          <p>{t("nutrition.formula1")}<br/>
          {t("nutrition.formula2")}<br/>
          {t("nutrition.formula3")} <br/>
          {t("nutrition.formula4")}<br/>
          {t("nutrition.formula5")}
          </p>
        </div>
        <div className='nutrition-wrapper'>
          <h4>{t("nutrition.foodinstructionheader")}</h4>
          <p>{t("nutrition.instruction1")}
            <br/>
            {t("nutrition.instruction2")}
          </p>
        </div>
    </div>
  )
}

export default Advicenutrition