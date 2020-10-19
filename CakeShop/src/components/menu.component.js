import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import "../assets/css/style.css"

import $ from 'jquery';

export default class Menu extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
       
        }
    render(){
return(
<section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-6 menu-item filter-starters">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Lobster Bisque</a><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Bread Barrel</a><span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Crab Cake</a><span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Caesar Selections</a><span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Tuscan Grilled</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Mozzarella Stick</a><span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Greek Salad</a><span>$9.95</span>
            </div>
            <div class="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Spinach Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img style={{backgroundImage:"assets/img/menu/lobster-bisque.jpg"}} className="menu-img" alt=""/>
            <div className="menu-content">
              <a href="#">Lobster Roll</a><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>

        </div>

      </div>
    </section>
  
);
}
}    