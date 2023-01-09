import React from 'react'; 
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutUs from '../AboutUs';
import Footer from '../Footer';
import SomeServices from '../SomeServices';
import Specific from '../Specific';
import Newsinhome from '../Newsinhome';
import { Helmet } from 'react-helmet';




function Home () {
    return(
        
        <>
            <Helmet>
                <title>Tatari Loomakliinik - Sõbra Terviseks!</title>
                <meta name="description" content="Tatari Loomakliinik tegutseb aastast 1995 Tallinna kesklinnas. Dr. Andrus Joost on oma tubli tööga teinud kliinikust ühe juhtiva asutuse eksootiliste lemmikloomade ravis ja hooldamises. Aja broneerimiseks helista või saada meil!" data-react-helmet="true"/>
                <meta name="keywords" content="Tatari loomakliinik,+372 646 7084, loomakliinik, veterinary, Andrus Joost, Katrin Vanem-Joost" />
            </Helmet> 
            <HeroSection />
            <SomeServices />
            
            <AboutUs />
            <Newsinhome />
            <Specific />
            
            <Footer></Footer>
            
        </>
    )
}

export default Home;