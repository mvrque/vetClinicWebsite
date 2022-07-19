import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Aboutinpage.css';

export default function Aboutinpage(){
    return (
    <div>   
        <div className='about-page-container'>
            <img className='logo' src='/tatariLogo.jpeg' alt='.'/>
            <p>Tatari Loomakliinik tegutseb 1995. aasta oktoobrikuust Tallinna kesklinnas, aadressil Tatari 3. Selle ajaga on dr. Andrus Joost oma tubli tööga teinud kliinikust ühe juhtiva asutuse tänapäeval populaarseteks muutunud eksootiliste lemmikloomade (närilised, linnud, reptiilid jms.) ravis ja hooldamises. Tatari Loomakliinikul on tihedad koostöösidemed mitme loomakaitsele pühendunud organisatsiooniga.</p>
            
            <div className='about-wrapper'>
                
                <div className='about-description'>
                    <h2></h2>
                    <h3>Andrus Joost - loomaarst ja kliiniku juhataja</h3>
                    <p>Andrus Joost lõpetas EPMÜ Veterinaaria teaduskonna 1994. aastal. Tatari Loomakliiniku asutamisest (1995) peale on dr.Joost olnud kliiniku juhiks ja vedajaks.</p>

                    <h3>Katrin Vanem-Joost - loomaarst</h3>
                    <p>Katrin Vanem on lõpetanud EPMÜ Veterinaaria teaduskonna 2000. aastal ja samast aastast töötab ta Tatari Loomakliinikus.</p>

                    <h3>Helerin Talpsepp - administraator</h3>

                    <h3>Cetlin Jõgis - loomaarsti abiline</h3>
                </div>
                <div className='house-pic-div'>
                    <img className='housepic' src='/tatarimaja.jpg' alt='.'/>
                </div>
            </div>
        </div>
    </div>
)}