import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import img1 from '../assets/img/about.jpg'
import "../assets/css/style.css"
import HeroSection from './heroSection.component';
import CakeTile from './caketile.component';
import axios from 'axios';

export default class AllSuppliers extends Component{
  state={
    cakes:[]
  }
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
         axios.get(`http://localhost:9020/cakes/`)
          .then(res => {
            const cakes = res.data;
             this.setState({ cakes });
         })



        }
    render(){
return(
    <div>
         <TopBar/>
        <Header/>
        <HeroSection/>
        <section id="why-us" className="why-us" style={{paddingTop:"170px"}}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <span>01</span>
              <h4>Lorem Ipsum</h4>
              <img src={img1} alt=""className="img-fluid" style={{width:'100%'}}/>
              <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <span>02</span>
              <h4>Repellat Nihil</h4>
              <img src={img1} alt="" className="img-fluid" style={{width:'100%'}}/>
              <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
             
              <h4> Ad ad velit qui</h4>
              <img src={img1}  className="img-fluid" style={{width:'100%'}}/>
              
            </div>
          </div>

        </div>
        <br/>
        <div className="row">
        { this.state.cakes.map(cake =>  

            <CakeTile cImageUrl = {cake.cImageUrl} 
            description={cake.ingrediants} 
            cakeName={cake.cakeName} 
            id={cake.cakeName}/>
            
        )}

</div>

      </div>
    </section>
  <Footer/></div>
  
);
}
}    