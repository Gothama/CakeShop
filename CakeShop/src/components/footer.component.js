import React, {Component} from 'react';
import "aos/dist/aos.css";
import "../assets/css/style.css"
import {Link} from 'react-router-dom';


export default class Footer extends Component{
  
    render(){
return(
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>The Cake Factory</h3>
              <p>
                223/K <br/>
                University of Moratuwa, Sri Lanka<br/><br/>
                <strong>Phone:</strong> +97123213123<br/>
                <strong>Email:</strong> cakefactory@gmail.com<br/>
              </p>
              <div className="social-links mt-3">
                <Link to ="#" class="twitter"><i class="bx bxl-twitter"></i></Link>
                <Link to ="#" class="facebook"><i class="bx bxl-facebook"></i></Link>
                <Link to ="#" class="instagram"><i class="bx bxl-instagram"></i></Link>
                <Link to ="#" class="google-plus"><i class="bx bxl-skype"></i></Link>
                <Link to ="#" class="linkedin"><i class="bx bxl-linkedin"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
           
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>The Cake Factory</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      
        Designed by Gothama Rajawasam
      </div>
    </div>
  </footer>
  
);
}
}    
 
