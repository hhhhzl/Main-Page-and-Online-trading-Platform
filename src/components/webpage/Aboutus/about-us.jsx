import React,{ useState } from "react";
import "./about-us.css";
import Image from 'react-bootstrap/Image';
import { Button, Row, Col, Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'
import { SettingsPhoneTwoTone } from "@material-ui/icons";
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import Bottompicture from "./bottom-picture";


const Aboutus = ({ profileImg, hobbyImgs }) => {
  const [show,setShow] = useState(false)
  return (
    <div className="section">
      <h3 className="text-center" style={{color:"gray"}}>INTRODUCTION ASSOCIATION</h3>
      <h4 className="text-center" style={{color:" #337ab7 "}}>协会介绍</h4>
      <br/>
      <Container className ="content-center">

            <p>
              <strong>华金协会</strong>
              Undergraduate Finance Association (简称"UFA") UFA针对<strong>美国排名前
              30的、中国内地前30、中国香港四大高校的大学本科</strong>学生，建立首个跨学校，跨地区，跨文化的
              非盈利性本科金融兴趣社团。我们的愿景是“助力祖国联合全球和华人金融精英，并共同建设祖国金融未来”。
            </p>
            <br/>
            <p>
              自成立以来，华金协会与清华大学金融协会、海外超过20所高校等建立起合作关系，并联合策划了名家分享会，金融系列公益讲座、全球大学生
              投资大赛等多个活动。“UFA杯:全球大学模拟投资大赛”是华金协会牵头发起的针对国内为顶尖高校大学生所举办的线上模拟投资比赛之一。
            </p>
            <br/>

            <h5 className ="text-center">
           <Button className="round-Button" variant="outline-primary">具体详情</Button>
           </h5>
           <br/>
        </Container>


        <div className="video">
        <h3 className="text-center" style={{color:"gray"}}>LISTEN TO THE SOUND</h3>
         <h4 className="text-center" style={{color:" #337ab7 "}}>快来听听他们都说了什么</h4>
         <br/>
         <Carousel>
           <Carousel.Item>
           <ReactPlayer
             className='react-player'
             controls ={true}
             style={{left:"center"}}
             url={[
                'https://www.youtube.com/watch?v=shDL1NNHCqw'
              ]} />
              </Carousel.Item>
              <Carousel.Item>
           <ReactPlayer
             className='react-player'
             controls ={true}
             style={{left:"center"}}
             url={[
                'https://www.youtube.com/watch?v=BcgyPJWclEw'
              ]} />
              </Carousel.Item>
              <Carousel.Item>
           <ReactPlayer
             className='react-player'
             controls ={true}
             style={{left:"center"}}
             url={[
                'https://www.youtube.com/watch?v=8cph2_Xvfbo'
              ]} />
              </Carousel.Item>
              </Carousel>  
        </div>



        <div className="about-intro">
        
          <div className ="section">
          <h3 className="text-center" style={{color:"gray"}}>ABOUT US</h3>
         <h4 className="text-center" style={{color:" #337ab7 "}}>UFA能为你提供哪些价值</h4>
         <br/>
        <br/>
         
      
            <div className="box">
              <h6 style={{color:" #337ab7 "}}>聆听与分享，找到属于你的知己与伯乐</h6>
              <p>
                “跨界UFA” （论坛小程序，这里人人都是自媒体）会为中美在校大学生提供和股市经验分享，交流、实时发布最近沪深港美市场行情以及相关
                分析，提供互助合作、拓展人脉的机会。    
              </p>
            </div>

            <div className="box">
              <h6 style={{color:" #337ab7 "}}>清晰职业规划，了解适合你的金融板块，明确未来自己的职业规划</h6>
              <p>
                UFA每周定期邀请美国藤校、中国C9硕士毕业大佬做线上直播，手把手为你讲透金融专业；从四年课程选择到实习规划，教你如何拿到梦校offer！   
              </p>
            </div>

            <div className="box">
              <h6 style={{color:" #337ab7 "}}>零距离对话行业大佬，获得实战提升与实习双丰收</h6>
              <p>
                UFA拥有强大的金融资源，每周定期邀请行业大佬（基金公司董事长、华尔街操盘手等）做线上直播分享会，零距离展示如何分享股票，传授经验。    
              </p>
              <p>
                获得求职咨询与实习内推。UFA聚焦中美金融精英并与各大金融机构合作。通过内推和金融比赛等形式帮助成员打开梦想企业的大门。    
              </p>
            </div>
        </div>
        </div>

        <div className="about-bottom-pictures">
          <Bottompicture/>
        </div>


    </div>
  );
};

export default Aboutus;
