import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, Col,Row, Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import classNames from "classnames";
import "./previousreview.css";
import projectList from "../../../static/projects.json";
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'


const Review = ({ projectImgs }) => {
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
      <h3 className="text-center" style={{color:"gray"}}>REVIEW</h3>
      <h4 className="text-center" style={{color:" #337ab7 "}}>往期回顾</h4>
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
          <Button variant="outline-light" style={{width:'105%'}} onClick={Openvideo}>
           <h5 style={{color:" #337ab7 "}}>活动视频</h5>
          </Button>

          </Col>
          <Col xs={6}>
          <Button variant="outline-light" style={{width:'100%'}} onClick={Openimage}>
            <h5 style={{color:" #337ab7 "}}>赛事图集</h5>      
            </Button>
          </Col>
          </Row>

          <br/>

          <div style={{minHeight: '150px'}}>
        <Collapse in={video} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{width: '100%'}}>
                参赛视频
            </Card>
            <Card body style={{width: '100%'}}>
                参赛视频
            </Card>
            <Card body style={{width: '100%'}}>
                参赛视频
            </Card>
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
