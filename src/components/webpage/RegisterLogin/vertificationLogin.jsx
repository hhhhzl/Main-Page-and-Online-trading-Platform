import {ArrowBack, Opacity} from "@material-ui/icons";
import React, {useContext, useState, useEffect} from "react";
import {Button, Row, Col, InputGroup} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import './loginpage.css';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import data from "../../../static/users.json"
import {Redirect, useHistory} from "react-router";
import PropTypes from 'prop-types';
import useWindowDimensions from "../../../utils/sizewindow";
import {borderBottom, fontWeight} from "@material-ui/system";
import {IconButton} from '@material-ui/core';

export default function VertificationLogin() {
    const {width, height} = useWindowDimensions();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [user, setuser] = useState(data)
    const [time, settime] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [counting, setcounting] = useState(false)
    let history = useHistory();

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0 && time === 0) {
                clearInterval(myInterval)
            } else if (seconds === 0) {
                clearInterval(myInterval)
                settime(1)
                setcounting(false)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    const checkstate = () => {
        if (counting === false) {
            settime(2);
            setSeconds(60);
            setcounting(true)
        }
    }


    return (
        <div>
            <div className="login-container"
                 style={{marginLeft: width > 800 ? "18.75%" : "10%", marginTop: height * 0.1}}>
                <Link className="Link-hover" style={{color: "black", textDecoration: "none"}} to="/home"><ArrowBack/></Link>
                <div style={{width: "100%",display:"flex"}}>
                    <div>
                        <h2 style={{
                            width: "250px",
                            height: "80px",
                            fontSize: "40px",
                            fontFamily: "Microsoft YaHei UI-Bold",
                            fontWeight: "bold",
                            color: "#2A2B30",
                            lineHeight: "80px",
                            letterSpacing: "5px",
                        }}>验证码登录</h2>

                    </div>
                    <div style={{marginLeft: "0px", width: "110px", marginTop: "35px"}}>
                        <Nav.Item>
                            <Link style={{
                                height: "28px",
                                fontSize: "14px",
                                fontFamily: "Microsoft YaHei UI-Bold",
                                fontWeight: "400",
                                color: "#6E7184",
                                lineHeight: "28px",
                                letterSpacing: "1px",
                            }} to="/login">账户登录</Link>
                        </Nav.Item>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{flex: "0 0 26.4%"}}>
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
                    </div>
                    <div>
                        <Nav.Item>
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
                        </Nav.Item>
                    </div>
                </div>
                <br/>
                <br/>

                <Form noValidate validated={validated} id="addProject">
                    <Form.Group >
                        <Form.Label column sm={3} style={{color: "black", fontSize: "14px"}}>
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
                    <Form.Group as={Row} className="loadinglogin"
                    >
                        <Form.Label column sm={2} style={{color: "black", fontSize: "14px"}}>
                            验证码
                        </Form.Label>
                    </Form.Group>


                    <InputGroup >
                        <Form.Control
                            className="loadinglogin"
                            required
                            name='password'
                            type="password"
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >

                        </Form.Control>
                        <Button style={{height:"48px"}} variant="outline-primary" id="button-addon1"
                                onClick={() => checkstate()}>{time == 0 ? "获取验证码" : time == 1 ? "重新发送" : <>{seconds}秒</>}</Button>

                    </InputGroup>
                    <br/>
                    <br/>
                    <Form.Group as={Row} className="loadinglogin" style={{
                        background: "linear-gradient(135deg,#2B8CFF 0%, #2346FF 100%)",
                        borderRadius: "4px 4px 4px 4px"
                    }}>
                        <Button
                            variant="outline-primary"
                            type="submit"
                            style={{color: "white"}}
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
