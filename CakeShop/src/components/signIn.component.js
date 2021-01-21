import React, {Component} from 'react';
import "../assets/css/signInSignUp.css"
import image1 from "../assets/img/linkedin.png"
import image2 from "../assets/img/facebook.png"
import image3 from "../assets/img/instagram.png"
import axios from 'axios';



export default class signInOut extends Component{


    componentDidMount(){
        document.querySelector('.img-btn').addEventListener('click', function()
	      {
		      document.querySelector('.cont').classList.toggle('s-signup')
	      }
      );
    }

    
    checkSupplier = async(supplierID1, password1) => {
      console.log(supplierID1);
      console.log(password1);
       const U = {supplierID:supplierID1,password:password1}
       console.log(U);

      await axios.post("http://localhost:9020/supplier/supplierID/" + supplierID1 + "/" +  password1)
       .then(res => {
           console.log(res.data.message);
           if(res.data.message !== "unsuccessful"){
             localStorage.removeItem("supplierID");
             localStorage.removeItem("password");
             localStorage.removeItem("loggedIn");
             localStorage.removeItem("AccountType");
             localStorage.setItem("loggedIn" , "loggedIn")
            localStorage.setItem("supplierID" , supplierID1);
            localStorage.setItem("password" , password1);
            localStorage.setItem("AccountType" , "Supplier");
            console.log("verified");
            this.props.history.push('/');
            window.location.reload();
              
           }
       else{
           
           //window.alert("Pls Enter the correct Login Details")
           console.log("not verified");
          
       }
       })
       .catch(err => {console.log("Unsucessfull"); 
                       window.alert("Wrong");
                      
                       
                   })
   
      
    }

    checkCustomer = async(customerID1, password1) => {
      console.log(customerID1);
      console.log(password1);
       const U = {customerID:customerID1,password:password1}
       console.log(U);

      await axios.post("http://localhost:9020/customer/customerID/" + customerID1 + "/" +  password1)
       .then(res => {
           console.log(res.data.message);
           if(res.data.message !== "unsuccessful"){
             localStorage.removeItem("password");
             localStorage.removeItem("customerID");
             localStorage.removeItem("loggedIn");
             localStorage.setItem("loggedIn" , "loggedIn")
            localStorage.setItem("customerID" , customerID1);
            localStorage.setItem("password" , password1);
            localStorage.setItem("AccountType" , "Customer");
            console.log("verified");
            this.props.history.push('/');
            window.location.reload();
              
           }
       else{
           
           //window.alert("Pls Enter the correct Login Details")
           console.log("not verified");
          
       }
       })
       .catch(err => {console.log("Unsucessfull"); 
                       window.alert("Wrong");
                      
                       
                   })
   
      
    }
  
    render(){
return(
    <div className="signInOutBody">
       
  <div className="cont">
    <div className="form1 sign-in">
      <h2 className="heading2">Sign In</h2>
      <label>
        <span>Username</span>
        <input type="text" name="username" className="input1"/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" className="input1"/>
      </label>
      <button className="submit button1" type="button" onClick = {() => this.checkSupplier("s123456" , "s123456")}>Sign In</button>
      <p className="forgot-pass">Forgot Password ?</p>
      <div className="social-media">
        <ul>
          <li><img src={image1} alt=""/></li>
          <li><img src={image2} alt=""/></li>
          <li><img src={image3} alt=""/></li>
          <li><img src={image1} alt=""/></li>
        </ul>
      </div>

    </div>

    <div className="sub-cont">
      <div className="img">
        <div className="img-text m-up">
          <h2 className="heading2">New here?</h2>
          <p>Sign up and discover great amount of new opportunities!</p>
        </div>
        <div className="img-text m-in">
          <h2 className="heading2">One of us?</h2>
          <p>If you already has an account, just sign in. We've missed you!</p>
        </div>
        <div className="img-btn">
          <span className="m-up">Sign Up</span>
          <span className="m-in">Sign In</span>
        </div>
      </div>
      <div className="form1 sign-up">
        <h2 className="heading2">Sign Up</h2>
        <label>
          <span>Username</span>
          <input type="text" class="input1"/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" class="input1"/>
        </label>
        <button type="button" class="button1 submit" onClick = {() => this.checkCustomer("123456" , "123456")}>Sign Up Now</button>
        <p className="forgot-pass">Forgot Password ?</p>
      <div className="social-media">
        <ul>
          <li><img src={image1} alt=""/></li>
          <li><img src={image2} alt=""/></li>
          <li><img src={image3} alt=""/></li>
          <li><img src={image1} alt=""/></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
<script type="text/javascript" src="script.js"></script>

    </div>

);
}
}   

