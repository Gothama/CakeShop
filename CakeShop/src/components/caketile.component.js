import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';

import "../assets/css/style.css"
import $ from 'jquery';

export default class CakeTile extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }
    render(){
return(
    
    <div className="col-lg-4" style={{paddingBottom:"20px"}}>
    <div className="box" data-aos="zoom-in" data-aos-delay="200">
      <span>02</span>
<h4>{this.props.cakeName}</h4>
      <img src={this.props.cImageUrl} alt="" className="img-fluid" style={{width:'100%'}}/>
      {/*<p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>*/}
    </div>
  </div>

);
}
}    
 