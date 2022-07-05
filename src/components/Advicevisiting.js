import React from 'react'
import Advicenav from './Advicenav'
import './Advicevisiting.css'

function Advicevisiting() {
  return (
    
    <div>
        <Advicenav/>
        <h2>Nõuandeid loomakliiniku külastamiseks</h2>
        <div className='main-container'>
          <ul className='advice-visiting-list'>
            <li>
              <span>Kui soovid oma lemmikuga vastuvõtule tulla, broneeri selleks endale sobiv aeg telefoni teel, et saaksime tagada kiirema ja parema teeninduse.</span>
            </li>
            <li>
              <span>Tulles oma lemmikut vaktsineerima, võta (selle olemasolul) kaasa vaktsineerimistunnistus / lemmikloomapass. Kassidele ja koertele tuleks 7-10 päeva enne vaktsineerimiskuupäeva anda ussirohtu.</span>
            </li>
            <li>
              <span>Enne ussirohtu ning kirbu- ja puugirohtu ostma tulemist selgita välja looma kaal, et saaksime anda tema jaoks täpse doosi.</span>
            </li>
            <li>
              <span>Kui vastuvõtule tulev loom on loomult väga agressiivne, võib loomaarst keelduda temaga tegelemast.
              </span>
            </li>
            <li>
              <span>Kui soovid loomaarstiga telefoni teel konsulteerida, tuleks arvestada sellega, et paralleelselt on toimumas ka vastuvõtud, mis tähendab, et vajadusel võime paluda Teil tagasi helistada.
              </span>
            </li>
            <li>
              <span>Soovi korral teeme meie patsientide haiguslugudest väljavõtteid, kuid ka siinkohal tasuks arvestada väikese ajavaruga.
              </span>
            </li>
            <li>
              <span>Tagamaks enda ja teiste ohutust ning ära hoida looma sobimatut käitumist, palume lemmikud visiidi ajal hoida kas rihma otsas või puuris.
              </span>
            </li>
            <li>
              <span>Meie kliiniku hoovis on klientidele tasuta parkimisvõimalus. Selleks, et tõkkepuud avada, palume helistada kliiniku üldtelefonil 646 7084.
              </span>
            </li>
          </ul>
          <div>
            <img src='adviceVisitingpic.jpeg'></img>
          </div>
        </div>
    </div>
  )
}

export default Advicevisiting