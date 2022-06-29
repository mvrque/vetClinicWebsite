import React from 'react';
import './Productsinpage.css';

function Productsinpage() {
  return (
    <div className='products-container'>
        <div className='specific-container'>
            <h2>Meie kliinikus pakutavad tooted</h2>
            <img className='specific-pic' src='/specificReklaam.jpg'/>
            <p>Lisainformatsiooni toodete kohta saab kliiniku üldtelefonilt 6467084.</p>
        </div>
        <div className='products-others'>
            <img className='others-pic' src='/productsOthers.jpg'/>
        </div>
    </div>
  )
}

export default Productsinpage