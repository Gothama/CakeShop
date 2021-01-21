import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';


export default class CustOrder extends Component {
    state={
        orders:[]
      }
      constructor(){
        super();
        let customerID = localStorage.getItem("customerID");
        axios.get('http://localhost:9020/ordering/customer/' + customerID).then(res=>{
            console.log(res);
            this.setState({ orders:res.data });
            //window.alert("Okay");
        }).catch(err => console.log(err));
      }





    render() {
        return (
            <div>
               <div style={{padding:"20px"}}>

            
        
    
            <div className="section-title">
                <h2>Orders added by me</h2>
                <p>Your Cake Products</p>
            </div>

            <div className="row">
            <Table striped bordered hover variant="dark" >
  <thead >
    <tr >
      <th >#</th>
      <th style={{textAlign:"center"}}>Cake Model ID</th>
      <th style={{textAlign:"center"}}>Quantity</th>
      <th style={{textAlign:"center"}}>Required Date</th>
      <th style={{textAlign:"center"}}>Order Date</th>
      <th style={{textAlign:"center"}}>Manage</th>
    </tr>
  </thead>
  <tbody>
  { this.state.orders.map(order => 
    <tr>
      <td>1</td>
      <td>{order.cakemodelID}</td>
      <td>{order.quantity}</td>
      <td>{order.requiredDate}</td>
      <td>{order.orderDate}</td>
      <td><Button variant="danger">Cancel</Button> </td>
    </tr>
  )}
  </tbody>
</Table>
</div> 

                </div> 
            </div>
        )
    }
}

/*{ this.state.cakes.map(cake =>  
              
                  <CakeTile key={cake.id} cImageUrl = {cake.cImageUrl} 
                  addedDate={cake.addedDate} 
                  cakeName={cake.cakeName} 
                  price={cake.price} 
                  id={cake.id}/>
              
              )}*/