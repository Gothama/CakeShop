import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"
import {Card,Button} from 'react-bootstrap';
import Moment from 'react-moment';
import Swal from 'sweetalert2'

 


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
          const name = this.props.cakeName;
          const imageURL = this.props.cImageUrl;
          const addedDate = <Moment format="YYYY/MM/DD">{this.props.addedDate}</Moment>;
          const ingrediants = this.props.ingrediants;
          const price = this.props.price;
          const description = this.props.description;
          console.log('The link was clicked.');
         // window.open('/account/' + k,"_self");
          
         Swal.fire({
          title: name,
          html: '<div>Cake Ingrediants:'+ ingrediants + '<br />Cake price: ' + price + '<br />Description: ' + description +'</div>',
          imageUrl:imageURL,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })



        }
    render(){
return(


<div className="col-lg-4" style={{paddingBottom:"20px"}}>
<Card className="box" style={{ width: '23rem' ,paddingBottom:"10px"}} data-aos="zoom-in" data-aos-delay="200">
  <Card.Img variant="top" src={this.props.cImageUrl}/>
  <Card.Body>
    <Card.Title>Cake Name : {this.props.cakeName}</Card.Title>
    <Card.Text>
    Cake Price : {this.props.price}
    </Card.Text>
    <Card.Text>

    Model Added on: <Moment format="YYYY/MM/DD">{this.props.addedDate}</Moment>
    </Card.Text>
    <Button variant="warning" onClick={() => this.viewPage()}>More Details</Button>
  </Card.Body>
</Card>
</div>
);
}
}    
 