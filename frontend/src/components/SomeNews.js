import React from 'react';
import '../App.css';
import './SomeNews.css';
import { Button } from './Button';

function SomeNews() {
  return (
    <div className='latestNews-container'>
        <h2>Uudised</h2>
        <div className='someNews-container'>
            <div className='news-wrap'>
                <div className='smallNews'>
                    <h3>Lahtiolekuajad 14.04 ja 15.05</h3>
                    <span className='date-posted'>11. apr. 2022</span>
                    <p className='news-text'>Kallid loomakliiniku kliendid, Anname Teile teada, et seoses ülestõusmispühadega oleme avatud järgnevalt: 14.04.2022 (neljapäev) – avatud 10:00-15:00 15.04.2022 (reede) – oleme suletud Toredaid lihavõttepühasid soovides, Tatari Loomakliinik</p>
                    <a className='read-more' href=''>Loe edasi</a>
                </div>
                <div className='smallNews'>
                    <h3>Lahtioleku aeg 24.02</h3>
                    <span className='date-posted'>18. veebr. 2022</span>
                    <p className='news-text'>Head loomakliiniku kliendid, Anname Teile teada, et seoses Eesti vabariigi aastapäevaga oleme avatud järgnevalt: 23.02.2022 (kolmapäev) – avatud 10:00-15:00 24.02.2022 (neljapäev) oleme suletud Head Eesti vabariigi aastapäeva soovides, Tatari Loomakliinik</p>
                    <a className='read-more' href=''>Loe edasi</a>
                </div>
                <div className='smallNews'>
                    <h3>Tööpakkumine: Loomaarsti abiline</h3>
                    <span className='date-posted'>17. dets. 2021</span>
                    <p className='news-text'>Töö kirjeldus Tatari loomakliinik otsib oma meeskonda täistööajaga loomaarsti abilist, kes peab registreerima patsiente visiitidele, operatsioonidele, nõustama kliente tervisetoodete osas, müüma parimaid loomakliinikus müüdavaid toitusid, soovitama </p>
                    <a className='read-more' href=''>Loe edasi</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SomeNews