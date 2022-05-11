import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { SentimentSatisfiedAlt } from "@material-ui/icons";
import './loginpage.css';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function RegisterForm() {
  const [show, setShow]=useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [sex, setSex] = useState("M");
  const [mobileNumber, setMobileNumber] = useState("");
  const [degree, setDegree] = useState("1");
  const [org, setOrg] = useState("1");
  const [userType, setUserType] = useState("U");

  const handleClose=()=>setShow(false);
  const handleShow=()=> setShow(true);
  const testData = {
    last_name: lastName,
    first_name: firstName,
    username: username,
    password: password,
    sex: sex,
    org: org,
    email: email,
    mobile_number: mobileNumber,
    degree: degree,
    user_type: userType,
};

const [validated, setValidated] = useState(false);

  return (
    <div>
      <div className ="login-interface">
      <div className="container-fluid main">
        <Row>
          <Col xs ={2}>
          <div className = 'image-layout'>
      </div>
            
          </Col>    
          <Col xs={10}>
          <h2 style={{color:"white",marginTop:"1%"}}><strong>注册账号</strong></h2>
          </Col>
      </Row>
        <hr/>
        <br/>
      <Form  id="addProject">

        {/*
        <div className = 'image-layout'>
      <Image
      src = "/head.jpeg"
      title="head image"
      id="img-txz"
      alt="header"  
      roundedCircle   
      style={{
        position: "relative",    
        width: "80%",
        height: "40",
      }}/>
      </div>
    */}

        <Form.Group className="loadingusername" as={Row}>
          <Form.Label column>
            用户名*
          </Form.Label>
  
            <Form.Control
              className="loadinglogin"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>

          <Form.Label column sm={2}>
            邮箱*
          </Form.Label>

            <Form.Control
              className="loadinglogin"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
 
          <Form.Label column>
            密码*
          </Form.Label>
 
            <Form.Control
              className="loadinglogin"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          <Form.Label column>
            手机号码*
          </Form.Label>

            <Form.Control
            className="loadinglogin"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group className="loadingusername" as={Row}>
          <Form.Label column sm={2}>
            姓*
          </Form.Label>
          <Col sm={3}>
            <Form.Control
            className="loadinglogin"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Col>
          <Form.Label column sm={2}>
            名*
          </Form.Label>
          <Col sm={5}>
            <Form.Control
            className="loadinglogin"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label className="loadingusername" column sm={2}>
            性别*
          </Form.Label>
          <Col sm={3}>
            
            <Form.Select className="loadinglogin" required value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="">选择性别</option>
              <option value="male">男</option>
              <option value="wemale">女</option>
              <option value="unknown">其他</option>
              
            </Form.Select>
          </Col>
          <Form.Label className="loadingusername" column sm={2}>
            学历*
          </Form.Label>
          <Col sm={3}>
            <Form.Select
            className="loadinglogin"
              required
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            >
              <option value="">选择学历</option>
              <option value="hs">高中</option>
              <option value="college">大学</option>
              <option value="graduate">研究生</option>
              <option value="phd">博士</option>
              <option value="after">已毕业</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group className="loadingusername" as={Row}>

          <Form.Label column>
            院校/单位*
          </Form.Label>
 
            <Form.Control
             className="loadinglogin"
              required
              type="password"
              value={password}
              onChange={(e) => setOrg(e.target.value)}
            ></Form.Control>

        </Form.Group>
        <hr/>
        <Row>
            <Col xs={8}>
            <Link style ={{color:"white",fontSize:16,padding:25}} to="/login">去登陆</Link>
            </Col>
            <Col xs ={4}>
              <Nav.Item>
                <Link style ={{color:"white",fontSize:16,padding:25}} to="/home">回到主页</Link>
              </Nav.Item>

            </Col>
            </Row>
        <br/>


        <Form.Group className="loadingusername" as={Row}>
 
            <Button
              variant="outline-primary"
              // onClick={() => {
              //   const data = {
              //     username,
              //     password,
              //     email,
              //     last_name: lastName,
              //     first_name: firstName,
              //     sex,
              //     mobile_number: mobileNumber,
              //     degree,
              //     org: org,
              //     user_type: userType,
              //   };
              //   dispatch(register({ data }));
              // }}
            >
              注册
            </Button>
        </Form.Group>
      </Form>
      </div>
      </div>
    </div>
  );
}
