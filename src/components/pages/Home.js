import React from 'react'; 
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutUs from '../AboutUs';
import Footer from '../Footer';
import SomeNews from '../SomeNews';



function Home () {
    return(
        <>
            <HeroSection />
            <AboutUs />
            <SomeNews />
            <Footer></Footer>
            
        </>
    )
}

export default Home;