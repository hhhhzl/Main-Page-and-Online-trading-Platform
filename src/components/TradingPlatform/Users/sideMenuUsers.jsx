import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@material-ui/icons/Home';
import { Image } from "react-bootstrap";
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import { AccessAlarmOutlined, AccountBalanceWallet, AccountBalanceWalletOutlined, AccountBoxOutlined, AccountCircleOutlined, AccountTreeOutlined } from "@material-ui/icons";
import BallotIcon from '@material-ui/icons/BallotOutlined';
import { Nav } from 'react-bootstrap';
import { Switch, Route, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import '../eplatform.css'


export default function SideMenuUsers() {
  return (
    <div className='side-menu-users'>
      <Nav>
      <div className='img-center'>
          <Link className='nav-link' to="/home">
            <Image
              src="/UFAlogo.jpg"
              height="50"
              alt="UFA_logo"
              roundedCircle
            />
          </Link>
          </div>

        <br />
        
        <Switch>
          <Route path='/eplatform/:users'>
            <div className='side-container-users'>
            <Row className='row-padding'>
              <Link  style={{ color: "white" }} to="/eplatform/:users"><AccountBalanceWalletOutlined fontSize ='large'/></Link>
            </Row>
            <Row className='row-padding'>   
              <Link  style={{ color: "white" }} to="/eplatform/:Stock"><AssessmentIcon fontSize ='large' /></Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white" }} to="/eplatform/:AccountAnalyst"><AccountBoxOutlined fontSize ='large'/></Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white" }} to="/eplatform/:News"><AssignmentIcon fontSize ='large'/></Link>
            </Row>
            <Row className='row-padding'>  
              <Link  style={{ color: "white" }} to="/eplatform/:Message"><BallotIcon fontSize ='large'/></Link>
            </Row>
            
            </div>
          </Route>
        </Switch>
      </Nav>

    </div>
  )
}

/*
<Navbar className = 'side-text' expand="lg">
                  <NavDropdown style={{color: "white"}} title = "Dropdown">
                      <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item  href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
          </Navbar>
*/