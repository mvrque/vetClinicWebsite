import React from 'react';
import './Servicesinpage.css'




function Servicesinpage() {
  return (
    <div className='services-container'>
        <h2>Meie kliinikus pakutavad teenused</h2>
        <div className='services-wrapper'>
            <div className='service'>
                <i class="bi bi-bandaid"/>
                <h3>Tervisekontroll ja konsultatsioon</h3>
            </div>
            <div className='service'><h3>Vaktsineerimine</h3></div>            
            <div className='service'><h3>Küünte lõikus</h3></div>            
            <div className='service'><h3>Mikrokiibi paigaldus</h3></div>   
            <div className='service'><h3>Ultraheli diagnostika</h3></div>
            <break/>
            <div className='service'><h3>Vere- ja uriinianalüüsid</h3></div>            
            <div className='service'><h3>Geenitestid - Saksamaa Laboklin laboris</h3></div>            
            <div className='service'><h3>Põlveuuring</h3></div>   
            <div className='service'><h3>Kirurgilised menetlused</h3></div> 
            <div className='service'><h3>Hambakivi eemaldus</h3></div>   
        </div>
        <p>Lisainformatsiooni teenuste kohta saab kliiniku üldtelefonilt 6467084.</p>
    </div>
  )
}

export default Servicesinpage