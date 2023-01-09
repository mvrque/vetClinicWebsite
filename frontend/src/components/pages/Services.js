import React from 'react'
import { Helmet } from 'react-helmet';
import '../../App.css'
import Prices from '../Prices';
import Servicesinpage from '../Servicesinpage';

function Services () {
    return(
        <>
        <Helmet>
            <title>Hinnakiri</title>
            <meta name="description" content="Vaata lähemalt meie kliinikus pakutavate teenuste hinnakirja!" data-react-helmet="true"/>
            <meta name="keywords" content="tatari loomakliinik, hinnakiri, teenused, kassi vaktsineerimine, koera vaktsineerimine, vaccination, kassi kastreerimine, koera kastreerimine kassi küünte lõikamine, koera küünte lõikamine , küülik, närilised, " />
        </Helmet>
        <Servicesinpage/>
        <Prices/>
        </>
   
    )
}

export default Services;