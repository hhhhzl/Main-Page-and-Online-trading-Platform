import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, Col, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import classNames from "classnames";
import "./previousreview.css";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";

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

      <div className="review-picture">
        <div className="review-icon-wrapper">
          <div className="review-icon">
            {width > 700 ? <Image
              src="/homeCutout/Group 143.png"
              style={{ width: "108px", height: "108px" }}
            /> : <><br/><br/></> }
            
          </div>
        </div>
        <div style={{ minHeight: "150px" }}>
          <Collapse in={video} dimension="width">
            <div id="example-collapse-text">
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
            <div id="example-collapse-text" className="image-banner"></div>
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
