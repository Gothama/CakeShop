import React, {Component} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';



export default class custAccountDetails extends Component{
    
      constructor(){
          super();
          this.state={
        customerID:[],
        telephoneNum:[],
        address:[],
        email:[],
        password:[],
        name:[]
      }
        
        let customerID = localStorage.getItem("customerID");
        axios.get('http://localhost:9020/customer/allDetails/' + customerID).then(res=>{
            console.log(res);
            this.setState({ customerID:res.data["customerID"],
            telephoneNum:res.data["telephoneNum"],
            address:res.data["address"],
            email:res.data["email"],
            password:res.data["password"],
        
        
        });
            console.log(this.state.customerID );
            //window.alert("Okay");
        }).catch(err => console.log(err));
      }


  
    render(){
return(
    <div style={{padding:"20px"}}>
        <div className="section-title">
                <h2>My Account</h2>
                <p>Your Account Details</p>
            </div>
                     
            <Form style={{padding:"20px"}}>


                
        
                
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
     Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder= {this.state.customerID} defaultValue=  {this.state.customerID} />
    </Col>
  </Form.Group> 
                

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Customer ID
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder={this.state.customerID} defaultValue={this.state.customerID}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Address
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder={this.state.address} defaultValue={this.state.address}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" defaultValue={this.state.password}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
    <Form.Label column sm={2}>
      Mobile No.
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Password" defaultValue={this.state.telephoneNum}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email Address" defaultValue={this.state.email}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}} onClick={this.update}>Update</Button>
    </Col>
  </Form.Group>   
  
 
</Form>  
        
    </div>
);
}
}   