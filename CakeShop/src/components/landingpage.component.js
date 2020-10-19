import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'
import About from './about.component'
import WhyUs from './whyus.component';
import Menu from './menu.component';
import Footer from './footer.component';
import Contact from './contact.component';
import CakeTypes from './cakeTypes.component';
import "../assets/css/style.css"
import $ from 'jquery';
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
 
