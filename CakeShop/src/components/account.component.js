import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import CakeTile from './caketile.component';
import Footer from './footer.component';
import TopBar from './topbar.component'
import Header from './header.component'
import HeroSection from './heroSection.component'
import "../assets/css/style.css"
import axios from 'axios';
import $ from 'jquery';

export default class Navbar extends Component{
  state = {
          cakes: [],
      };
    componentDidMount() {
       
        axios.get('http://localhost:9000/cakes/baker/' + 1234
         ).then(res=>{
          console.log(res);
          this.setState({ cakes:res.data });
      }).catch(err => console.log(err));

      axios.get('http://localhost:9000/cakes/baker/' + 1234
      ).then(res=>{
       console.log(res);
       this.setState({ cakes:res.data });
   }).catch(err => console.log(err));

   
      AOS.init({duration: 1000,
        once:true});
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
            {
          this.state.cakes.map(cake=>  
              <CakeTile cakeName = {cake.cakeName} cImageUrl={cake.cImageUrl}/>
              
          )
          }
            
            </div>
<br/><br/><br/><br/>
            <div className="section-title">
                <h2>Why Us</h2>
                <p>Why Choose Our Restaurant</p>
            </div>

            <div className="row">
            {
          this.state.cakes.map(cake=>  
              <CakeTile cakeName = {cake.cakeName} cImageUrl={cake.cImageUrl}/>
              
          )
          }
            
            </div>
            
         

          </div>
        </section>
       
       
        <Footer/>
  </div>
  
);
}
}    
 
