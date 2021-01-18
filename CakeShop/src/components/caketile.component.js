import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"
import {Card,Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";


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
          const k = this.props.id;
          console.log('The link was clicked.');
          window.open('/account/' + k,"_self");
        }
    render(){
return(
/*   
    <div className="col-lg-4" style={{paddingBottom:"20px"}}>
    <div className="box" data-aos="zoom-in" data-aos-delay="200">
      <span>02</span>
<h4>{this.props.cakeName}</h4>
      <img src={this.props.cImageUrl} alt="" className="img-fluid" style={{width:'100%'}}/>
      {/*<p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>*/
    /*</div>
  </div>*/

<div className="col-lg-4" style={{paddingBottom:"20px"}}>
<Card className="box" style={{ width: '23rem' ,paddingBottom:"10px"}} data-aos="zoom-in" data-aos-delay="200">
  <Card.Img variant="top" src={this.props.cImageUrl}/>
  <Card.Body>
    <Card.Title>{this.props.cakeName}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button variant="warning" onClick={() => this.viewPage()}>View Order</Button>
  </Card.Body>
</Card>
</div>
);
}
}    
 