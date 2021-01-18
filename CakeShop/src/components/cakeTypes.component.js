import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import "aos/dist/aos.css";
import img1 from "../assets/img/event-birthday.jpg";
import img2 from "../assets/img/event-private.jpg";
import img3 from "../assets/img/event-custom.jpg";
import "../assets/css/style.css"



export default class CakeTypes extends Component{
    
    render(){
return(
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Our Cakes</h2>
          <p>Our Bakers produce different types of delicious Cakes</p>
        </div>

       

<Carousel>
  <Carousel.Item>
  <div className="row event-item" style={{height:"60vh"}}>
            <div className="col-lg-6">
              <img src={img1}className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Birthday Parties</h3>
              <div className="price">
                <p><span>$189</span></p>
              </div>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div> </div>  
        
  </Carousel.Item>
  <Carousel.Item>
  <div className="row event-item" style={{height:"60vh"}}>
            <div className="col-lg-6">
              <img src={img2} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Private Parties</h3>
              <div classNames="price">
                <p><span>$290</span></p>
              </div>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="row event-item" style={{height:"60vh"}}>
            <div className="col-lg-6">
              <img src={img3}className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Custom Parties</h3>
              <div className="price">
                <p><span>$99</span></p>
              </div>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
  </Carousel.Item>
</Carousel>

      </div>
    </section>
  
);
}
}    
 
