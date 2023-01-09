import React from 'react'
import { Helmet } from 'react-helmet';
import '../../App.css';
import Aboutinpage from '../Aboutinpage';
import { Button } from '../Button';
import Partners from '../Partners';


function About () {
    return(
        <>
            <Helmet>
                <title>Kliinikust</title>
                <meta name="description" content="Oleme avatud E-R 10-18. Tatari 3, Tallinn" data-react-helmet="true"/>
                <meta name="keywords" content="tatari loomakliinik, helista, tatari tallinn, tatari 3, if kindlustus, laboklin, dimedium, kelmiküla kassijaam, eesti loomakaitse selts" />
            </Helmet>
            <Aboutinpage/>
            
            
        </>
    )
}

export default About;