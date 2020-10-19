import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'
import "../assets/css/style.css"

import $ from 'jquery';

export default class Contact extends Component{
  
    render(){
return(
  <div>
    <TopBar/>
    <Header/>
    <HeroSection/>

<section id="contact" class="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3000601205854!2d79.91354531459311!3d6.973881594961881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581cbe3d06f5%3A0x17c98045f95e4fe2!2sFaculty%20of%20Science%20University%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1594377283112!5m2!1sen!2slk" frameBorder="0" style={{border:'0', width: '100%', height: '350px' ,allowfullscreen:'allowfullscreen'}}></iframe>
        {/*<iframe style={{border:'0', width: '100%', height: '350px'}} src={{"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"}} frameborder="0" allowfullscreen></iframe>*/}
      </div>

      <div className="container" data-aos="fade-up">

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="open-hours">
                <i className="icofont-clock-time icofont-rotate-90"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br/>
                  11:00 AM - 2300 PM
                </p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    <Footer/>
    </div>
  
);
}
}    
 
