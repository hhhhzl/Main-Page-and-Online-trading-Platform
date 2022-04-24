import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, Col,Row, Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import classNames from "classnames";
import "./previousreview.css";
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import { Bookmark } from "@material-ui/icons";


const Review = ({ projectImgs }) => {
  const React = require('react')
  const { BilibiliVideo } = require('react-bilibili-video')
  const [type, setType] = useState("front-end");
  const [image, setimage] =useState(false)
  const [video, setvideo] =useState(true)

  const Openvideo = () =>{
    setvideo(true)
    setimage(false)
  }

  const Openimage = () =>{
    setimage(true)
    setvideo(false)
  }

  useEffect(() => {
    setimage(image)
    setvideo(video)

  }, [image,video])


  return (
    <>
    <div className='review-title'>
      <div className="section">
      <br/>
      <h3 className="text-center" style={{color:"#AEAEAE",fontSize:"30px"}}>REVIEW</h3>
      <h5 className="text-center" style={{color:" #26409A ",fontFamily:"MicrosoftYaHeiUI",fontSize:"30px",letterSpacing:"3px"}}><Bookmark/>{" "}<strong>往期回顾</strong></h5>
      </div>
    </div>
    <br/>
    <div className="review-picture">
      <Row>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>

      
        <Row>
          <Col xs={6}>
          <Button variant="outline-light" style={{width:'105%', borderBlockEndWidth:"5px",borderBlockEndColor: video ? "#26409A" : "white"}} onClick={Openvideo}>
           <h5 style={{color:" #26409A "}}>活动视频</h5>
          </Button>

          </Col>
          <Col xs={6}>
          <Button variant="outline-light" style={{width:'100%',borderBlockEndWidth:"5px",borderBlockEndColor: image ? "#26409A" : "white"}} onClick={Openimage}>
            <h5 style={{color:" #26409A "}}>赛事图集</h5>      
            </Button>
          </Col>
          </Row>

          <br/>

          <div style={{minHeight: '150px'}}>
        <Collapse in={video} dimension="width">
          <div id="example-collapse-text">
            <BilibiliVideo
              cid="548193318"
              aid="382170523"
              asWide
              highQuality
              danmaku = {0}
               />
          </div>
        </Collapse>
        <Collapse in={image} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{width: '100%'}}>
                赛事图片
            </Card>
            <Card body style={{width: '100%'}}>
                赛事图片
            </Card>
            <Card body style={{width: '100%'}}>
                赛事图片
            </Card>
          </div>
        </Collapse>
      </div>
      <br/>
      <br/>
        
        



    </div>
    </>
  )
}

export default Review;
