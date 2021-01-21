import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";

import  '../src/assets/vendor/bootstrap/css/bootstrap.min.css'; 
import '../src/assets/vendor/icofont/icofont.min.css'; 
import  '../src/assets/vendor/boxicons/css/boxicons.min.css'; 
import  '../src/assets/vendor/aos/aos.css'; 
import  '../src/assets/vendor/venobox/venobox.min.css'; 



import LandingPage from "./components/landingpage.component";
import Contact from "./components/contact.component";
import AllSuppliers from "./components/allSuppliers.component";
import Account from "./components/account.component";
import About from "./components/about.component";
import SupplierAccount from './components/supplierAccount/supplierAccount.component';
import signInOut from './components/signIn.component';
import { cakeDetail } from './components/cakeDetail.component';
import CustomerAccount from './components/customerAccount/customerAccount.component'


function App() {

  return (
    <Router>
      <Route path = "/" exact component={LandingPage}/>
      <Route path = "/contact" exact component={Contact}/>
      <Route path = "/allSuppliers" exact component={AllSuppliers}/> 
      <Route path = "/about" exact component={About}/>
      <Route path = "/account" exact component={Account}/>
      <Route path ="/supplierAccount" exact component={SupplierAccount}/>
      <Route path ="/signIn" exact component={signInOut}/>
      <Route path = "/cakeDetail/:cakeID" exact component = {cakeDetail}/>
      <Route path ="/customerAccount" exact component={CustomerAccount}/>
      <Route path ="/supplierAccount" exact component={SupplierAccount}/>
    </Router>
  );
}

export default App;

