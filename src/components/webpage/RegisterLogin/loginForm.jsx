import { Opacity } from "@material-ui/icons";
import React, { useContext, useState } from "react";
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
import AuthContext from "../../../context/AuthContext";
import useWindowDimensions from "../../../utils/sizewindow";
import { ArrowBack } from "@material-ui/icons";

export default function LoginForm({ setToken }) {
  const { width, height } = useWindowDimensions();
  let { loginUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [user, setuser] = useState(data)
  let history = useHistory();


  const handleClick = (name, password) => {
    pushingforword(determinUser(name, password));
  }

  const pushingforword = (type) => {
    console.log(type)
    if (!type) {
      setUsername("")
      setPassword("")

    } else if (type == "A") {
      history.push("/eplatform/admin")
    } else if (type == "U") {
      history.push("/eplatform/user")
    }

  }



  const determinUser = (name, password) => {
    console.log(name)
    console.log(password)
    let yes = 0;
    let type = "";
    for (let i = 0; i < user.length; i++) {
      if (user[i].name === name && user[i].password === password) {
        return user[i].type;
      }
    }
    return false
  }


  return (
    <div>
      <div className="login-container" style={{ marginLeft: width > 800 ? "18.75%" : "10%", marginTop: height * 0.1 }}>
        <Link className="Link-hover" style={{ color: "black", textDecoration: "none" }} to="/home"><ArrowBack /></Link>
        <Row style={{ width: "100%" }}><Col xs={7}>
          <h2 style={{
            width: "250px",
            height: "80px",
            fontSize: "40px",
            fontFamily: "Microsoft YaHei UI-Bold",
            fontWeight: "bold",
            color: "#2A2B30",
            lineHeight: "80px",
            letterSpacing: "5px",
          }}>账户登录</h2>

        </Col>
          <Col xs={6} style={{ marginLeft: "0px", width: "110px", marginTop: "35px" }}>

              <Link style={{
                height: "28px",
                fontSize: "14px",
                fontFamily: "Microsoft YaHei UI-Bold",
                fontWeight: "400",
                color: "#6E7184",
                lineHeight: "28px",
                letterSpacing: "1px",
              }} to="/Vlogin">验证码登录</Link>

          </Col></Row>
        <Row>
          <Col xs={3}>
            <div style={{
              width: "88px",
              height: "24px",
            }}>
              <h6 style={{
                fontSize: "14px",
                fontFamily: "Microsoft YaHei UI-Bold",
                color: "#2A2B30",
                lineHeight: "24px"
              }}>还没有账户？</h6>
            </div>
          </Col>
          <Col xs={3}>

              <div style={{
                width: "88px",
                height: "24px",
                marginLeft: "-20px",
                marginTop: "-1px",
              }}>
                <Link style={{
                  height: "28px",
                  fontSize: "14px",
                  fontFamily: "Microsoft YaHei UI-Bold",
                  fontWeight: "400",
                  color: "#6E7184",
                  lineHeight: "24px",
                }} to="/register">去注册

                </Link></div>
          </Col>
        </Row>
        <br />
        <br />

        <Form noValidate validated={validated} id="addProject" onSubmit={loginUser}>
          <Form.Group >
            <Form.Label column sm={3} style={{ color: "black", fontSize: "14px" }} >
              邮箱
            </Form.Label>
            <Form.Control
                className="loadinglogin"
              required
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>

          </Form.Group>
          <Form.Group as={Row}
          >
            <Form.Label column sm={2} style={{ color: "black", fontSize: "14px" }}>
              密码
            </Form.Label>
          </Form.Group>




          <Form.Control
            required
            className="loadinglogin"
            name='password'
            type="password"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >

          </Form.Control>

          <div style={{
            width: "100%",
            height: "24px",
            marginLeft: "350px"

          }}>
            <Link to="/forgetpassword"><h6 style={{
              fontSize: "14px",
              fontFamily: "Microsoft YaHei UI-Bold",
              color: "#2A2B30",
              lineHeight: "24px"
            }}>忘记密码？</h6></Link>


          </div>

          <br />
          <br />
          <Form.Group as={Row} className="loadinglogin" style={{ background: "linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)", borderRadius: "4px 4px 4px 4px" }}>
            <Button
              variant="outline-primary"
              type="submit"
              style={{ color: "white" }}
            // onClick ={loginUser}
            >
              登录
            </Button>
          </Form.Group>
        </Form>


      </div>
    </div>
  );
}

