import React,{Component}from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./Navbar.css";

class Navbar extends Component {
    render (){
        return (
            <BrowserRouter>

    <MDBNav className="justify-content-center">
      <MDBNavItem>
      <a href="https://www.linkedin.com/in/mary-santibanez-89342210b/"><MDBNavLink active to="/"> Linkedin </MDBNavLink></a>
      </MDBNavItem> 
      <a href='https://github.com/SantiiMari'><MDBNavItem>
        <MDBNavLink to="/">Github repo</MDBNavLink>
      </MDBNavItem></a>
  
    </MDBNav>

  </BrowserRouter>
          
        );
    }
}

export default Navbar;



