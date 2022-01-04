import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Row,Container,Col } from "react-bootstrap";
import "./about-us.css";


export default function Bottompicture() {
  return (
  <div className="bottom-cover-picture animated">
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
    <div className="overlay" />

    <div className ="about-center">
       
    <Row>
      <Col xs ={4}>
        <div className="text-center">
        <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle  style={{position: "relative", width: "50%",height: "40",}}/>
        <br/>
        <br/>
          遇见
          </div>
          <br/>
          <div className="text-center">
          找到合适的位置，看到多元化的世界
          </div>
      </Col>
      <Col xs ={4}>
      
      <div className="text-center">
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle  style={{position: "relative", width: "50%",height: "40",}}/>
      <br/>
      <br/>
          跨越
          </div>
          <br/>
          <div className="text-center">
          在观点碰撞中获得灵感
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle  style={{position: "relative", width: "50%",height: "40",}}/>
      <br/>
      <br/>
          结识
          </div>
          <br/>
          <div className="text-center">
          精简操作，拓宽人脉，开阔视野
          </div>
      </Col>
    </Row>
    </div>
  </div>
  )
};