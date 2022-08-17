import React from 'react'; 
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutUs from '../AboutUs';
import Footer from '../Footer';
import SomeNews from '../SomeNews';
import SomeServices from '../SomeServices';
import Specific from '../Specific';




function Home () {
    return(
        <>
            <HeroSection />
            <SomeServices />
            <AboutUs />
            <Specific />
            
            <Footer></Footer>
            
        </>
    )
}

export default Home;