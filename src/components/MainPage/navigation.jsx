import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Button, Col, Row, Container } from 'react-bootstrap';
import "./navigation.css";
import Navbar from 'react-bootstrap/Navbar';



export default function Navigation(props) {
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = bodyScrollTop > 85 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  

  const whiteBackground = scrolledDownEnough
    ? "white-background navbar-border"
    : "navbar";
  const fontColor = scrolledDownEnough ? "blue-font" : "white-font";

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  return (

    <Navbar collapseOnSelect className={whiteBackground} fixed={"top"} expand="sm">
    <Container className='nav-bar-main'>
      <Nav className="justify-content-end" fill variant="pills">
        <Nav.Item>
            <Link className={`${fontColor}`}  style ={{fontSize:16,padding:20}} to='/home'>首页</Link>{" "}     
            <Link className={`${fontColor}`} style ={{fontSize:16,padding:20}} to='/aboutus'>关于我们</Link>{" "}
            <Link className={`${fontColor}`} style ={{fontSize:16,padding:20}} to="/team">团队介绍</Link>  {' '}
            <Link className={`${fontColor}`} style ={{fontSize:16,padding:20}} to="/previous">往届回顾</Link>{' '}  
            <Link className={`${fontColor}`} style ={{fontSize:16,padding:20}} to="/competition">赛事介绍</Link>{' '}    
            <Link className={`${fontColor}`} style ={{fontSize:16,padding:20}} to="/eplatform/:admin">交易平台</Link>{' '}
            <Link className={`${fontColor}`} style ={{fontSize:16,padding:20}} to="/contactus">联系我们</Link>{' '}
        </Nav.Item>
        
        </Nav>
        </Container>

        <Container className='nav-bar-login'>
        <Nav className="justify-content-end" fill variant="pills">
        <Nav.Item>
            <Link className={`${fontColor}`} style ={{fontSize:16}} to="/login">登录</Link>{' '}
        </Nav.Item> 
        </Nav>

        </Container>
    </Navbar>
  );
}
