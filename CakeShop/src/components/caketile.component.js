import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"
import {Card,Button} from 'react-bootstrap';



export default class CakeTile extends Component{
  constructor(props){
    super(props);
    this.viewPage = this.viewPage.bind(this);

  }
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
        }

         viewPage() {
          const k = this.props.cakeName;
          console.log('The link was clicked.');
          window.open('/account/' + k,"_self");
        }
    render(){
return(


<div className="col-lg-4" style={{paddingBottom:"20px"}}>
<Card className="box" style={{ width: '23rem' ,paddingBottom:"10px"}} data-aos="zoom-in" data-aos-delay="200">
  <Card.Img variant="top" src={this.props.cImageUrl}/>
  <Card.Body>
    <Card.Title>{this.props.cakeName}</Card.Title>
    <Card.Text>
    {this.props.price}
    </Card.Text>
    <Card.Text>
    {this.props.addedDate}
    </Card.Text>
    <Button variant="warning" onClick={() => this.viewPage()}>View Order</Button>
  </Card.Body>
</Card>
</div>
);
}
}    
 