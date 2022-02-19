import React from 'react';
import { Badge } from 'react-bootstrap';
import { Row,Col,Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './team.css'
import { Bookmark } from '@material-ui/icons';



export default function Team(){

    return (
        <div className="section colored-team">
            <br/>
            <h3 className="text-center" style={{color:"gray"}}>ABOUT US</h3>
             <h5 className="text-center" style={{color:" #337ab7 "}}><Bookmark/>{" "}UFA创始团队</h5>
         <br/>
         <hr/>
         <div className='text-center'>
             <Badge size='lg' bg="secondary">ADVISOR/导师</Badge>
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
      <Image src = "/Lindsay.jpg" title="lindsay image"  alt="Lindsay" roundedCircle  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
      <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5>邹鲁秦 （Lindsay）</h5>
          <br/>    
          <h6>拥有抖音、知乎百万粉丝的求职界一姐</h6>
          <h6>JP Morgan纽约总部工作多年并担任校招官</h6>
          <h6>北大/哥大学霸 毕业后斩获十余份offer</h6>
          </div>
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/不晓得啥子名字.jpg" title="head image"  alt="header" roundedCircle style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
      
      <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5>楚门</h5>
          <br/>    
          <h6>易思汇合伙人</h6>
          <h6>前密歇根大学Ross商学院学生会主席</h6>
          </div>
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