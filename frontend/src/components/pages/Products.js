import React from 'react'
import { Helmet } from 'react-helmet';
import '../../App.css'
import Productsinpage from '../Productsinpage';

function Products(){
    return (
        <>
            <Helmet>
                <title>Tooted</title>
                <meta name="description" content="Lisainformatsiooni toodete kohta saab kliiniku üldtelefonilt +372 646 7084." data-react-helmet="true"/>
                <meta name="keywords" content="tatari loomakliinik, +372 646 7084, helista, specific, tooted, hill's, kong, Applaws, royal canin, ceva, Racinel, beaphar, VetPlus, Frontline, Drontal, Diafarm" />
            </Helmet>
            <Productsinpage/>
        </>
    )
}
export default Products;