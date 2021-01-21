import React, {Component} from 'react';
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';
import img1 from "../assets/img/logo.gif"

import "../assets/css/style.css"


export default class Header extends Component{

      logout() {
        localStorage.clear();
        window.location.href = '/';
        localStorage.removeItem("supplierID");
        localStorage.removeItem("password");
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("AccountType");
    }

    signIn(){
      /*const { value: formValues } = Swal.fire({
        title: 'Sign In',
        html:
          '<input type ="text" id="swal-input1" class="swal2-input" value="Username" required>' +
          '<input type ="password" id="swal-input2" class="swal2-input"value="Password" required>'+
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
      })*/
      
     
    };
 
    render(){
return(
<header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
    <a href="index.html" className="logo mr-auto"><img src={img1} alt="" className="img-fluid"/></a>
      <h1 className="logo mr-auto" style={{textAlign:"left"}}><a href="/" >The Cake Factory</a></h1>

        

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li ><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
   
          <li><Link to ="/allSuppliers">All Cakes</Link></li>
          <li><Link to ="/contact">Contact</Link></li>

       {localStorage.getItem("loggedIn") ==="loggedIn" && localStorage.getItem("AccountType") ==="Customer"? <li ><a href="/customerAccount">Account</a></li> : <li></li>}
       {localStorage.getItem("loggedIn") ==="loggedIn" && localStorage.getItem("AccountType") ==="Supplier"? <li ><a href="/supplierAccount">Account</a></li> : <li></li>}
          {localStorage.getItem("loggedIn") ==="loggedIn"? <li onClick = {this.logout} className="book-a-table text-center"><a href="#book-a-table">Sign Out</a></li>  :<li className="book-a-table text-center"><Link to="/signIn">Sign In</Link></li>} 

     

          
        </ul>
      </nav>

    </div>
  </header>
  
);
}
}    
 
