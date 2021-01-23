import React, {Component} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';




export default class SupAddCakeModel extends Component{
  /*  
      constructor(props){
          super(props); 
          

      this.onChangeCakeName = this.onChangeCakeName.bind(this);
      this.onChangeImageURL = this.onChangeImageURL.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangePrice = this.onChangePrice.bind(this);
      this.onChangeIngredients = this.onChangeIngredients.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);*/
    

    state={
        supplierID:localStorage.getItem("supplierID"),
        cimageURL:"",
        description:"",
        price:"",
        cakeName:"",
        ingrediants:""
      };
     
     
        
    

    onChangeCakeName = e=> {
      this.setState({

        cakeName: e.target.value
      });}

      onChangecImageURL = e=>{
      this.setState({
  
        cimageURL: e.target.value
      });}
      onChangeDescription = e=> {
      this.setState({
    
        description: e.target.value
      });}

      onChangePrice = e=> {
        this.setState({
      
          price: e.target.value
      });}
      onChangeIngrediants = e=> {
        this.setState({
  
          ingrediants: e.target.value
        });}
        
        handleSubmit= event =>  {
          event.preventDefault();
        

          console.log("okay");
         
          const cake = {
             supplierID:this.state.supplierID,
             cImageUrl:this.state.cimageURL,
            description:this.state.description,
            price:this.state.price,
            cakeName:this.state.cakeName,
            ingrediants:this.state.ingrediants
          };

          console.log(cake);
          axios.post( "http://localhost:9020/cakes/ncake", cake)
          .then(response=>{
            console.log(response)
          }).catch(error=>{
            console.log(error)
          })




     
          
         
      };
        
  
    render(){

return(
    <div style={{padding:"20px"}}>
        <div className="section-title">
                <h2>Add Cake Model</h2>
                <p>Add Your Cake Model</p>
            </div>
                     
            <Form style={{padding:"20px"}}   onSubmit={this.handleSubmit}>


                
        
                
  <Form.Group as={Row} controlId="formHorizontalFName" >
    <Form.Label column sm={2}>
     Cake Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  defaultValue=  "Cake Name" 
      required onChange={this.onChangeCakeName} value={this.state.cakeName}
      name='cakeName'
      />
    </Col>
  </Form.Group> 
                

  <Form.Group as={Row} controlId="formHorizontalLName" >
    <Form.Label column sm={2}>
      ingrediants
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  defaultValue=  "Cake Name" 
      required onChange={this.onChangeIngrediants} value={this.state.ingrediants}  
     />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalUserName" >
    <Form.Label column sm={2}>
      ImageURL
    </Form.Label>
    <Col sm={10}>
    <Form.Control type="text"  defaultValue=  "Cake Name" 
      required onChange={this.onChangecImageURL} value={this.state.cimageURL}  
      name='cimageURL'/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
    <Form.Control type="text"  defaultValue=  "Cake Name" 
      required onChange={this.onChangeDescription} value={this.state.description}  
     />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalTelephoneNumber">
    <Form.Label column sm={2}>
      Price
    </Form.Label>
    <Col sm={10}>
    <Form.Control type="text"  defaultValue=  "Cake Name" 
      required onChange={this.onChangePrice} value={this.state.price}  
     />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" style={{backgroundColor:"red"}} >Add</Button>
    </Col>
  </Form.Group>   
  
 
</Form>  
        
    </div>
);
}
}   