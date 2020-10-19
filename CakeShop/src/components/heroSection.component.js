import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import "../assets/css/style.css"


import $ from 'jquery';

export default class HeroSection extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }

        signUp(){
 
            const { value: formValues } = Swal.fire({
              title: 'Sign Up',
              html:
                '<input type ="text" id="swal-input1" class="swal2-input" value="Name" required>' +
                '<input type ="text" id="swal-input2" class="swal2-input" value="Telephone" required>'+
                '<input type ="text" id="swal-input2" class="swal2-input" value="Username" required>'+
                '<input type ="password" id="swal-input2" class="swal2-input"value="Password" required>'+
                '<input type ="email" id="swal-input2" class="swal2-input"value="email@h.com" required>'+
                '<textarea id="swal-input2" class="swal2-input"value="Address" required>Address'+'</textarea>'+
                '<!--<input type="submit" id="submit" value="submit" style="color:white; background-color:blue">-->',
              focusConfirm: false,
              confirmButtonText: 'Sign In',
              preConfirm: () => {
                return [
                  document.getElementById('swal-input1').value,
                  document.getElementById('swal-input2').value,
                  //window.alert(document.getElementById('swal-input1').value)
                ]
              }
            }).then(value=>{
              if(document.getElementById('swal-input1').value == "Gothama"){
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                var k = document.getElementById('swal-input1').value;
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })
                localStorage.clear();
                
                localStorage.setItem("username" , k);
                localStorage.setItem("loggedIn" , "loggedIn");
      
                
               window.location.href="/"
                
              
                
              }
              else{
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: 'Signed in unsuccessfully'
                })
              }
            })
            
           
          };
 
    render(){
return(
<section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome to <span>The Cake Factory</span></h1>
          <h2>Delivering great cakes to your door step from bakers around Srilanka!</h2>

          <div className="btns">
            {localStorage.getItem("loggedIn") === "loggedIn"?<a ></a>:<a onClick={this.signUp} className="btn-menu animated fadeInUp scrollto">Sign Up</a>}
            
           
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="venobox play-btn" data-vbtype="video" data-autoplay="true"></a>
        </div>

      </div>
    </div>
  </section>
   
);
}
}    
 
