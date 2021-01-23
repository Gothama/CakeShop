import React, {Component} from 'react';
import "../assets/css/signInSignUp.css"
import image1 from "../assets/img/linkedin.png"
import image2 from "../assets/img/facebook.png"
import image3 from "../assets/img/instagram.png"
import axios from 'axios';



export default class signInOut extends Component{
  constructor(props){
              super(props); 
              

          this.onChangeCPassword = this.onChangeCPassword.bind(this);
          this.onChangeCustomerID = this.onChangeCustomerID.bind(this);
          this.onChangeSupplierID = this.onChangeSupplierID.bind(this);
          this.onChangeSPassword = this.onChangeSPassword.bind(this);
         


        this.state={
            supplierID:"",
            customerID:"",
            cpassword:"",
            spassword:""
          };


  
}
    onChangeCPassword(e) {
      this.setState({

        cpassword: e.target.value
    });}

  onChangeSPassword(e) {
    this.setState({
  
      spassword: e.target.value
    });}

    onChangeCustomerID(e) {
      this.setState({
    
        customerID: e.target.value
      });}

      onChangeSupplierID(e) {
        this.setState({
      
          supplierID: e.target.value
        });}


    componentDidMount(){
        document.querySelector('.img-btn').addEventListener('click', function()
	      {
		      document.querySelector('.cont').classList.toggle('s-signup')
	      }
      );
    }

    
    handleSubmitC = event => {
      event.preventDefault();
     
        console.log("okay")
        const cID = this.state.customerID;
        const cP =  this.state.cpassword;
      axios.post("http://localhost:9020/customer/customerID/" + cID + "/" + cP)
        .then(res=>{
          console.log(res);
          if(res.data === "successful"){
            localStorage.removeItem("password");
            localStorage.removeItem("customerID");
            localStorage.removeItem("loggedIn");
            localStorage.setItem("loggedIn" , "loggedIn")
           localStorage.setItem("customerID" , this.state.customerID);
           localStorage.setItem("password" , this.state.cpassword);
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
   handleSubmitS = event => {
    event.preventDefault();
   
      console.log("okay")
      const sID = this.state.supplierID;
      const sP =  this.state.spassword;
    axios.post("http://localhost:9020/supplier/supplierID/" + sID + "/" + sP)
      .then(res=>{
        console.log(res);
        if(res.data === "successful"){
          localStorage.removeItem("supplierID");
          localStorage.removeItem("password");
          localStorage.removeItem("loggedIn");
          localStorage.removeItem("AccountType");
          localStorage.setItem("loggedIn" , "loggedIn")
         localStorage.setItem("supplierID" , sID);
         localStorage.setItem("password" , sP);
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

  
    render(){
return(
    <div className="signInOutBody">
       
  <div className="cont">
    <div className="form1 sign-in">
      <h2 className="heading2">Sign In</h2>
      <form onSubmit = { this.handleSubmitS }>
      <label>
        <span>Username</span>
        <input type="text" class="input1" required onChange={this.onChangeSupplierID} value={this.state.supplierID}/>

      </label>
      <label>
        <span>Password</span>
        <input type="password" class="input1" required onChange={this.onChangeSPassword} value={this.state.spassword}/>
      </label>
      <button className="submit button1" type="submit" >Sign In</button>
      <p className="forgot-pass">Forgot Password ?</p>
      <div className="social-media">
        <ul>
          <li><img src={image1} alt=""/></li>
          <li><img src={image2} alt=""/></li>
          <li><img src={image3} alt=""/></li>
          <li><img src={image1} alt=""/></li>
        </ul>
      </div>
</form>
    </div>

    <div className="sub-cont">
      <div className="img">
        <div className="img-text m-up">
          <h2 className="heading2">Are you a customer?</h2>
          <p>Sign in and discover great amount of new opportunities!</p>
        </div>
        <div className="img-text m-in">
          <h2 className="heading2">Are you a supplier</h2>
          <p>Sign in and discover great amount of new opportunities!</p>
        </div>
        <div className="img-btn">
          <span className="m-up">Sign In</span>
          <span className="m-in">Sign In</span>
        </div>
      </div>
      <div className="form1 sign-up">
        <h2 className="heading2">Sign Up</h2>
        <form onSubmit = { this.handleSubmitC }>
        <label>
          <span>Username</span>
          <input type="text" class="input1" required onChange={this.onChangeCustomerID} value={this.state.customerID}/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" class="input1" required onChange={this.onChangeCPassword} value={this.state.cpassword}/>
        </label>
        {/*<button type="button" class="button1 submit" onClick = {() => this.checkCustomer("123456" , "123456")}>Sign Up Now</button>*/}
        <button type="submit" class="button1 submit">Sign In</button>
        <p className="forgot-pass">Forgot Password ?</p>
      <div className="social-media">
        <ul>
          <li><img src={image1} alt=""/></li>
          <li><img src={image2} alt=""/></li>
          <li><img src={image3} alt=""/></li>
          <li><img src={image1} alt=""/></li>
        </ul>
      </div></form>
      </div>
    </div>
  </div>
<script type="text/javascript" src="script.js"></script>

    </div>

);
}
}   

