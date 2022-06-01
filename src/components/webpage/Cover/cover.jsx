import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./cover.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import useWindowDimensions from "../../../utils/sizewindow";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import HeaderCreate from "../../MainPage/header";
import AuthContext from "context/AuthContext";

export default function Cover() {
  const { width, height } = useWindowDimensions();
  let { user, logoutUser } = useContext(AuthContext);

  const history = useHistory();

  const sendUser = () => {
    if (user) {
      history.push("/team/register");
    } else {
      history.push("/tournament");
    }
  };
  return (
    <div
      id="home"
      className="cover animated"
      style={{
        background: "url('/Banner.png') center center no-repeat",
        width: width,
        height: "720px",
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
      <div className="bg-content-center">
        <div
          className="greetings"
          style={{
            fontSize: width * 0.01458,
            marginTop: width > 1300 ? "178px" : ""
          }}
        >
          <div className="wrapper">
            {width > 428 ? (
              <Image
                src="/homeCutout/Group 173.png"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <Image
                src="/homeCutout/Group 1110.png"
                style={{
                  width: "100%",
                  height: "29px",
                }}
              />
            )}
          </div>
        </div>

        {width > 426 ? (
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
                fontWeight:"bold"
              }}
            >
              金融协会
            </span>
          </div>
        ) : (
          <>
            <div
              className="name"
              style={{
                letterSpacing: width * 0.0083 + "px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "72px",
                  lineHeight: "96px",
                  letterSpacing: "8px",
                  marginTop: "10px",
                }}
              >
                UFA
              </div>
              <div
                style={{
                  fontSize: "60px",
                  lineHeight: "70px",
                  letterSpacing: "7px",
                  fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                  fontWeight: "bold",
                }}
              >
                金融协会
              </div>
            </div>
            <div
              style={{
                marginTop: "48px",
              }}
            >
              <Button
                style={{
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                  padding: "10px 24px",
                }}
                className="join-match-btn"
                variant="primary"
                size="sm"
                onClick={() => sendUser()}
              >
                报名参赛
              </Button>
            </div>
          </>
        )}
      </div>
      {width > 426 ? (
        <div
          className="arrow animated bounceInDown home-match-btn"
          style={{
            bottom: width * 0.0963,
            // left:width * 0.4854
          }}
        >
          <Button
            className="join-match-btn"
            variant="primary"
            size="sm"
            onClick={() => sendUser()}
          >
            报名参赛
          </Button>
        </div>
      ) : null}
    </div>
  );
}
