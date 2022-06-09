import React, { useState, useEffect } from "react";
import "./about-us.css";
import Image from "react-bootstrap/Image";
import { Button, Row, Col, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ReactPlayer from "react-player";
import Carousel from "react-bootstrap/Carousel";
import Bottompicture from "./bottom-picture";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";

const Aboutus = ({ profileImg, hobbyImgs }) => {
  const { width, height } = useWindowDimensions();
  const React = require("react");
  const [show, setShow] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const { BilibiliVideo } = require("react-bilibili-video");
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = 85 < bodyScrollTop ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  return (
    <div
      className="section"
      style={{ paddingTop: "20px", paddingBottom: "90px" }}
    >
      <Fade bottom duration={150} delay={150} fraction={0.1}>
        <div className="text-center">
          <Image
            src="/homeCutout/Group174@2x.png"
            style={{ width: "248px", height: "79px" }}
          />
        </div>

        {/* <br />
        <br />
        <br /> */}

        <Container
          className="content-center"
          style={{ padding: "44px 20px 0px" }}
        >
          <div className="left-icon">
            <Image
              src="/homeCutout/Group 110@2x.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <p
            style={{
              color: "#3D3F4E",
              textIndent: "0",
              fontSize: width > 1300 ? "24px" : width > 960 ? "20px" : "16px",
              fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
              lineHeight: "48px",
              letterSpacing: "0.2px",
            }}
          >
            UFA全球青年汇 (英文缩写"UFA")
            是面向全球顶级高校（包括不限于美国排名TOP30、中国内地TOP10、中国香港四大高校等）建立的首个跨学校，跨地区，跨文化的大学生财经社团。我们的愿景是“助力祖国联结未来华人精英，共同建设祖国金融未来”。
          </p>
          <br />
          <p
            className="bottom-angle"
            style={{
              color: "#3D3F4E",
              fontSize: width > 1300 ? "24px" : width > 960 ? "20px" : "16px",
              textIndent: "0",
              fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
              lineHeight: "48px",
              letterSpacing: "1px",
            }}
          >
            自成立以来，UFA全球青年汇会与中信证券、海外超过100所高校等建立起合作关系，并联合策划了名家分享会，财经系列公益讲座、全球大学生投资大赛等多个活动。“UFA金融大赛”是由 UFA
            全球青年汇牵头发起的首个汇聚全球顶尖高校大学生的大型线上模拟投资比赛。
          </p>
          <div className="right-icon">
            <Image
              src="/homeCutout/Group 172@2x.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <br />
          <br />
          <br />

          <h5 className="text-center"></h5>
          <br />
        </Container>

        <div className="video" style={{paddingBottom:width>650 ?"120px":"0px"}}>
          <div className="text-center">
            <Image
              src="/homeCutout/Group 175@2x.png"
              style={{ width: "427px", height: "79px" }}
            />
          </div>

          <div className="video-icon-wrapper">
            <div className="video-icon">
              <Image
                src="/homeCutout/Group 143@2x.png"
                style={{ width: "108px", height: "108px" }}
              />
            </div>
          </div>
          <div className="video-wrapper">
            <div className="video-container">
              <div className="player-wrapper">
                <ReactPlayer
                  className="player-wrapper"
                  url="https://test1-1311825037.cos.ap-nanjing.myqcloud.com/public/competition_intro_video.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  // light="/background1.jpg"
                />
              </div>
            </div>
            <div className="video-icon-wrapper-bottom">
              <div className="video-icon-bottom">
                <Image
                  src="/homeCutout/Group 27@2x.png"
                  style={{ width: "108px", height: "108px" }}
                />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div
            className="about-center"
            style={{
              width: width > 1385 ? "68.5%" : width < 1350 ? "93%" : "71%",
            }}
          >
            {width < 680 ? (
              <>
                <Row className="center-container">
                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/Group 101@2x.png"
                            style={{
                              width:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                              height:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                            }}
                          />
                        </div>
                        <div className="title">
                          <h4
                            style={{
                              fontFamily: "MicrosoftYaHeiUI",
                              fontSize: width > 960 ? "24px" : "18px",
                              textIndent: "0",
                              fontWeight: "bold",
                              margin: "0px",
                            }}
                          >
                            权威性
                          </h4>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#6E7184",
                              fontWeight: "400",
                              fontFamily:
                                "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                              fontSize: width > 960 ? "16px" : "14px",
                              paddingTop: width > 1000 ? "20px" : "10px",
                              lineHeight: "28px",
                            }}
                          >
                            “UFA杯”
                            由UFA与中信证券联合举办，旨在打造最具权威的大学生金融赛事
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Col>

                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/Group 102@2x.png"
                            style={{
                              width:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                              height:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                            }}
                          />
                        </div>
                        <div className="title">
                          <h4
                            style={{
                              fontFamily: "MicrosoftYaHeiUI",
                              fontSize: width > 960 ? "24px" : "18px",
                              textIndent: "0",
                              fontWeight: "bold",
                              margin: "0px",
                            }}
                          >
                            影响力
                          </h4>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#6E7184",
                              fontWeight: "400",
                              fontFamily:
                                "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                              fontSize: width > 960 ? "16px" : "14px",
                              paddingTop: width > 1000 ? "20px" : "10px",
                              lineHeight: "28px",
                            }}
                          >
                            “UFA杯”
                            荣幸邀请各界金融大咖全程参与并与参赛选手进行高效、深度沟通互动，将在线上线下同步举办大型交流、展示活动
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Col>

                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/Group 103@2x.png"
                            style={{
                              width:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                              height:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                            }}
                          />
                        </div>
                        <div className="title">
                          <h4
                            style={{
                              fontFamily: "MicrosoftYaHeiUI",
                              fontSize: width > 960 ? "24px" : "18px",
                              textIndent: "0",
                              fontWeight: "bold",
                              margin: "0px",
                            }}
                          >
                            规模力
                          </h4>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#6E7184",
                              fontWeight: "400",
                              fontFamily:
                                "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                              fontSize: width > 960 ? "16px" : "14px",
                              paddingTop: width > 1000 ? "20px" : "10px",
                              lineHeight: "28px",
                            }}
                          >
                            “UFA杯”
                            将面向海内外100+所大学开放赛事，旨在打造万人规模金融赛事，成为海内外金融大学生的首要聚集地
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/quanwei@2x.png"
                            style={{
                              width:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                              height:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                            }}
                          />
                        </div>
                        <div className="title">
                          <h4
                            style={{
                              fontFamily: "MicrosoftYaHeiUI",
                              fontSize: width > 960 ? "24px" : "18px",
                              textIndent: "0",
                              fontWeight: "bold",
                              margin: "0px",
                            }}
                          >
                            权威性
                          </h4>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#6E7184",
                              fontWeight: "400",
                              fontFamily:
                                "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                              fontSize: width > 960 ? "16px" : "14px",
                              paddingTop: width > 1000 ? "20px" : "10px",
                              lineHeight: "28px",
                            }}
                          >
                            “UFA杯”
                            由UFA与中信证券联合举办，旨在打造最具权威的大学生金融赛事
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Col>
                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/Group 102@2x.png"
                            style={{
                              width:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                              height:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                            }}
                          />
                        </div>
                        <div className="title">
                          <h4
                            style={{
                              fontFamily: "MicrosoftYaHeiUI",
                              fontSize: width > 960 ? "24px" : "18px",
                              textIndent: "0",
                              fontWeight: "bold",
                              margin: "0px",
                            }}
                          >
                            影响力
                          </h4>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#6E7184",
                              fontWeight: "400",
                              fontFamily:
                                "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                              fontSize: width > 960 ? "16px" : "14px",
                              paddingTop: width > 1000 ? "20px" : "10px",
                              lineHeight: "28px",
                            }}
                          >
                            “UFA杯”
                            荣幸邀请各界金融大咖全程参与并与参赛选手进行高效、深度沟通互动，将在线上线下同步举办大型交流、展示活动
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Col>
                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/Group 103@2x.png"
                            style={{
                              width:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                              height:
                                width > 1350
                                  ? "160px"
                                  : width > 960
                                  ? "130px"
                                  : "100px",
                            }}
                          />
                        </div>
                        <div className="title">
                          <h4
                            style={{
                              fontFamily: "MicrosoftYaHeiUI",
                              fontSize: width > 960 ? "24px" : "18px",
                              textIndent: "0",
                              fontWeight: "bold",
                              margin: "0px",
                            }}
                          >
                            规模力
                          </h4>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#6E7184",
                              fontWeight: "400",
                              fontFamily:
                                "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                              fontSize: width > 960 ? "16px" : "14px",
                              paddingTop: width > 1000 ? "20px" : "10px",
                              lineHeight: "28px",
                            }}
                          >
                            “UFA杯”
                            将面向海内外100+所大学开放赛事，旨在打造万人规模金融赛事，成为海内外金融大学生的首要聚集地
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </div>
          <h5
            className="text-center"
            style={{ marginTop: width > 650 ?"-80px" :"0px",position:"relative",bottom:width>650 ?"0px":"180px"}}
          >
            <Button
              className="video-btn"
              style={{
                color: "#FFFFF",
                padding: "12px 32px",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "16px",
                fontFamily: "Microsoft YaHei UI-Bold",
              }}
              variant="outline-primary"
              size="lg"
              onClick={() => history.push("/tournament")}
            >
              了解赛事
            </Button>
          </h5>
        </div>

        <div className="about-intro">
          <div
            className="section"
            style={{ paddingTop: "120px", paddingBottom: "90px" }}
          >
            <div className="text-center">
              {width > 700 ? (
                <>
                  <Image
                    src="/homeCutout/Group 58@2x.png"
                    style={{ width: "685px", height: "79px" }}
                  />
                </>
              ) : (
                <>
                  <Image
                    src="/homeCutout/Group 58@2x.png"
                    style={{ width: width - 10, height: "79px" }}
                  />
                </>
              )}
            </div>

            {width > 1100 ? (
              <>
                <div className="message-box">
                  <div className="flex-between">
                    <div className=" message-left">
                      <div className="message-title">权威证书</div>
                      <div className="message-content">
                        证书由顶尖券商中信证券官方认证，排名前30％的参赛者均会授予颁发。同时，排名不是唯一评判标准，赛事期间设立300余份相关奖项等你来拿。
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21@2x.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content-bottom">
                        我们希望你的实力被更多知名金融企业看见；重量级证书加持，丰富你的履历，助力职场之路畅通无忧。
                      </div>
                    </div>
                    <div className="flex-center image-right">
                      <div className="image-right-icon-top">
                        <Image
                          src="/homeCutout/Rectangle 21@2x.png"
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                      <div>
                        <Image
                          src="/组 50(3)@2x.png"
                          style={{
                            width: "600px",
                            height: "480px",
                            border: "1px solid #3C5E78",
                          }}
                        />
                      </div>
                      <div className="image-right-icon-bottom">
                        <Image
                          src="/homeCutout/Group 25@2x.png"
                          style={{ width: "108px", height: "108px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "200px", marginLeft: "71px" }}>
                  <div className="flex-between">
                    <div className="image-left">
                      <div className="image-left-icon-bottom">
                        <Image
                          src="/homeCutout/Group 61@2x.png"
                          style={{ width: "108px", height: "108px" }}
                        />
                      </div>

                      <div
                        style={{
                          width: "600px",
                          height: "480px",
                          border: "1px solid #3C5E78",
                        }}
                      ></div>
                      <div className="image-left-icon-top">
                        <Image
                          src="/homeCutout/Rectangle 21@2x.png"
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                    </div>
                    <div className=" message-right">
                      <div className="message-title">学习机会</div>
                      <div className="message-content">
                        赛事期间，UFA为参赛者们准备了一系列高含金量的免费服务：包括百万知识博主、求职达人Lindsay的金融行业求职分析，多场干货满满的大咖讲座，以及中信高级分析师在线专题指导交流等。
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21@2x.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content-bottom">
                        我们希望通过为大学生筛选并提供优质的学习资源，帮助大学生完成提升和成长。
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "200px" }}>
                  <div className="flex-between">
                    <div className=" message-left">
                      <div className="message-title">丰厚奖励</div>
                      <div className="message-content">
                        针对所有入围决赛的量化选手与主观多头选手，UFA将赠予决赛奖杯，数十万奖金，中信证券实习机会，以及UFA终身会员。
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21@2x.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content-bottom">
                        我们希望为优秀的大学生提供被伯乐发掘的窗口与机遇。
                      </div>
                    </div>
                    <div className="flex-center image-right">
                      <div className="image-right-icon-top">
                        <Image
                          src="/homeCutout/Rectangle 21@2x.png"
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                      <div
                        style={{
                          width: "600px",
                          height: "480px",
                          border: "1px solid #3C5E78",
                        }}
                      ></div>
                      <div className="image-right-icon-bottom">
                        <Image
                          src="/homeCutout/Group 25@2x.png"
                          style={{ width: "108px", height: "108px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="box2">
                  <Row>
                    <Col xs={6}>
                      <Image
                        src="/1.@2x.png"
                        id="img-txz"
                        alt="header"
                        style={{
                          position: "relative",
                          left: "70%",
                          top: "25%",
                          width: "30%",
                          height: "40%",
                        }}
                      />
                    </Col>

                    <Col xs={6}>
                      <Image
                        src="组 50@2x(1).png"
                        id="img-txz"
                        alt="header"
                        style={{
                          position: "relative",
                          width: "50%",
                          height: "85%",
                        }}
                      />
                    </Col>
                  </Row>
                  <div className="text">
                    <h6
                      style={{
                        color: " #26409A ",
                        fontSize: "22px",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      “权威金融竞赛证书”为你加强背景与竞争力
                    </h6>
                    <p
                      style={{
                        color: "black",
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize: "20px",
                        letterSpacing: "0.3px",
                        textIndent: "0",
                        paddingTop: width > 1000 ? "30px" : "20px",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                      }}
                    >
                      赛事证书由 UFA，中信证券联合签署。表现优异的前
                      30%参赛选手将收获主办方颁发的官方证书，为你的简历增添亮点，丰富金融专业背景，帮助你从同龄人中迅速脱颖而出！
                    </p>
                  </div>
                </div>
                <hr />

                <div className="box2">
                  <Row>
                    <Col xs={6}>
                      <Image
                        src="/2.@2x.png"
                        id="img-txz"
                        alt="header"
                        style={{
                          position: "relative",
                          left: "70%",
                          top: "25%",
                          width: "30%",
                          height: "70%",
                        }}
                      />
                    </Col>

                    <Col xs={6}>
                      <Image
                        src="组 50(3).png"
                        id="img-txz"
                        alt="header"
                        style={{
                          position: "relative",
                          width: "70%",
                          height: "100%",
                        }}
                      />
                    </Col>
                  </Row>
                  <br />
                  <div className="text">
                    <h6
                      style={{
                        color: " #26409A ",
                        fontSize: "22px",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      “0门槛”参与要求，帮助小白完成自我提升
                    </h6>
                    <p
                      style={{
                        color: "black",
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize: "20px",
                        letterSpacing: "0.3px",
                        textIndent: "0",
                        paddingTop: width > 1000 ? "30px" : "20px",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                      }}
                    >
                      就算是没有经验的投资小白也不用担心，UFA
                      将在比赛全程陪伴你，无论是指导撰写投资笔记并生成属于自己的投资报告，还是定期邀请金融专家深度解析市场走向，我们将会全力为你的成长助力，帮你实现人生新高度！
                    </p>
                  </div>
                </div>
                <hr />

                <div className="box2">
                  <Row>
                    <Col xs={6}>
                      <Image
                        src="/3.@2x.png"
                        id="img-txz"
                        alt="header"
                        style={{
                          position: "relative",
                          left: "70%",
                          top: "25%",
                          width: "30%",
                          height: "60%",
                        }}
                      />
                    </Col>

                    <Col xs={6}>
                      <Image
                        src="组 50(2).png"
                        id="img-txz"
                        alt="header"
                        style={{
                          position: "relative",
                          width: "80%",
                          height: "90%",
                        }}
                      />
                    </Col>
                  </Row>
                  <br />
                  <div className="text">
                    <h6
                      style={{
                        color: " #26409A ",
                        fontSize: "22px",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      免费求职指导，清晰金融职业目标与规划
                    </h6>
                    <p
                      style={{
                        color: "black",
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize: "20px",
                        letterSpacing: "0.3px",
                        textIndent: "0",
                        paddingTop: width > 1000 ? "30px" : "20px",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                      }}
                    >
                      相遇即机遇，我们联结了来自全球最顶尖大学的华人金融精英，他们可能是你未来并肩作战的同事，或是雇主，或是可靠的商业伙伴，亦或是投资人。我们丰富的线上/线下活动将为选手间进行深度交流提供绝佳机会，帮助你快速提升软技能！
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Aboutus;
