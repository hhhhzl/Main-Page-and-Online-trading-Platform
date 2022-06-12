import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./cover.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import useWindowDimensions from "../../../utils/sizewindow";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import HeaderCreate from "../../MainPage/header";
import AuthContext from "context/AuthContext";
import {competitionID} from "../../../constants/maps"
import { setchoice, setPlatformType } from "utils";
import moment from "moment";
import { Modal } from "react-bootstrap";

export default function Cover() {
  const { width, height } = useWindowDimensions();
  let { user, logoutUser, apikey, competition } = useContext(AuthContext);
  const [competitiontime, setcompetitiontime] =  useState(null)
  const [buttonword, setbuttonword] = useState("报名赛事")
  const [load, setload] = useState(false)
  const [showwheretogo, setshowwheretogo] = useState(false)

  const history = useHistory();

  const sendUser = () => {
    // if (user) {
    //   history.push("/team/register");
    // } else {
    //   history.push("/tournament");
    // }
    if (buttonword == "进入赛事"){
      setPlatformType("competition")
      history.push("/team/register");
    }else if(buttonword == "报名赛事"){
      if (!user){
        setshowwheretogo(true)
      }else{
        history.push("/team/register");
      }   
    }else if (buttonword == "查看赛事"){
      history.push("/competitionReview")
    }
  };

  useEffect(()=>{
    if(user == null && competition){
      var now = moment();
      var timeInShanghai = now.tz('Asia/Shanghai').format()
      if (timeInShanghai < competition.register){
        setbuttonword("报名赛事")
      } else if (competition.register < timeInShanghai && timeInShanghai < competition.start){
        setbuttonword("报名赛事")
      } else if (competition.start < timeInShanghai){
        setbuttonword("查看赛事")
      }
    }
  },[user,competition])

  useEffect(()=>{
    if(user && competition){
      var now = moment();
      var timeInShanghai = now.tz('Asia/Shanghai').format()
      if (timeInShanghai < competition.register){
        setbuttonword("报名赛事")
      } else if (competition.register < timeInShanghai && timeInShanghai < competition.start){
        setbuttonword("报名赛事")
      } else if (competition.start < timeInShanghai){
        setbuttonword("查看赛事")
      }
    }
  },[user,competition])


  useEffect(()=>{
    if (apikey && competition) {
      var now = moment();
      var timeInShanghai = now.tz('Asia/Shanghai').format()
      if (timeInShanghai < competition.register){
        setbuttonword("报名赛事")
      } else if (competition.register < timeInShanghai && timeInShanghai < competition.end){
        setbuttonword("进入赛事")
      } else if (competition.end < timeInShanghai){
        setbuttonword("查看赛事")
      }
    }
  },[apikey, competition])

  // useEffect(() =>{
  //   if (getchoice)
  // })

  return (
    <>
    <Modal
        show={showwheretogo}
        onHide={() => setshowwheretogo(false)}
        centered
        // className="page-header-modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>你还没有登录哟，需要登录注册即可报名比赛！！</Modal.Body>
        <Modal.Footer style={{display:"flex", justifyContent:"center"}}>
          <Button
            className="modal-btn modal-btn-cancel"
            variant="secondary"
            onClick={() => {
              setchoice("/login")
              history.push("/team/register")
            }}
          >
            去登录
          </Button>
          <Button
            className="modal-btn modal-btn-submit"
            variant="primary"
            onClick={() => {
              setchoice("/register")
              history.push("/team/register")
            }
              
            }
          >
            去注册
          </Button>
        </Modal.Footer>
      </Modal>
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
      <div className="bg-content-center">
        <div
          className="greetings"
          style={{
            fontSize: width * 0.01458,
            marginTop:
              width > 1350
                ? "179px"
                : width > 1100
                ? "225px"
                : width < 800
                ? "179px"
                : "275px",
          }}
        >
          <div className="wrapper">
            {width > 800 ? (
              <Image
                src="/homeCutout/Group 173@2x.png"
                style={{
                  width: width * 0.3229,
                  height: width * 0.026,
                  minWidth: "350px",
                  minHeight: "26px",
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

        {width > 800 ? (
          <div>
            <div className="name">
              <Image
                src="/homeCutout/index@2x.png"
                style={{
                  width: "60.2083%",
                  height: "11.5625%",
                }}
              />

              {/* <span
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
                  fontWeight: "bold",
                }}
              >
                全球青年汇
              </span> */}
            </div>
            <div
              className="animated bounceInDown home-match-btn"
              style={{
                bottom: "185px",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              <Button
                className="join-match-btn"
                variant="primary"
                size="sm"
                onClick={() => sendUser()}
                style={{
                  fontWeight: "600",
                  fontFamily: "Microsoft YaHei UI-Bold",
                }}
              >
                {buttonword}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div
              className="image-sm"
              // style={{
              //   letterSpacing: width * 0.0083 + "px",
              //   flexDirection: "column",
              // }}
            >
              <Image
                src="/homeCutout/Group 1100@2x.png"
                style={{
                  width: "329px",
                  height: "172px",
                }}
              />
              {/* <div
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
                全球青年汇
              </div> */}
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
                {buttonword}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}
