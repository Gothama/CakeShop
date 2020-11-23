import React, {Component} from 'react';
import AOS from "aos";
import {Link} from 'react-router-dom';
import "aos/dist/aos.css";
import img1 from "../assets/img/gallery/gallery-1.jpg"
import img2 from "../assets/img/gallery/gallery-2.jpg"
import img3 from "../assets/img/gallery/gallery-3.jpg"
import img4 from "../assets/img/gallery/gallery-4.jpg"
import img5 from "../assets/img/gallery/gallery-5.jpg"
import img6 from "../assets/img/gallery/gallery-6.jpg"
import img7 from "../assets/img/gallery/gallery-7.jpg"
import img8 from "../assets/img/gallery/gallery-8.jpg"
import "../assets/css/style.css"






export default class Gallery extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
       
    }
    render(){
return(
<section id="gallery" className="gallery">

<div className="container" data-aos="fade-up">
  <div className="section-title">
    <h2>Gallery</h2>
    <p>Some photos from Our Restaurant</p>
  </div>
</div>

<div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

  <div className="row no-gutters">

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="#" className="venobox" data-gall="gallery-item">
          <img src={img1} alt="" class="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="#" className="venobox" data-gall="gallery-item">
          <img src={img2} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="assets/img/gallery/gallery-3.jpg" className="venobox" data-gall="gallery-item">
          <img src={img3} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="assets/img/gallery/gallery-4.jpg" className="venobox" data-gall="gallery-item">
          <img src={img4} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="assets/img/gallery/gallery-5.jpg" className="venobox" data-gall="gallery-item">
          <img src={img5} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="assets/img/gallery/gallery-6.jpg" className="venobox" data-gall="gallery-item">
          <img src={img6} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="assets/img/gallery/gallery-7.jpg" className="venobox" data-gall="gallery-item">
          <img src={img7} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <Link to="#assets/img/gallery/gallery-8.jpg" className="venobox" data-gall="gallery-item">
          <img src={img8} alt="" className="img-fluid"/>
        </Link>
      </div>
    </div>

  </div>

</div>
</section>
  
);
}
}    
 