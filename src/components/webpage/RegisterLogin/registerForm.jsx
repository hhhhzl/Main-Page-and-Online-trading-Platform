import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { SentimentSatisfiedAlt } from "@material-ui/icons";
import './loginpage.css';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import useWindowDimensions from "../../../utils/sizewindow";
import { Nav } from 'react-bootstrap';
import { ArrowBack } from "@material-ui/icons";
import { connect } from "react-redux";
import { RegisterAuthAction } from "../../../redux/actions/AuthAction";

function RegisterForm(props) {
  const {
    user, 
    register
   } = props;
  const [userState, setUserState] = useState({})
  const [show, setShow]=useState(false);
  const {width, height} = useWindowDimensions();

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
  const [regin, setRegin] = useState("")
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
     
      <div className="login-container" style={{marginLeft: width > 800? "18.75%": "10%", marginTop: height *0.1}}>
      <Link style ={{color:"black",textDecoration:"none"}} to="/home"><ArrowBack/></Link>
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
        }}>欢迎注册</h2>

      </Col>
      <Col xs = {6} style={{marginLeft:"0px",width:"110px",marginTop:"35px" }}>
      </Col></Row>
      <Row>
        <Col xs={3}>
        <div style={{
        width:"88px",
        height:"24px",
        }}>
      <h6 style={{ fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Bold",
        color:"#2A2B30",
        lineHeight:"24px"}}>已有账户？</h6>
      </div>
        </Col>
        <Col xs={3}>
        <div style={{
        width:"88px",
        height:"24px",
        marginLeft:"-20px",
        marginTop:"-1px",
        }}>
              <Link style ={{height:"28px",
        fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"400",
        color:"#6E7184",
        lineHeight:"24px",
        }} to="/login">去登录

        </Link></div>
        </Col>
      </Row>
        <br/>
        <br/>
      <Form  noValidate validated={validated} id="addProject" onSubmit={(event) => {
        event.preventDefault();
        register(userState)
      }}>

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

        <Form.Group className="loadingusername">
          <Form.Label column>
            用户名
          </Form.Label>
  
            <Form.Control
              className="loadinglogin"
              required
              value={username}
              onChange={(e) =>{
                const username = e.target.value
                setUsername(e.target.value)
                setUserState({...userState, ...{ username }});

              }
              }
            ></Form.Control>

          {/* <Form.Label column sm={2}>
            邮箱
          </Form.Label>

            <Form.Control
              className="loadinglogin"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control> */}
 
          <Form.Label column>
            密码
          </Form.Label>
 
            <Form.Control
              className="loadinglogin"
              required
              type="password"
              value={password}
              onChange={(e) => {
                const password = e.target.value;
                setPassword(e.target.value)
                setUserState({...userState, ...{ password }});
              }}
            ></Form.Control>
          {/* <Form.Label column>
            手机号
          </Form.Label>

            <Form.Control
            className="loadinglogin"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></Form.Control> */}
        </Form.Group>

        {/* <Form.Group className="loadingusername" as={Row}>
        <Col sm={6}>
          <Form.Label column >
            姓
          </Form.Label>
         
            <Form.Control
            className="loadinglogin"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Col>
          <Col sm={6}>
          <Form.Label column>
            名
          </Form.Label>
          
            <Form.Control
            className="loadinglogin"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group> */}

        {/* <Form.Group as={Row}>
        <Col sm={6}>
          <Form.Label className="loadingusername" column sm={2}>
            性别
          </Form.Label>
          
            
            <Form.Select className="loadinglogin" required value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="">选择性别</option>
              <option value="male">男</option>
              <option value="wemale">女</option>
              <option value="unknown">其他</option>
              
            </Form.Select>
          </Col>
          <Col sm={6}>
          <Form.Label className="loadingusername" column>
            学历
          </Form.Label>
         
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
        </Form.Group> */}

        {/* <Form.Group className="loadingusername">

          <Form.Label column>
            院校/单位
          </Form.Label>
 
            <Form.Control
             className="loadinglogin"
              required
              value={password}
              onChange={(e) => setOrg(e.target.value)}
            ></Form.Control>

        </Form.Group> */}

        {/* <Form.Group className="loadingusername">

          <Form.Label column>
            地区
          </Form.Label>
 
            <Form.Control
             className="loadinglogin"
              required  
              value={password}
              onChange={(e) => setRegin(e.target.value)}
            ></Form.Control>

        </Form.Group> */}

        {/* <Row>
            <Col xs={8}>
            <Link style ={{color:"black",fontSize:16,padding:25}} to="/login">去登陆</Link>
            </Col>
            <Col xs ={4}>
              <Nav.Item>
                <Link style ={{color:"black",fontSize:16,padding:25}} to="/home">回到主页</Link>
              </Nav.Item>

            </Col>
            </Row> */}
        <br/>


        <Form.Group as={Row} className="loadinglogin" style={{background:"linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)", borderRadius:"4px 4px 4px 4px"}}>
 
            <Button
              variant="outline-primary"
              type="submit"
              style={{color:"white"}}
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
  );
}

const mapStateToProps = (state) =>{
  return {
    user: state,

  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    register: (userState) => {
      dispatch(RegisterAuthAction(userState));
      console.log(userState,335)
    },
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)