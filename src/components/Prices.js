import React from 'react';
import './Prices.css';
import {useTranslation} from "react-i18next";



function Prices() {
  const {t, i18n} = useTranslation('common');
  return (
    <div>
      <h2>{t("prices.header")}</h2>
        <div>
        <h3 className='prices-heading'>{t("prices.visitfee")}</h3>
            <table> 
              <tr>
                <td>{t("prices.visitfee")}</td>
                <td>22€</td>
              </tr>
              <tr>
                <td>{t("prices.returnvisit")}</td>
                <td>13€</td>
              </tr>
              <tr>
                <td>{t("prices.operation")}</td>
                <td>25€</td>
              </tr>
              <tr>
                <td>{t("prices.nonregistered")}</td>
                <td>27€</td>
              </tr>
        </table>
        <h3 className='prices-heading'>{t("services.vaccination")}</h3>
        <table>
          <tr>
            <td>{t("prices.nobivac")}</td>
            <td>22€</td>
          </tr>
          <tr>
            <td>{t("prices.nobivac4")}</td>
            <td>27.20€</td>
          </tr>
          <tr>
            <td>{t("prices.dhppil4r")}</td>
            <td>30€</td>
          </tr>
          <tr>
            <td>{t("prices.rabies")}</td>
            <td>20€</td>
          </tr>
          <tr>
            <td>{t("prices.tricat")}</td>
            <td>24€</td>
          </tr>
          <tr>
            <td>{t("prices.tricatr")}</td>
            <td>28€</td>
          </tr>
          <tr>
            <td>{t("prices.myxoren")}</td>
            <td>26€</td>
          </tr>
        </table>
        <h3 className='prices-heading'>{t("prices.castrationsterilization")}</h3>
        <table>
          <tr>
            <td>{t("prices.dogcast")}</td>
            <td>162€ - 287€</td>
          </tr>
          <tr>
            <td>{t("prices.dogster")}</td>
            <td>224€ - 357€</td>
          </tr>
          <tr>
            <td>{t("prices.catcast")}</td>
            <td>50€</td>
          </tr>
          <tr>
            <td>{t("prices.catster")}</td>
            <td>80€</td>
          </tr>
          <tr>
            <td>{t("prices.othersster")}</td>
            <td>80€</td>
          </tr>
          <tr>
            <td>{t("prices.otherscast")}</td>
            <td>90€</td>
          </tr>
        </table>
        <h3 className='prices-heading'>{t("prices.cosmetical")}</h3>
        <table>
          <tr>
            <td>{t("prices.nails")}</td>
            <td>8€</td>
          </tr>
          <tr>
            <td>{t("prices.ears")}</td>
            <td>10€</td>
          </tr>
          <tr>
            <td>{t("prices.analgland")}</td>
            <td>10€</td>
          </tr>
          <tr>
            <td>{t("prices.chippingvisit")}</td>
            <td>14€</td>
          </tr>
          <tr>
            <td>{t("prices.chipping")}</td>
            <td>25€</td>
          </tr>
          <tr>
            <td>{t("prices.teeth")}</td>
            <td>10€</td>
          </tr>
        </table>
        <p className='more-information'>{t("services.information")}</p>
        </div>
    </div>
  )
}

export default Prices