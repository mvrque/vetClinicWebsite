import React from 'react';
import '../App.css';
import './AboutUs.css';
import { Button } from './Button';

function AboutUs() {
  return (
    <div className='about-container'>
        <img className='logo' src='/tatariLogo.jpeg' alt='.'/>
        <p>Tatari Loomakliinik tegutseb 1995. aasta oktoobrikuust Tallinna kesklinnas, aadressil Tatari 3. Selle ajaga on dr. Andrus Joost oma tubli tööga teinud kliinikust ühe juhtiva asutuse tänapäeval populaarseteks muutunud eksootiliste lemmikloomade (närilised, linnud, reptiilid jms.) ravis ja hooldamises. Tatari Loomakliinikul on tihedad koostöösidemed mitme loomakaitsele pühendunud organisatsiooniga.</p>
        <div className='services-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>TEENUSED JA HINNAKIRI</Button>
        </div>
        
    </div>
  )
}

export default AboutUs