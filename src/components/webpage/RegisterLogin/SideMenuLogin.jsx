import {React,useState, useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@material-ui/icons/Home';
import { Col, Image } from "react-bootstrap";
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import { AccessAlarmOutlined, AccountBalanceWallet, AccountBalanceWalletOutlined, AccountBoxOutlined, AccountCircleOutlined, AccountTreeOutlined, ArrowBackIosOutlined } from "@material-ui/icons";
import BallotIcon from '@material-ui/icons/BallotOutlined';
import { Nav, Button } from 'react-bootstrap';
import { Switch, Route, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import useWindowDimensions from "../../../utils/sizewindow";
import { CloseOutlined } from '@material-ui/icons'
import { ViewHeadlineTwoTone } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import userEvent from "@testing-library/user-event";


export default function SideMenuLogin() {
  const {height,width} = useWindowDimensions();

  return (
    <>
        <Switch>
          <Route path='/'>
            <div className='side-container-users'>
            <Row className='row-padding'>
               <Link className = "link-row" style={{textDecoration:"none", letterSpacing:"5px",fontSize:"20px"}} to="/login"></Link>
            </Row>
            <Row className='row-padding'>   
              <Link className = "link-row" style={{textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/login/forgetpassword"></Link>
            </Row>
            <Row className='row-padding'>  
            <Link className = "link-row"  style={{textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/login/changepassword"></Link>
            </Row>
            <Row className='row-padding'>  
            <Link className = "link-row"  style={{textDecoration:"none", letterSpacing:"5px",fontSize:"20px" }} to="/login/Vcode"></Link>
            </Row>
            <Row className='row-padding'>  
            <Link className = "link-row" style={{textDecoration:"none",letterSpacing:"5px",fontSize:"20px" }} to="/register"></Link>
            </Row>
            </div>
          </Route>
        </Switch>
    </>
  )
}
