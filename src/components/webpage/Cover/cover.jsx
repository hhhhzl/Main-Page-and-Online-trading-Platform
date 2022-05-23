import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./cover.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import useWindowDimensions from "../../../utils/sizewindow";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import HeaderCreate from "../../MainPage/header";
  

export default function Cover() {
  const { width, height } = useWindowDimensions();
  const history = useHistory();
  return (
    <div
      id="home"
      className="cover animated"
      style={{
        background:
          width > 1920
            ? "url('/Banner@2x.png') center center / 100% no-repeat"
            : "url('/Banner.png') center center / 100%  no-repeat",
        width: width,
        height: width / 2.67,
      }}
    >
      {/* <HeaderCreate /> */}

      {/* {width > 600 ? <Image
      src = "/background2.jpg"   
      style={{
        position: "relative",
        top: width > 1000 ? "9vh" : "9vh",
        width: width > 600 ? (width) : (width),
        height: width/2.72
      }}
    /> : 
    <Image
      src = "/background1.jpg"   
      style={{
        position: "relative",
        top: width > 1000 ? "9vh" : "9vh",
        width: width > 600 ? (width) : (width),
        height: width/2.18
      }}
    />
    } */}

      <div className="overlay" />

      {/* <div className="center">
        <div
          className="greetings"
          style={{
            fontSize: width * 0.01458,
          }}
        >
          <div className="left-angle"></div>
          <div className="wrapper">
            <span>
              <strong style={{ color: "#FFFFFF" }}>U</strong>NDERGRADUATE
            </span>
            <span>
              <strong style={{ color: "#FFFFFF", marginLeft: "10px" }}>
                F
              </strong>
              INANCE
            </span>
            <span>
              <strong style={{ color: "#FFFFFF", marginLeft: "10px" }}>
                A
              </strong>
              SSOCIATION
            </span>
          </div>
          <div className="right-angle"></div>
        </div>

        <div
          className="name"
          style={{
            letterSpacing: width * 0.0083 + "px",
          }}
        >
          <span
            style={{
              fontSize: width * 0.0869,
              lineHeight: width * 0.102 + "px",
            }}
          >
            UFA
          </span>
          <span
            style={{
              marginLeft: "30px",
              fontSize: width * 0.0729,
              lineHeight: width * 0.0854 + "px",
              fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
            }}
          >
            金融协会
          </span>
        </div>
      </div> */}

      <div
        className="arrow animated bounceInDown"
        style={{
          bottom: width * 0.0963,
          // left:width * 0.4854
        }}
      >
        <Button className="join-match-btn" variant="primary" size="sm"
        onClick ={() => history.push("/team/register")}
        >
          报名参赛
        </Button>
      </div>
    </div>
  );
}
