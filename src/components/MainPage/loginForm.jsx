import { Opacity } from "@material-ui/icons";
import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import './loginpage.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [validated, setValidated] = useState(false);

  return (
    <div>
      <Image
      src = "/home_page.jpg"
      title="Cover image"
      alt="views in the World"     
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />


    

    <div className ="login-interface">
      <div className="container-fluid main">
        <h2 style={{color:"white"}}><strong>登录平台</strong></h2>
        <hr/>
        <br/>
        <Form noValidate validated={validated} id="addProject">
        <Form.Group as={Row} className="loadingusername">
          <Form.Label column sm={3} >
            用户账号
          </Form.Label>
            <Form.Control
            required
             className="loadinglogin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Row} className="loadinguserpassword">
          <Form.Label column sm={2}>
            密码
          </Form.Label>
            <Form.Control
            required
            className="loadinglogin"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <hr/>
          <Row>
            <Col xs={8}>
              <h6 style={{color:"white"}}>使用邮箱登录</h6>
            </Col>
            <Col xs ={4}>
              <Nav.Item>
                <Link style ={{color:"white",fontSize:16,padding:25}} to="/register">注册新账号</Link>
              </Nav.Item>

            </Col>
            </Row>
          
          <br/>
          <Form.Group as={Row} className="loadinglogin">
          <Button
              variant="outline-primary"
            >
              登录
            </Button>
            
            
            
            
        </Form.Group>
      </Form>
      
      </div>
    </div>
    </div>
  );
}
