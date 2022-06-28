import React from 'react';
import './Prices.css';



function Prices() {
  return (
    <div>
        <div>
        <h3>Visiiditasud</h3>
            <table> 
              <tr>
                <td>Visiiditasu</td>
                <td>22€</td>
              </tr>
              <tr>
                <td>Kordusvisiit (kehtib kalendrikuu jooksul, ühe haigusloo ulatuses)</td>
                <td>13€</td>
              </tr>
              <tr>
                <td>Operatsioonide puhul fikseeritud visiiditasu</td>
                <td>25€</td>
              </tr>
              <tr>
                <td>Visiiditasu eelnevalt registreerumata klientidele</td>
                <td>27€</td>
              </tr>
        </table>
        <h3>Vaktsineerimine</h3>
        <table>
          <tr>
            <td>Nobivac DHPPi</td>
            <td>22€</td>
          </tr>
          <tr>
            <td>Nobivac DHPPiL4</td>
            <td>27.20€</td>
          </tr>
          <tr>
            <td>DHPPiL4R</td>
            <td>30€</td>
          </tr>
          <tr>
            <td>R (Marutaud)</td>
            <td>20€</td>
          </tr>
          <tr>
            <td>Tricat</td>
            <td>24€</td>
          </tr>
          <tr>
            <td>TricatR</td>
            <td>28€</td>
          </tr>
          <tr>
            <td>Myxoren</td>
            <td>26€</td>
          </tr>
        </table>
        <h3>Kastreerimine & Steriliseerimine</h3>
        <table>
          <tr>
            <td>Koera kastreerimine - sõltub koera kaalust <br/> (hinnale lisandub valuvaigisti ja krae)</td>
            <td>162€ - 287€</td>
          </tr>
          <tr>
            <td>Koera steriliseerimine - sõltub koera kaalust <br/> (hinnale lisandub valuvaigisti)</td>
            <td>224€ - 357€</td>
          </tr>
          <tr>
            <td>Kassi kastreerimine<br/> (hinnale lisandub valuvaigisti)</td>
            <td>50€</td>
          </tr>
          <tr>
            <td>Kassi steriliseerimine<br/> (hinnale lisandub valuvaigisti)</td>
            <td>80€</td>
          </tr>
          <tr>
            <td>Küüliku, närilise ja tuhkru steriliseerimine</td>
            <td>80€</td>
          </tr>
          <tr>
            <td>Küüliku, närilise ja tuhkru kastreerimine</td>
            <td>90€</td>
          </tr>
        </table>
        <h3>Kosmeetilised protseduurid</h3>
        <table>
          <tr>
            <td>Küünte lõikamine</td>
            <td>8€</td>
          </tr>
          <tr>
            <td>Kõrvade puhastamine</td>
            <td>10€</td>
          </tr>
          <tr>
            <td>Pärakupaunade puhastamine</td>
            <td>10€</td>
          </tr>
          <tr>
            <td>Mikrokiipimine visiidi raames</td>
            <td>14€</td>
          </tr>
          <tr>
            <td>Mikrokiipimine</td>
            <td>25€</td>
          </tr>
          <tr>
            <td>Hammaste lühendamine/lihvimine närilistel</td>
            <td>10€</td>
          </tr>
        </table>
        </div>
    </div>
  )
}

export default Prices