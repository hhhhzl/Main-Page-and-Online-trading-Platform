import { Opacity } from "@material-ui/icons";
import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import './loginpage.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import data from "../../static/users.json"
import { Redirect, useHistory } from "react-router";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function LoginForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [user, setuser]= useState(data)
  let history = useHistory();
  

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const handleClick = (name,password) => {
      pushingforword(determinUser(name,password));
  }

  const pushingforword =(type) =>{
    console.log(type)
    if (!type){
      setUsername("")
      setPassword("")
      
    }else if (type == "A"){
      history.push("/eplatform/admin")
    }else if (type == "U"){
      history.push("/eplatform/user")
    }

  }



  const determinUser = (name, password) =>{
    console.log(name)
    console.log(password)
    let yes = 0;
    let type = "";
    for (let i =0; i < user.length;i++){ 
      if (user[i].name === name && user[i].password === password){
        return user[i].type;
      }
    }
    return false
  }
  

  return (
    <div>
      <Image
      src = "/loginback.jpg"
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
        <Form noValidate validated={validated} id="addProject" onSubmit={handleSubmit}>
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
              onClick ={() => handleClick(username,password)}
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

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
};