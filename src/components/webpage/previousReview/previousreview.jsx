import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import classNames from "classnames";
import "./previousreview.css";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";
import Carousel from "react-bootstrap/Carousel";

const Review = ({ projectImgs }) => {
  const { width, height } = useWindowDimensions();
  const React = require("react");
  const { BilibiliVideo } = require("react-bilibili-video");
  const [type, setType] = useState("front-end");
  const [image, setimage] = useState(false);
  const [video, setvideo] = useState(true);

  const Openvideo = () => {
    setvideo(true);
    setimage(false);
  };

  const Openimage = () => {
    setimage(true);
    setvideo(false);
  };

  useEffect(() => {
    setimage(image);
    setvideo(video);
  }, [image, video]);

  return (
    <>
      <div className="text-center" style={{ paddingTop: "120px" }}>
        <Image
          src="/homeCutout/Group 77.png"
          style={{ width: "248px", height: "79px" }}
        />
      </div>
      <div className="flex-center " style={{ marginTop: "80px" }}>
        <div className="btn-groups">
          <Button
            style={{
              // borderBlockEndWidth: "5px",
              // borderBlockEndColor: video ? "#26409A" : "white",
              padding: "8px 32px",
              borderRadius: " 24px",
              background: video
                ? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                : "#FFFFFF",
              border: "none",
              fontFamily: "MicrosoftYaHei",
            }}
            onClick={Openvideo}
          >
            <span
              style={{
                margin: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: 'Microsoft YaHei UI-Regular, Microsoft YaHei UI',
                lineHeight: "24px",
                color: video ? "#FFFFFF" : "#9C9EAC",
                fontWeight: video ? "bold" : "400",
              }}
            >
              活动视频
            </span>
          </Button>
          <Button
            style={{
              padding: "8px 32px",
              borderRadius: " 24px",
              background: image
                ? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                : "#FFFFFF",
              border: "none",
              fontFamily: "MicrosoftYaHei",
              // borderBlockEndWidth: "5px",
              // borderBlockEndColor: image ? "#26409A" : "white",
            }}
            onClick={Openimage}
          >
            <span
              style={{
                margin: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: 'Microsoft YaHei UI-Regular, Microsoft YaHei UI',
                lineHeight: "24px",
                color: image ? "#FFFFFF" : "#9C9EAC",
                fontWeight: image ? "bold" : "400",
              }}
            >
              赛事图集
            </span>
          </Button>
        </div>
      </div>

      <div className="video-container" style={{position: "relative"}}>
        <div className="review-icon-wrapper">
          <div className="review-icon">
            {width > 700 ? <Image
              src="/homeCutout/Group 143.png"
              style={{ width: "108px", height: "108px" }}
            /> : <><br/><br/></> }

          </div>
        </div>
        <div style={{ minHeight: "150px" }} >
          <Collapse in={video} dimension="width" >
            <div id="example-collapse-text"  >
              <BilibiliVideo
                cid="548193318"
                aid="382170523"
                asWide
                highQuality
                danmaku={0}
              />
            </div>
          </Collapse>
          <Collapse in={image} dimension="width">
            <div id="example-collapse-text" className="image-banner">
                <Carousel fade >
                    <Carousel.Item>
                        <img
                            style={{objectFit: 'cover'}}
                            className="image-banner"
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F113020142315%2F201130142315-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656213996&t=acdd17c2d37e0529c42e5552e73fa36b"
                            alt="First slide"
                        />
                        {/*<Carousel.Caption>*/}
                        {/*    <h3>First slide label</h3>*/}
                        {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                        {/*</Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{objectFit: 'cover'}}
                            className="image-banner"
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242306111155-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656213996&t=1902d4a73339dc2ea9971999571338c7"
                            alt="Second slide"
                        />

                        {/*<Carousel.Caption>*/}
                        {/*    <h3>Second slide label</h3>*/}
                        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                        {/*</Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{objectFit: 'cover'}}
                            className="image-banner"
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F063021120F9%2F210630120F9-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656213996&t=3f64664062d613b473c5727310605d13"
                            alt="Third slide"
                        />

                        {/*<Carousel.Caption>*/}
                        {/*    <h3>Third slide label</h3>*/}
                        {/*    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                        {/*</Carousel.Caption>*/}
                    </Carousel.Item>
                </Carousel>
            </div>
          </Collapse>
        </div>
        <div className="review-icon-wrapper-bottom">
          <div className="review-icon-bottom">
            {width>700? <Image
              src="/homeCutout/Group 27.png"
              style={{ width: "108px", height: "108px" }}
            /> :null}

          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Review;
