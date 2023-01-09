import React from 'react'
import { Helmet } from 'react-helmet'
import '../../App.css'
import Newsall from '../Newsall'
import Productsinpage from '../Productsinpage'

export default function News(){
    return <>
        <Helmet>
            <title>Uudised</title>
            <meta name="description" content="Tatari Loomakliiniku uudised." data-react-helmet="true"/>
            <meta name="keywords" content="tatari loomakliinik, +372 646 7084, uudised, pühad, suletud, avatud" />
        </Helmet>
        <Newsall/>
            </>
}