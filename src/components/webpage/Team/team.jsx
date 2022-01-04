import React from 'react';
import { Badge } from 'react-bootstrap';
import { Row,Col,Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './team.css'



export default function Team(){

    return (
        <div className="section">
            <h3 className="text-center" style={{color:"gray"}}>ABOUT US</h3>
             <h4 className="text-center" style={{color:" #337ab7 "}}>UFA创始团队</h4>
         <br/>
         <hr/>
         <div className='text-center'>
             <Badge bg="secondary">ADVISOR/顾问</Badge>
             </div>
             <br/>


        <div className='team-center-block'>

             <Row>
                 <Col xs ={4}>
        <div className="text-center">
        <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
          主席 | 陈柏霖 （Max）
          </div> 
          <br/>
          <div className="text-center">
          在观点碰撞中获得灵感
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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
    <br/>
    <br/>
    <br/>
    <br/>
             </div>

             <hr/>
         <div className='text-center'>
             <Badge bg="secondary">Team Introduction/团队介绍</Badge>
             </div>
             <br/>

              <div className='team-intro-block'>

             <Row>
                 <Col xs ={4}>
        <div className="text-center">
        <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
          主席 | 陈柏霖 （Max）
          </div> 
          <br/>
          <div className="text-center">
          在观点碰撞中获得灵感
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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

    <br/>
    <Row>
                 <Col xs ={4}>
        <div className="text-center">
        <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
          主席 | 陈柏霖 （Max）
          </div> 
          <br/>
          <div className="text-center">
          在观点碰撞中获得灵感
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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
    <br/>
    <br/>
    <br/>
    <br/>
             </div>
              
    

             

         
            
        </div>
    )
}