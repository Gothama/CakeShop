import React, {Component} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"
import {Link} from 'react-router-dom';
import {Accordion, Card} from 'react-bootstrap';



export default class Menu extends Component{
    componentDidMount() {
        AOS.init({duration: 1000,
        once:true});
       
        }
    render(){
return(
<section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>
{/*
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
</div>*/}

        <div className="row" data-aos="fade-up" data-aos-delay="200" >

        <Accordion defaultActiveKey="0" style={{width:"600px", backgroundColor:"#cda45e", borderColor:"#cda45e"}}>
  <Card style={{width:"1200px", backgroundColor:"#cda45e"}}>
    <Accordion.Toggle as={Card.Header} eventKey="0" style={{width:"1200px", backgroundColor:"#cda45e"}}>
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body style={{width:"1200px", backgroundColor:"#37332a"}}>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card style={{width:"1200px", backgroundColor:"#cda45e"}}>
    <Accordion.Toggle as={Card.Header} eventKey="1" style={{width:"1200px", backgroundColor:"#cda45e", borderColor:"#cda45e"}}>
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body style={{width:"1200px", backgroundColor:"#37332a"}}>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card style={{width:"1200px", backgroundColor:"#cda45e"}}>
    <Accordion.Toggle as={Card.Header} eventKey="1" style={{width:"1200px", backgroundColor:"#cda45e", borderColor:"#cda45e"}}>
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body style={{width:"1200px", backgroundColor:"#37332a"}}>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>

   

        </div>

      </div>
    </section>
  
);
}
}    