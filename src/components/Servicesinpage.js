import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Servicesinpage.css'




function Servicesinpage() {
  return (
    <div className='services-container'>
        <h2>Meie kliinikus pakutavad teenused</h2>
        <p></p>

        <div className='services-wrapper'>
            <div className='service'>
                <i class="service-icon fas fa-heartbeat"/>
                <h3>Tervisekontroll ja konsultatsioon</h3>
            </div>
            <div className='service '>
              <i class="service-icon fas fa-syringe"/>
              <h3>Vaktsineerimine</h3></div>            
            <div className='service'>
              <i class="service-icon fas fa-scissors"/>
              <h3>Küünte lõikus</h3></div>            
            <div className='service'>
              <i class="service-icon fas fa-microchip fa-light"/>
              <h3>Mikrokiibi paigaldus</h3></div>   
            <div className='service'>
              <i class="service-icon fas fa-circle-notch"/>
              <h3>Ultraheli diagnostika</h3></div>
            <break/>
            <div className='service'>
              <i class="service-icon fas fa-vials"/>
              <h3>Vere- ja uriinianalüüsid</h3></div>            
            <div className='service'>
              <i class="service-icon fas fa-dna"/>
              <h3>Geenitestid - Saksamaa Laboklin laboris</h3></div>            
            <div className='service'>
              <i class="service-icon fas fa-microscope"/>
              <h3>Põlveuuring</h3></div>   
            <div className='service'>
              <i class="service-icon fas fa-user-doctor"></i>
              <h3>Kirurgilised menetlused</h3></div> 
            <div className='service'>
              <i class="service-icon fas fa-tooth"/>
              <h3>Hambakivi eemaldus</h3></div>   
        </div>
        <p>Lisainformatsiooni teenuste kohta saab kliiniku üldtelefonilt 6467084.</p>
    </div>
  )
}

export default Servicesinpage