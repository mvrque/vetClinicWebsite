import React from 'react'; 
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutUs from '../AboutUs';
import Footer from '../Footer';
import SomeServices from '../SomeServices';
import Specific from '../Specific';
import Newsinhome from '../Newsinhome';




function Home () {
    return(
        <>
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