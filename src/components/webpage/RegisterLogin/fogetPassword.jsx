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

export default function ForgetPassword() {
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
        }}>忘记密码</h2>

      </Col>
      <Col xs = {6} style={{marginLeft:"0px",width:"110px",marginTop:"35px" }}>
      </Col></Row>
      <Row>
        <Col xs={12}>
        <div style={{
        height:"24px",
        width:"100%"
        }}>
      <h6 style={{ fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Bold",
        color:"#2A2B30",
        lineHeight:"24px"}}>输入与您的帐户关联的电子邮件地址，我们将向您发送一个链接以重置您的密码。如忘记邮件地址，请联系管理员。</h6>
      </div>
        </Col>
        <Col xs={0}>

        </Col>
      </Row>
      <br/>
      <br/>
     
      <Form noValidate validated={validated} id="addProject" >
      <Form.Group as={Row}  className="loadinglogin">
        <Form.Label column sm={3} style={{color:"black",fontSize:"14px"}} >
          邮箱
        </Form.Label>
          <Form.Control
          required
           name = 'username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
          
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
            发送
          </Button>
      </Form.Group>
    </Form>
    

  </div>
  </div>
  );
}
