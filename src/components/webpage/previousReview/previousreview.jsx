import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, Col, Row, Button } from "react-bootstrap";

import ReactPlayer from "react-player";
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
  const [type, setType] = useState("front-end");
  const [image, setimage] = useState(false);
  const [video, setvideo] = useState(true);
  const data = [
    {
      url: "/review/review_00.png",
      alt: "001",
    },
    {
      url: "/review/review_01.png",
      alt: "002",
    },
    {
      url: "/review/review_02.png",
      alt: "003",
    },
    {
      url: "/review/review_03.png",
      alt: "004",
    },
    {
      url: "/review/review_04.png",
      alt: "005",
    },
    {
      url: "/review/review_05.png",
      alt: "006",
    },
    {
      url: "/review/review_06.png",
      alt: "007",
    },
    {
      url: "/review/review_07.png",
      alt: "008",
    },
    {
      url: "/review/review_08.png",
      alt: "009",
    },
    {
      url: "/review/review_09.png",
      alt: "10",
    },
    {
      url: "/review/review_10.png",
      alt: "11",
    },
    {
      url: "/review/review_11.png",
      alt: "12",
    },
    {
      url: "/review/review_12.png",
      alt: "13",
    },
    {
      url: "/review/review_13.png",
      alt: "14",
    },
    {
      url: "/review/review_14.png",
      alt: "15",
    },
    {
      url: "/review/review_15.png",
      alt: "16",
    },
    {
      url: "/review/review_16.png",
      alt: "17",
    },
    {
      url: "/review/review_17.png",
      alt: "18",
    },
    {
      url: "/review/review_18.png",
      alt: "19",
    },
    {
      url: "/review/review_19.png",
      alt: "20",
    },
    {
      url: "/review/review_20.png",
      alt: "21",
    },
    {
      url: "/review/review_21.png",
      alt: "22",
    },
    {
      url: "/review/review_22.png",
      alt: "23",
    },
    {
      url: "/review/review_23.png",
      alt: "24",
    },
    {
      url: "/review/review_24.png",
      alt: "25",
    },
    {
      url: "/review/review_25.png",
      alt: "26",
    },
  ];

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
          src="/homeCutout/Group 77@2x.png"
          style={{ width: "248px", height: "79px" }}
        />
      </div>
      <div className="flex-center " style={{ marginTop: "80px" }}>
        <div className="btn-groups trade_tag">
          <Button
            className="view-btn"
            style={{
              padding: "8px 32px",
              borderRadius: " 24px",
              border: "none",
              fontFamily: "MicrosoftYaHei",
              boxShadow:
                "0px 1px 2px 1px rgb(35 97 255 / 8%), 0px 2px 4px 1px rgb(35 97 255 / 8%), 0px 4px 8px 1px rgb(35 97 255 / 8%), 0px 8px 16px 1px rgb(35 97 255 / 8%), 0px 16px 32px 1px rgb(35 97 255 / 8%)",
            }}
            onMouseEnter={Openvideo}
          >
            <span
              className={image ? "font-hover" : ""}
              style={{
                position: "relative",
                zIndex: "99",
                margin: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                lineHeight: "24px",
                color: video ? "#FFFFFF" : "#9C9EAC",
                fontWeight: video ? "bold" : "400",
                boxShadow:
                  "0px 1px 2px 1px rgb(35 97 255 / 8%), 0px 2px 4px 1px rgb(35 97 255 / 8%), 0px 4px 8px 1px rgb(35 97 255 / 8%), 0px 8px 16px 1px rgb(35 97 255 / 8%), 0px 16px 32px 1px rgb(35 97 255 / 8%)",
              }}
            >
              活动视频
            </span>
          </Button>
          <Button
            className="view-btn"
            style={{
              padding: "8px 32px",
              borderRadius: " 24px",
              border: "none",
              fontFamily: "MicrosoftYaHei",
              boxShadow:
                "0px 1px 2px 1px rgb(35 97 255 / 8%), 0px 2px 4px 1px rgb(35 97 255 / 8%), 0px 4px 8px 1px rgb(35 97 255 / 8%), 0px 8px 16px 1px rgb(35 97 255 / 8%), 0px 16px 32px 1px rgb(35 97 255 / 8%)",

              // borderBlockEndWidth: "5px",
              // borderBlockEndColor: image ? "#26409A" : "white",
            }}
            onMouseEnter={Openimage}
          >
            <span
              className={video ? "font-hover" : ""}
              style={{
                position: "relative",
                zIndex: "99",
                margin: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                lineHeight: "24px",
                color: image ? "#FFFFFF" : "#9C9EAC",
                fontWeight: image ? "bold" : "400",
                boxShadow:
                  "0px 1px 2px 1px rgb(35 97 255 / 8%), 0px 2px 4px 1px rgb(35 97 255 / 8%), 0px 4px 8px 1px rgb(35 97 255 / 8%), 0px 8px 16px 1px rgb(35 97 255 / 8%), 0px 16px 32px 1px rgb(35 97 255 / 8%)",
              }}
            >
              赛事图集
            </span>
          </Button>
          <div
            className="view-btn-bg1"
            style={{
              transform: video
                ? "translateX(60px) translateX(-50%)"
                : "translateX(180px) translateX(-50%)",
              transitionDuration: "0.3s",
            }}
          ></div>
        </div>
      </div>

      <div className="video-container" style={{ position: "relative" }}>
        <div className="review-icon-wrapper">
          <div className="review-icon">
            {width > 700 ? 
            (
              <Image
                src="/homeCutout/Group 143.png"
                style={{ width: "108px", height: "108px" }}
              />
            ) 
            : (
              <>
                {/* <br />
                <br /> */}
              </>
            )}
          </div>
        </div>
        <div style={{ 
          minHeight: "150px"
           }}>
          <Collapse in={video} dimension="width">
            <div id="example-collapse-text">
              <ReactPlayer
                className="player-wrapper"
                // playIcon={<></>}
                url="https://test1-1311825037.cos.ap-nanjing.myqcloud.com/public/competition_intro_video.mp4"
                width="100%"
                height= {width > 960 ? width *0.5/1.78 : width > 650? width * 0.85/1.78 : width * 0.9/1.78 }
                controls={true}
                light="https://test1-1311825037.cos.ap-nanjing.myqcloud.com/public/video_cover_2.png"
              />
            </div>
          </Collapse>
          <Collapse in={image} dimension="width">
            <div id="example-collapse-text" className="image-banner">
              <Carousel fade>
                {data.map((item, idx) => (
                  <Carousel.Item>
                    <img
                      style={{ objectFit: "cover" }}
                      className="image-banner"
                      src={item.url}
                      alt={item.alt}
                    />
                  </Carousel.Item>
                ))}
                {/* <Carousel.Item>
                  <img
                    style={{ objectFit: "cover" }}
                    className="image-banner"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F113020142315%2F201130142315-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656213996&t=acdd17c2d37e0529c42e5552e73fa36b"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ objectFit: "cover" }}
                    className="image-banner"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242306111155-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656213996&t=1902d4a73339dc2ea9971999571338c7"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ objectFit: "cover" }}
                    className="image-banner"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F063021120F9%2F210630120F9-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656213996&t=3f64664062d613b473c5727310605d13"
                    alt="Third slide"
                  />
                </Carousel.Item> */}
              </Carousel>
            </div>
          </Collapse>
        </div>
        <div className="review-icon-wrapper-bottom">
          <div className="review-icon-bottom">
            {width > 700 ? (
              <Image
                src="/homeCutout/Group 27.png"
                style={{ width: "108px", height: "108px" }}
              />
            ) : null}
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Review;
