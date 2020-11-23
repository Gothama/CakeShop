import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundim from '../assets/img/about.jpg'
import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'
import "../assets/css/style.css"


export default class Navbar extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
return(
  <div>
    <TopBar/>
    <Header/>
    <HeroSection/>
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
          <div className="about-img">
            <img src={backgroundim} alt=""/>
          </div>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

    </div>
  </section>
  <Footer/>
  </div>
  
);
}
}    
 
