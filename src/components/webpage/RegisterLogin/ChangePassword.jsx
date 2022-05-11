import { ArrowBack, Opacity } from "@material-ui/icons";
import React, { useContext, useState, useEffect } from "react";
import { Button, Row, Col, InputGroup } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import './loginpage.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import data from "../../../static/users.json"
import { Redirect, useHistory } from "react-router";
import PropTypes from 'prop-types';
import useWindowDimensions from "../../../utils/sizewindow";
import { borderBottom, fontWeight } from "@material-ui/system";
import { IconButton } from '@material-ui/core';

export default function ChangePassword() {
  const {width, height} = useWindowDimensions();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [user, setuser]= useState(data)
  let history = useHistory();  

  return (
    <div>
    <div className="login-container" style={{marginLeft: width > 800? "18.75%": "10%", marginTop: height *0.1}}>
     <Link style ={{color:"black",textDecoration:"none"}} to="/login"><ArrowBack/></Link>
      <Row style={{width:"100%"}}><Col xs = {7}>
      <h2 style={{
        width:"250px",
        height:"80px",
        fontSize:"40px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"bold",
        color:"#2A2B30",
        lineHeight:"80px",
        letterSpacing:"5px",
        }}>修改密码</h2>

      </Col>
      <Col xs = {6} style={{marginLeft:"0px",width:"110px",marginTop:"35px" }}>
      </Col></Row>
      <Row>
        <Col xs={6}>
        <div style={{
        width:"150px",
        height:"24px",
        }}>
      <h6 style={{ fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Bold",
        color:"#2A2B30",
        lineHeight:"24px"}}>请修改您的密码</h6>
      </div>
        </Col>
        <Col xs={3}>

        </Col>
      </Row>
      <br/>
      <br/>
     
      <Form noValidate validated={validated} id="addProject" >
      <Form.Group as={Row}  className="loadinglogin">
        <Form.Label column sm={3} style={{color:"black",fontSize:"14px"}} >
          新密码
        </Form.Label>
          <Form.Control
          required
           name = 'username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
          
        </Form.Group>
        <Form.Group as={Row} className="loadinglogin"
        >
            <Form.Label column sm={12} style={{color:"black",fontSize:"14px"}}>
          确认新密码
        </Form.Label>
        <Form.Control
          required
          name = 'password'
            type="password"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
              
          </Form.Control>

        </Form.Group>

    
    
          <br/>
          <br/>
        <Form.Group as={Row} className="loadinglogin" style={{background:"linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)", borderRadius:"4px 4px 4px 4px"}}>
        <Button
            variant="outline-primary"
            type="submit"
            style={{color:"white"}}
            // onClick ={loginUser}
          >
            确定
          </Button>
      </Form.Group>
    </Form>
    

  </div>
  </div>
  );
}
