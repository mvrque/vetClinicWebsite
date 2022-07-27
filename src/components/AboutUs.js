import React from 'react';
import '../App.css';
import './AboutUs.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className='about-container'>
      <div className='about-container-description'>
        <h2>TERE TULEMAST TATARI LOOMAKLIINIKUSSE!</h2>
        <p>Tatari Loomakliinik tegutseb 1995. aasta oktoobrikuust Tallinna kesklinnas, aadressil Tatari 3. Selle ajaga on dr. Andrus Joost oma tubli tööga teinud kliinikust ühe juhtiva asutuse tänapäeval populaarseteks muutunud eksootiliste lemmikloomade (närilised, linnud, reptiilid jms.) ravis ja hooldamises. Tatari Loomakliinikul on tihedad koostöösidemed mitme loomakaitsele pühendunud organisatsiooniga.</p>
        <div className='services-btns'>
          <Link className='button-to-services' to={'/servisces'}>
            <Button className='btns button-to-services' buttonStyle='btn--primary' buttonSize='btn--large'>TEENUSED JA HINNAKIRI</Button>
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