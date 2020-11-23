import React, {Component} from 'react';
import "aos/dist/aos.css";
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'

import WhyUs from './whyus.component';
import Menu from './menu.component';
import Footer from './footer.component';
import CakeTypes from './cakeTypes.component';
import "../assets/css/style.css"
import Gallery from './gallery.component';

export default class LandingPage extends Component{
  
    render(){
return(
    <div>
        <TopBar/>
        <Header/>
        <HeroSection/>
       
        <WhyUs/>
        <Menu/>
        <CakeTypes/>
       <Gallery/>
       
        <Footer/>
       
    </div>
);
}
}    
 
