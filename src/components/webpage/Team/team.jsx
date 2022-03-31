import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { Row,Col,Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './team.css'
import { Bookmark } from '@material-ui/icons';
import useWindowDimensions from "../../../utils/sizewindow";



export default function Team(){
    const {width,height} = useWindowDimensions();

    return (
        <div className="section colored-team">
            <br/>
            <h3 className="text-center" style={{color:"#AEAEAE"}}>ABOUT THE TEAM</h3>
             <h5 className="text-center" style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"25px",letterSpacing:"3px"}}><Bookmark/>{" "}关于我们</h5>
         <br/>
         <br/>
         <hr/>
         <div className='text-center'>
             <Button className="round-Button"  
    style={{marginTop:"-60px",backgroundColor:"#26409A",color:"white",fontFamily:"MicrosoftYaHei",fontSize:"16px",letterSpacing:"3px",opacity:"100%",zIndex:999}} size='sm'>ADVISOR 导师团队</Button>
             </div>
             <br/>
             <br/>


        <div className='team-center-block'>
            {width > 800 ? 
            (<>
            <Row>
                 <Col xs ={4}>
        <div className="text-center">
        <Image src = "/head.jpeg" title="head image" id="img-txz" roundedCircle alt="header"  style={{position: "relative", width: "80%",height: "150%",}}/>
        <br/>
        <br/>
        <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5></h5>
          <br/>    
          <h6></h6>
          <h6></h6>
          <h6></h6>
          </div>
          </div>
      </Col>
      <Col xs ={4}>
      
      <div className="text-center">
      <Image src = "/Lindsay.jpg" title="lindsay image"  alt="Lindsay" roundedCircle  style={{position: "relative", width: "80%",height: "150%",}}/>
      <br/>
      <br/>
      <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5 style={{fontFamily:"Adobe Heiti Std R",letterSpacing:"1px"}}>邹鲁秦 （Lindsay）</h5>
          <p style={{fontFamily:"MicrosoftYaHeiUI",fontSize: "15px",letterSpacing:"0.4px",textIndent:"0",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px", lineHeight:"30px", paddingTop:'20px'}}>
          拥有抖音、知乎百万粉丝的求职界一姐
          <br/>JP Morgan纽约总部工作多年并担任校招官
          <br/>北大/哥大学霸 毕业后斩获十余份offer
          </p>
          </div>
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/不晓得啥子名字.jpg" title="head image"  alt="header" roundedCircle style={{position: "relative", width: "80%",height: "150%",}}/>
      <br/>
      <br/>
      
      <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5 style ={{fontFamily:"Adobe Heiti Std R",letterSpacing:"5px"}}>楚门</h5>
          <p style={{fontFamily:"MicrosoftYaHeiUI",fontSize: "15px",letterSpacing:"0.4px",textIndent:"0",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px", lineHeight:"30px",paddingTop:"-20px"}}>易思汇COO&合伙人 / 埔思学院联合创始人 
            <br/>前密大CSSA联合主席   
            <br/>密西根中国论坛创始人 
            <br/>现任密歇根大学北京校友会主席 </p>  
          </div>
          </div>
      </Col>
    </Row>
            </>)
            :
            (<>
            

          <Col>
          <div className ="ad-box">
          <Row>
            <Col xs={6}>
              <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
              </Col>
              <Col xs = {6}>
           
            <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px", height:"200px"}}>
          <h5>xxxx</h5>
          <br/>    
          <h6></h6>
          <h6></h6>
          <h6></h6>
          </div>
        </Col>
        </Row>
    
        </div>
        </Col>

        <Col>
          <div className ="ad-box">
          <Row>
            <Col xs={6}>
            <Image src = "/Lindsay.jpg" title="lindsay image"  alt="Lindsay" roundedCircle  style={{position: "relative", width: "98%",height: "93%",}}/>
              </Col>
              <Col xs = {6}>
           
            <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5>邹鲁秦 （Lindsay）</h5>
          <br/>    
          <h6>拥有抖音、知乎百万粉丝的求职界一姐</h6>
          <h6>JP Morgan纽约总部工作多年并担任校招官</h6>
          <h6>北大/哥大学霸 毕业后斩获十余份offer</h6>
          </div>
        </Col>
        </Row>
    
        </div>
        </Col>

        <Col>
          <div className ="ad-box">
          <Row>
            <Col xs={6}>
            <Image src = "/不晓得啥子名字.jpg" title="head image"  alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
              </Col>
              <Col xs = {6}>
           
              <div className="text-center advisor-box" style={{color:"white", padding:"18px 10px 10px 10px"}}>
          <h5>楚门</h5>
          <br/>    
          <h6>易思汇合伙人</h6>
          <h6>前密歇根大学Ross商学院学生会主席</h6>
          </div>
         
        </Col>
        </Row>
    
        </div>
        </Col>
            </>)
            }

             
    <br/>
    <br/>
    <br/>
    <br/>
             </div>

             <hr/>
         <div className='text-center'>
         <Button className="round-Button"  
    style={{marginTop:"-60px",backgroundColor:"#26409A",color:"white",fontFamily:"MicrosoftYaHei",fontSize:"16px",letterSpacing:"3px",opacity:"100%",zIndex:999}} size='sm'>Executive Board 执行委员会</Button>
             </div>
             <br/>

              <div className='team-intro-block'>

             <Row>
                 <Col xs ={4}>
        <div className="text-center">
        <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
        <br/>
        <br/>
         <h5><strong></strong></h5>
          </div>
          <br/>
          <div className="text-center">
          <h6></h6>
          </div>
      </Col>
      <Col xs ={4}>
      
      <div className="text-center">
      <Image src = "/bolinchen.png" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
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
      <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
          
          </div>
          <br/>
          <div className="text-center">
          <h6></h6>
          </div>
      </Col>
    </Row>

    <br/>
    <Row>
                 <Col xs ={4}>
        <div className="text-center">
        <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
        <br/>
        <br/>
        
          </div>
          <br/>
          <div className="text-center">
          
          </div>
      </Col>
      <Col xs ={4}>
      
      <div className="text-center">
      <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
          
          </div> 
          <br/>
          <div className="text-center">
          <h6></h6>
          </div>
      </Col>
      <Col xs ={4}>
      <div className="text-center">
      <Image src = "/UFAlogo.jpg" title="head image" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "150%",}}/>
      <br/>
      <br/>
        
          </div>
          <br/>
          <div className="text-center">
        <h6></h6>
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