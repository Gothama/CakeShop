import React, { Component } from 'react'
import {Form,Row,Col,Button,Nav,Tab} from 'react-bootstrap';
import axios from 'axios';

export default class signUp extends Component {
    render() {
        return (
            <div>
                  <div>
    <div style={{backgroundColor:"#14213d",paddingBottom:"100px" , paddingTop:"100px" , paddingLeft:"400px", paddingRight:"500px"}} >

<div style={{padding:"20px",backgroundColor:"#2b3e69"}}>
        <div className="section-title">
                <h2>My Account</h2>
                <p>Your Account Details</p>
            </div>
            <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="first">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="second">Option 2</Nav.Link>
  </Nav.Item>

</Nav>   

<Tab.Content>
        <Tab.Pane eventKey="first">
        <Form style={{padding:"20px"}}>


                
        
                
<Form.Group as={Row} controlId="formHorizontalFName" >
  <Form.Label column sm={2}>
   Name
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder= {this.state.customerID} defaultValue=  {this.state.customerID}*/ />
  </Col>
</Form.Group> 
              

<Form.Group as={Row} controlId="formHorizontalLName" >
  <Form.Label column sm={2}>
    Customer ID
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder={this.state.customerID} defaultValue={this.state.customerID}*//>
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalUserName" >
  <Form.Label column sm={2}>
    Address
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder={this.state.address} defaultValue={this.state.address}*/
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalPassword">
  <Form.Label column sm={2}>
    Password
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="password" /*placeholder="Password" defaultValue={this.state.password}*/
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
  <Form.Label column sm={2}>
    Mobile No.
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder="Password" defaultValue={this.state.telephoneNum}*/
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalDOB">
  <Form.Label column sm={2}>
    Email
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="email" /*placeholder="Email Address" defaultValue={this.state.email}*/
    />
  </Col>
</Form.Group>
<Form.Group as={Row} controlId="formHorizontalCheck">
  <Col sm={{ span: 10, offset: 2 }}>
    <Form.Check label="Remember me" />
  </Col>
</Form.Group>
<Form.Group as={Row}>
  <Col sm={{ span: 10, offset: 2 }}>
    <Button type="submit" style={{backgroundColor:"red"}}/* onClick={this.update}*/>Update</Button>
  </Col>
</Form.Group>   


</Form>  
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Form style={{padding:"20px"}}>


                
        
                
<Form.Group as={Row} controlId="formHorizontalFName" >
  <Form.Label column sm={2}>
   Name
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder= {this.state.customerID} defaultValue=  {this.state.customerID}*/ />
  </Col>
</Form.Group> 
              

<Form.Group as={Row} controlId="formHorizontalLName" >
  <Form.Label column sm={2}>
    Customer ID
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder={this.state.customerID} defaultValue={this.state.customerID}*//>
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalUserName" >
  <Form.Label column sm={2}>
    Address
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder={this.state.address} defaultValue={this.state.address}*/
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalPassword">
  <Form.Label column sm={2}>
    Password
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="password" /*placeholder="Password" defaultValue={this.state.password}*/
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
  <Form.Label column sm={2}>
    Mobile No.
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="text" /*placeholder="Password" defaultValue={this.state.telephoneNum}*/
    />
  </Col>
</Form.Group>

<Form.Group as={Row} controlId="formHorizontalDOB">
  <Form.Label column sm={2}>
    Email
  </Form.Label>
  <Col sm={10}>
    <Form.Control type="email" /*placeholder="Email Address" defaultValue={this.state.email}*/
    />
  </Col>
</Form.Group>
<Form.Group as={Row} controlId="formHorizontalCheck">
  <Col sm={{ span: 10, offset: 2 }}>
    <Form.Check label="Remember me" />
  </Col>
</Form.Group>
<Form.Group as={Row}>
  <Col sm={{ span: 10, offset: 2 }}>
    <Button type="submit" style={{backgroundColor:"red"}}/* onClick={this.update}*/>Update</Button>
  </Col>
</Form.Group>   


</Form> 
        </Tab.Pane>
      </Tab.Content>




            <Form style={{padding:"20px"}}>


                
        
                
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
     Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" /*placeholder= {this.state.customerID} defaultValue=  {this.state.customerID}*/ />
    </Col>
  </Form.Group> 
                

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      Customer ID
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" /*placeholder={this.state.customerID} defaultValue={this.state.customerID}*//>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      Address
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" /*placeholder={this.state.address} defaultValue={this.state.address}*/
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" /*placeholder="Password" defaultValue={this.state.password}*/
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
    <Form.Label column sm={2}>
      Mobile No.
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" /*placeholder="Password" defaultValue={this.state.telephoneNum}*/
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" /*placeholder="Email Address" defaultValue={this.state.email}*/
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}}/* onClick={this.update}*/>Update</Button>
    </Col>
  </Form.Group>   
  
 
</Form>  
        
    </div>
</div>

    </div>  
            </div>
        )
    }
}
