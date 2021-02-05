import React, { Component } from 'react'
import img from '../../src/assets/img/testimonials/testimonials-1.jpg'
import {Carousel} from 'react-bootstrap';
import "aos/dist/aos.css";

import "../assets/css/style.css"

export class Testimonials extends Component {
    render() {
        return (
           <section id="testimonials" className="testimonials section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Our Customers</h2>
                  <p>Testimonials of The Cake Factory Users</p>
                </div>

              <Carousel >
                
                <Carousel.Item>
                  <div className="d-flex justify-content-center">
                  <div className="testimonial-item col-md-6">
                  <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={img} className="testimonial-img" alt=""/>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
    
                  </div>      
                </Carousel.Item>

                <Carousel.Item>
                  <div className="d-flex justify-content-center">
                    <div className="testimonial-item col-md-6">
                    <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={img} className="testimonial-img" alt=""/>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                    </div>
                  </div>    
                </Carousel.Item>

                <Carousel.Item>
                  <div className="d-flex justify-content-center">
                    <div className="testimonial-item col-md-6">
                    <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={img} className="testimonial-img" alt=""/>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                    </div>
                  </div>    
                </Carousel.Item>

              </Carousel>



            </div>
          </section>





        )
    }
}
