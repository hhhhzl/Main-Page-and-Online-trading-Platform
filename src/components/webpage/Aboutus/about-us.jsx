import React,{ useState } from "react";
import "./about-us.css";
import Image from 'react-bootstrap/Image';
import { Button, Row, Col, Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import Bottompicture from "./bottom-picture";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";


const Aboutus = ({ profileImg, hobbyImgs }) => {
  const {width,height} = useWindowDimensions();
  const React = require('react')
  const { BilibiliVideo } = require('react-bilibili-video')

  return (
    <div className="section">
      <br/>
      <h3 className="text-center" style={{color:"#AEAEAE"}}>INTRODUCTION OF UFA</h3>
      <h5 className="text-center" style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"30px",letterSpacing:"0.8px"}}><Bookmark/> 协{" "}会{" "}介{" "}绍</h5>
      <br/>
      <br/>
      <Container className ="content-center">
            {/* <p style={{color:"#4D4D4D", textIndent:"0",fontSize:"24px", fontFamily:"MicrosoftYaHei", lineHeight:"50px", letterSpacing:"0.2px"}}>
              <strong>UFA金融协会 </strong>
               (英文缩写<strong>"UFA"</strong>) 是面向<strong>全球顶级高校</strong>（包括美国排名TOP30、中国内地TOP10、中国香港四大高校等）建立的首个<strong>跨学校，跨地区，跨文化</strong>的大学生金融协会。我们的愿景是<strong>“助力祖国联合全球和华人金融精英，并共同建设祖国金融未来”</strong>。
            </p>
            <br/>
            <p style={{color:"#4D4D4D",fontSize:"24px",textIndent:"0", fontFamily:"MicrosoftYaHei",lineHeight:"50px", letterSpacing:"0.2px"}}>
              自成立以来，<strong>UFA金融协会</strong>与<strong>中信证券、清华大学金融协会、海外超过20所高校</strong>等建立起合作关系，并联合策划了名家分享会，金融系列公益讲座、全球大学生
              投资大赛等多个活动。<strong>“UFA杯: 全球大学模拟投资大赛”</strong>是UFA金融协会牵头发起的针对国内为顶尖高校大学生所举办的线上模拟投资比赛之一。
            </p> */}
            <p style={{color:"black", textIndent:"0",fontSize:"24px", fontFamily:"MicrosoftYaHei", lineHeight:"50px", letterSpacing:"0.2px"}}>
              UFA金融协会 
               (英文缩写"UFA") 是面向全球顶级高校（包括美国排名TOP30、中国内地TOP10、中国香港四大高校等）建立的首个跨学校，跨地区，跨文化的大学生金融协会。我们的愿景是“助力祖国联合全球和华人金融精英，并共同建设祖国金融未来”。
            </p>
            <br/>
            <p style={{color:"black",fontSize:"24px",textIndent:"0", fontFamily:"MicrosoftYaHei",lineHeight:"50px", letterSpacing:"0.2px"}}>
              自成立以来，UFA金融协会与中信证券、清华大学金融协会、海外超过100所高校等建立起合作关系，并联合策划了名家分享会，金融系列公益讲座、全球大学生投资大赛等多个活动。“UFA杯: 全球大学模拟投资大赛”是UFA金融协会牵头发起的针对国内为顶尖高校大学生所举办的线上模拟投资比赛之一。
            </p>
            <br/>
            <br/>
            <br/>

            <h5 className ="text-center">
           </h5>
           <br/>
        </Container>


        <div className="video">
          <br/>
        <h3 className="text-center" style={{color:"#AEAEAE"}}>INTRODUCTION OF THE COMPETITION</h3>
         <h5 className="text-center" style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"30px",letterSpacing:"4px"}}><Bookmark/>{' '}UFA杯赛事介绍</h5>
         <br/>
         <br/>
         <br/>
         <br/>
         
         <div className='text-center decorate-border'>
           <h4 style={{color:" #26409A ",padding:"10px 20px 0px 30px",letterSpacing:"4px"}}>
             快来听听他们都说了什么
           </h4>
           
         </div>
         <br/>
         <br/>
         
         <Carousel fade className="video-container">
         
           <Carousel.Item className="player-wrapper">
              <BilibiliVideo
              cid="548193318"
              aid="382170523"
              asWide
              highQuality
              danmaku = {0}
               />
          
              
              
              </Carousel.Item>
              
              <Carousel.Item className="player-wrapper">
              <BilibiliVideo
              cid="548193318"
              aid="382170523"
              asWide
              highQuality
              danmaku = {0}
               />
           {/* <ReactPlayer
             className='react-player'
             controls ={true}
             width='100%'
             height='100%'
             url={[
                'https://www.youtube.com/watch?v=BcgyPJWclEw'
              ]} /> */}
              </Carousel.Item>
              <Carousel.Item className="player-wrapper">
           {/* <ReactPlayer
             className='react-player'
             controls ={true}
             width='100%'
             height='100%'
             url={[
                'https://www.youtube.com/watch?v=8cph2_Xvfbo'
              ]} /> */}
              <BilibiliVideo
              cid="548193318"
              aid="382170523"
              asWide
              highQuality
              danmaku = {0}
               />
              </Carousel.Item>
              </Carousel> 

              <br/><br/><br/><br/><br/><br/><br/>

        <div className="about-center">
        {width < 600 ? 

        (<><Col>
          <div className ="introduction-box">
          <div className="title"><h4 style={{color:"white",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "15px",letterSpacing:"0.31px",textIndent:"0"}}>权威性</h4> </div>
            <div>
                <p style={{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize:"18px",letterSpacing:"0.3px",textIndent:"0",paddingTop:"16px",paddingLeft:"10px",paddingRight:"10px"}}>“UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办，旨在打造最具权威的大学生金融赛事 </p>
              </div>
    
        </div>
        </Col>
        <Col>
          <div className ="introduction-box">
          <div className="title"><h4 style={{color:"white",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "15px",letterSpacing:"0.1px",textIndent:"0"}}>影响力</h4></div>
          <div>
                    <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize:"18px",letterSpacing:"0.3px",textIndent:"0",paddingTop:"16px",paddingLeft:"10px",paddingRight:"10px"}}>“UFA杯” 荣幸邀请各界金融大咖全程参与并与参赛选手进行高效、深度沟通互动，将在线上线下同步举办大型交流、展示活动 </p>
                  </div>

    
        </div>
        </Col>
   
        <Col>
          <div className ="introduction-box">
          <div className="title"><h4 style={{color:"white",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "15px",letterSpacing:"0.1px",textIndent:"0"}}>规模力</h4></div>
          <div>
                    <h6 style={{color:" #337ab7 "}}></h6>
                    <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize:"18px",letterSpacing:"0.3px",textIndent:"0",paddingTop:"16px",paddingLeft:"10px",paddingRight:"10px"}}>“UFA杯” 将面向海内外100+所大学开放赛事，旨在打造万人规模金融赛事，成为海内外金融大学生的首要聚集地</p>
                  </div>
        </div>
        </Col>
        </>)
        :
        (<>
        <Row>
          <Col>
          <div className ="introduction-box">
            <Row>
                  <div className="title"><h4 style={{color:"white",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "15px",letterSpacing:"0.31px",textIndent:"0"}}>权威性</h4> </div>
                  <div>
                    <p style={{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "16px",letterSpacing:"0.3px",textIndent:"0",paddingTop: width > 1000? "30px" : "20px",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>“UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办，旨在打造最具权威的大学生金融赛事 </p>
                  </div>
          
            </Row>
          </div>
        </Col>
        <Col>
          <div className ="introduction-box">
            <Row> 
            <div className="title"><h4 style={{color:"white",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "15px",letterSpacing:"0.1px",textIndent:"0"}}>影响力</h4></div>
                  <div>
                    <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "16px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "30px" : "18px",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>“UFA杯” 荣幸邀请各界金融大咖全程参与并与参赛选手进行高效、深度沟通互动，将在线上线下同步举办大型交流、展示活动 </p>
                  </div>
          
            </Row>
          </div>
        </Col>
        <Col>
          <div className ="introduction-box">
            <Row>
            <div className="title"><h4 style={{color:"white",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "15px",letterSpacing:"0.1px",textIndent:"0"}}>规模力</h4></div>
                  <div>
                    <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "20px" : "16px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "30px" : "20px",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>“UFA杯” 将面向海内外100+所大学开放赛事，旨在打造万人规模金融赛事，成为海内外金融大学生的首要聚集地</p>
                  </div>
          
            </Row>
          </div>
        </Col>

</Row>
        </>)
        
      }

      
    </div>


    <h5 className ="text-center">
           <Button className="round-Button" style={{color:"#FFFFF",paddingLeft:"30px",paddingRight:"30px"}} variant="outline-primary" size="lg">了解赛事</Button>
           </h5>

    </div>



        <div className="about-intro">
        
          <div className ="section">
          <h3 className="text-center" style={{color:"#AEAEAE"}}>What You Can Achieve</h3>
         <h5 className="text-center" style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"25px",letterSpacing:"2px"}}><Bookmark/>{" "}“UFA杯”能为大学生提供哪些价值</h5>
         <br/>
        <br/>

        {width > 800? 
        (<>
        <div className="box">
              <div className = "number">
              <Image src = "/1.@2x.png" id="img-txz" alt="header"  style={{position: "relative",marginLeft:"5px", width: "50%",height: "50%",}}/>
              </div>
              <div className = "text">
              <h6 style={{color:" #26409A ",fontSize: width>960 ? "20px" : "18px"}}>“权威金融竞赛证书”为你加强背景与竞争力</h6>
              <p style = {{color:"black",lineHeight:"27px",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "16px" : "16px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "20px" : "15px",paddingLeft:width>750 ? "7px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>
              赛事证书由UFA，中信证券，以及清华大学联合签署。表现优异的前30%参赛选手将收获主办方颁发的官方证书，帮助你从同龄人中脱引而出。        
              </p>
                
              </div>
              <div>
              
              <Image src = "组 50@2x(1).png" id="img-txz" alt="header"  style={{position: "relative",marginLeft:"20%", width: "60%",height: "90%",}}/>
              </div>
              
            </div>

            <div className="box">
              <div className = "number">
              <Image src = "/2.@2x.png" id="img-txz" alt="header"  style={{position: "relative", width: "50%",height: "50%",}}/>
              </div>
              <div className = "text">
              <h6 style={{color:" #26409A ",fontSize: width>960 ? "20px" : "18px"}}>“0门槛”参与要求，帮助小白完成自我提升</h6>
              <p style = {{color:"black",lineHeight:"27px",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "16px" : "16px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "20px" : "15px",paddingLeft:width>750 ? "7px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>
              赛事进行过程中，UFA将帮助并指导参赛选手攥写投资笔记。比赛结束后，UFA将为你定制生成一份属于自己的投资报告。
              <br/>UFA研究小组将与金融专家将定期发布行业深度研究报告，帮你提升行业敏锐力与结构化思维能力。
              <br/>UFA微信社群将连接全球名校金融大学生，实现金融话题的跨国界交流，开拓金融思维的全球化视野。
              </p>
                
              </div>
              <div>
              <Image src = "组 50(3).png" id="img-txz" alt="header"  style={{position: "relative",marginLeft:"10px",marginTop:"20px", width: "115%",height: "70%",}}/>
              
              </div>
              
            </div>

            <div className="box">
              <div className = "number">
              <Image src = "/3.@2x.png" id="img-txz" alt="header"  style={{position: "relative", width: "60%",height: "50%",}}/>
              </div>
              <div className = "text">
              <h6 style={{color:" #26409A ",fontSize: width>960 ? "20px" : "18px"}}>免费求职指导，清晰金融职业目标与规划</h6>
              <p style = {{color:"black",lineHeight:"27px",fontFamily:"MicrosoftYaHeiUI",fontSize: width>960 ? "16px" : "16px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "20px" : "15px",paddingLeft:width>750 ? "7px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>
              UFA求职讲座力邀优秀金融前辈、名校校友定期为参赛选手开展非盈利性讲座，通过分享优质求学/求职经验，给予指导建议。
              <br/>UFA校友汇聚全球顶尖高校的金融精英，为投行，对冲基金，投资行业的各位候选人牵线搭桥。    
              </p>    
              </div>
              <div>
              <Image src = "组 50(2).png" id="img-txz" alt="header"  style={{position: "relative",marginLeft:"10px",marginTop:"10px", width: "100%",height: "65%",}}/>
              
              </div>
              
            </div>

            

        </>)
        :
        (<>
        <div className ="box2">
          <Row>
          <Col xs ={6}>
          <Image src = "/1.@2x.png" id="img-txz" alt="header"  style={{position: "relative", left:"70%", top:"25%",  width: "30%",height: "40%",}}/>
          </Col>
        
          <Col xs ={6}>
          <Image src = "组 50@2x(1).png" id="img-txz" alt="header"  style={{position: "relative", width: "50%",height: "85%",}}/>
          </Col>
          </Row>
          <div className = "text">
              <h6 style={{color:" #26409A ",fontSize:"22px",textAlign:"center",alignItems:"center"}}>“权威金融竞赛证书”为你加强背景与竞争力</h6>
              <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize: "20px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "30px" : "20px",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>
              赛事证书由UFA，中信证券，以及清华大学联合签署。表现优异的前30%参赛选手将收获主办方颁发的官方证书，帮助你从同龄人中脱引而出。     
              </p>
                
              </div>
        </div>
        <hr/>

        <div className ="box2">
          <Row>
          <Col xs ={6}>
          <Image src = "/2.@2x.png" id="img-txz" alt="header"  style={{position: "relative", left:"70%", top:"25%",  width: "30%",height: "70%",}}/>
          
          </Col>
        
          <Col xs ={6}>
          <Image src = "组 50(3).png" id="img-txz" alt="header"  style={{position: "relative", width: "70%",height: "100%",}}/>
          </Col>
          </Row>
          <br/>
          <div className = "text">
              <h6 style={{color:" #26409A ",fontSize:"22px",textAlign:"center",alignItems:"center"}}>“0门槛”参与要求，帮助小白完成自我提升</h6>
              <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize: "20px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "30px" : "20px",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>
              赛事进行过程中，UFA将帮助并指导参赛选手攥写投资笔记。比赛结束后，UFA将为你定制生成一份属于自己的投资报告。
              <br/>UFA研究小组将与金融专家将定期发布行业深度研究报告，帮你提升行业敏锐力与结构化思维能力。
              <br/>UFA微信社群将连接全球名校金融大学生，实现金融话题的跨国界交流，开拓金融思维的全球化视野。    
              </p>
                
              </div>
        </div>
        <hr/>


        <div className ="box2">
          <Row>
          <Col xs ={6}>
          <Image src = "/3.@2x.png" id="img-txz" alt="header"  style={{position: "relative", left:"70%", top:"25%",  width: "30%",height: "60%",}}/>
          </Col>
        
          <Col xs ={6}>
          <Image src = "组 50(2).png" id="img-txz" alt="header"  style={{position: "relative", width: "80%",height: "90%",}}/>
          
          </Col>
          </Row>
          <br/>
          <div className = "text">
              <h6 style={{color:" #26409A ",fontSize:"22px",textAlign:"center",alignItems:"center"}}>免费求职指导，清晰金融职业目标与规划</h6>
              <p style = {{color:"black",fontFamily:"MicrosoftYaHeiUI",fontSize: "20px",letterSpacing:"0.3px",textIndent:"0",paddingTop:width > 1000? "30px" : "20px",paddingLeft:width>750 ? "10px" : "5px",paddingRight:width>750 ? "10px" : "5px"}}>
              UFA求职讲座力邀优秀金融前辈、名校校友定期为参赛选手开展非盈利性讲座，通过分享优质求学/求职经验，给予指导建议。
              <br/>UFA校友汇聚全球顶尖高校的金融精英，为投行，对冲基金，投资行业的各位候选人牵线搭桥。
              </p>
                
              </div>
        </div>
        </>)
      }
        </div>
        </div>



    </div>
  );
};

export default Aboutus;
