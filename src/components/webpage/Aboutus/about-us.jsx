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
import { minWidth } from "@material-ui/system";

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
      // className="section"
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

        <div
          className="content-center"
          style={{
            padding: "44px 0px 0px",
            margin: "0px 18.75%",
            width: "62.533%",
          }}
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
              letterSpacing: "1.5px",
              marginBottom: "0px",
            }}
          >
            UFA全球青年汇，是由世界名校密歇根大学，南加州大学，香港大学等学生联合创办创立的学生组织。目前，UFA全球青年汇已经与包括耶鲁大学，麻省理工大学，牛津大学，清华大学等校在内的80余所顶尖名校学联达成合作协议。{" "}
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
              letterSpacing: "1.4px",
            }}
          >
            UFA金融大赛是由UFA全球青年汇，实力携手中信证券发起的首个全球华人大学生模拟投资大赛。大赛为非盈利赛事，旨在为全球华人大学生提供金融实践与知识交流平台。大赛鼓励大学生以知践行，以行促知，助推金融行业复合型人才培养。
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
        </div>

        <div
          className="video"
          style={{ paddingBottom: width > 650 ? "120px" : "0px" }}
        >
          <div className="text-center">
            <Image
              src="/homeCutout/Group 175@2x.png"
              style={{ width: width * 0.222395 + "px", height: width * 0.0411458 + "px",minWidth:"320px",minHeight:"60px" }}
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
                  url="https://test1-1311825037.cos.ap-nanjing.myqcloud.com/public/summary_video_v1.mp4"
                  width="100%"
                  height= {width > 960 ? width *0.5/2.111 : width > 650? width * 0.85/2.111 : width * 0.9/2.111 }
                  controls={true}
                  light="https://test1-1311825037.cos.ap-nanjing.myqcloud.com/public/video_cover_1.png"
                  
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
            className="about-center difference-width"
            style={{
              width: width > 1385 ? "73.5%" : width < 1350 ? "96%" : "76%",
              marginTop: width < 700 ? "60%" : "",
            }}
          >
            {width < 680 ? (
              <>
                <Row
                  className="center-container"
                  style={{ flexDirection: width < 700 ? "column" : "row" }}
                >
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
                            “UFA金融大赛”
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
                            “UFA金融大赛”
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
                            “UFA金融大赛”
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
                <Row style={{ flexDirection: width < 700 ? "column" : "row" }}>
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
                            “UFA金融大赛”
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
                            “UFA金融大赛”
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
                            “UFA金融大赛”
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
            style={{
              marginTop: width > 650 ? "-80px" : "0px",
              position: "relative",
              bottom: width > 650 ? "0px" : "180px",
            }}
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
            style={{
              paddingTop: "120px",
              paddingBottom: width < 800 ? "30px" : "90px",
            }}
          >
            <div className="text-center">
              {width > 800 ? (
                <>
                  <Image
                    src="/homeCutout/Group 58@2x.png"
                    style={{ width: "685px", height: "79px" }}
                  />
                </>
              ) : (
                <>
                  <Image
                    src="/homeCutout/Group 1134-phone@2x.png"
                    style={{ width: "343px", height: "42px" }}
                  />
                </>
              )}
            </div>

            {width > 800 ? (
              <>
                <div className="message-box">
                  <div className="flex-between">
                    <div
                      className=" message-left"
                      style={{
                        paddingLeft:
                          width > 1196 ? width * 0.061458 : width * 0.05016722,
                        paddingRight: width * 0.08333,
                      }}
                    >
                      <div className="message-title">
                        <span>职业机遇</span>
                        <span
                          style={{
                            fontSize: "12px",
                            marginLeft: "12px",
                            fontWeight: "400",
                          }}
                        >
                          (部分支持远程)
                        </span>
                      </div>
                      <div className="message-content">
                        入围决赛的选手能获得：
                      </div>
                      <div className="message-Top">
                        <div> 中信证券实习机会</div>
                        <div> 中信证券飞鹰计划名额 (含结业证书)</div>
                        <div> 公募机构决赛现场面试录用机会</div>
                        <div> 埔思学院录取机会</div>
                        <div> 10万奖金瓜分等</div>
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21@2x.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content-bottom">
                        <div>
                          (赛事期间的优秀选手也将获得金融机构的引荐资格)
                        </div>
                        <div>
                          我们希望为优秀的大学生提供被伯乐发掘的窗口与机遇。
                        </div>
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
                          src="/homeCutout/occupation@2x.png"
                          style={{
                            width: width * 0.3125,
                            // height: width * 0.25,
                            minWidth: "330px",
                          }}
                        />
                      </div>
                      <div className="image-right-icon-bottom">
                        {width > 1196 ? (
                          <>
                            <Image
                              src="/homeCutout/Group 25@2x.png"
                              style={{ width: "108px", height: "108px" }}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src="/homeCutout/Group 25-pad@2x.png"
                              style={{ width: "72px", height: "72px" }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "200px", marginLeft: "71px" }}>
                  <div className="flex-between">
                    <div className="image-left">
                      <div className="image-left-icon-bottom">
                        {width > 1196 ? (
                          <>
                            <Image
                              src="/homeCutout/Group 61@2x.png"
                              style={{ width: "108px", height: "108px" }}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src="/homeCutout/Group 61-pad@2x.png"
                              style={{ width: "72px", height: "72px" }}
                            />
                          </>
                        )}
                      </div>

                      <div>
                        <Image
                          src="/homeCutout/promote@2x.png"
                          style={{
                            width: width * 0.3125,
                            // height: width * 0.25,
                            minWidth: "330px",
                          }}
                        />
                      </div>
                      <div className="image-left-icon-top">
                        <Image
                          src="/homeCutout/Rectangle 21@2x.png"
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                    </div>
                    <div
                      className=" message-right"
                      style={{
                        paddingLeft: width > 1196 ? "160px" : width * 0.1003344,
                      }}
                    >
                      <div className="message-title">提升机会</div>
                      <div className="message-content">
                        赛事期间,
                        UFA为参赛者们准备了一系列高含金量的免费学习机会:
                      </div>
                      <div className="message-Top">
                        包括百万知识博主、求职达人Lindsay为你带来的线上求职规划分析,
                        多场干货满满的大咖讲座,
                        以及中信高级分析师为参赛选手带来的在线指导交流等。
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
                    <div
                      className="message-left"
                      style={{
                        paddingLeft: width * 0.061458,
                        paddingRight: width * 0.08333,
                      }}
                    >
                      <div className="message-title">权威证书</div>
                      <div className="message-content">
                        指数排名前30%的参赛者均会获得由顶尖券商中信证券的官方权威证书。此外,排名不是唯一评判标准,大赛还将设立300余份其他丰厚奖项等你来拿。
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
                          src="/homeCutout/authority@2x.png"
                          style={{
                            width: width * 0.3125,
                            height: width * 0.25,
                            minWidth: "330px",
                          }}
                        />
                      </div>
                      <div className="image-right-icon-bottom">
                        {width > 1196 ? (
                          <>
                            <Image
                              src="/homeCutout/Group 25@2x.png"
                              style={{ width: "108px", height: "108px" }}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src="/homeCutout/Group 25-pad@2x.png"
                              style={{ width: "72px", height: "72px" }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <div style={{ marginTop: "60px" }}> */}
                <div className="content-wrapper">
                  <Image
                    src="/homeCutout/Mask group-phone@2x.png"
                    style={{ width: "343px", height: "270px" }}
                  />
                  <div className="message-phone-content">
                    <div className="message-phone-title">
                      <span className="title-bold">职业机遇</span>
                      <span className="title-normal">(部分支持远程)</span>
                    </div>

                    <div className="message-introduce">
                      <div>入围决赛的选手能获得：</div>
                      <div style={{ marginTop: "8px" }}>
                        中信证券实习机会、中信证券飞鹰计划名额(含结业证
                      </div>
                      <div>
                        书) 、公募机构决赛现场面试录用机会、埔思学院录取
                      </div>
                      <div>机会、10万奖金瓜分等</div>
                    </div>
                    <span className="message-icon">
                      <Image
                        src="/homeCutout/Group 21@2x.png"
                        style={{ width: "49px", height: "3px" }}
                      />
                    </span>

                    <div
                      className="message-introduce-gray"
                      style={{ marginTop: "12px" }}
                    >
                      (赛事期间的优秀选手也将获得金融机构的引荐资格)
                    </div>

                    <div
                      className="message-introduce-gray"
                      style={{ marginTop: "9px" }}
                    >
                      我们希望为优秀的大学生提供被伯乐发掘的窗口与机遇。
                    </div>
                  </div>
                </div>

                <div className="content-wrapper">
                  <Image
                    src="/homeCutout/Mask group-phone2@2x.png"
                    style={{ width: "343px", height: "270px" }}
                  />
                  <div className="message-phone-content">
                    <div className="message-phone-title">
                      <span className="title-bold">提升机会</span>
                    </div>

                    <div className="message-introduce">
                      <div>赛事期间, UFA为参赛者们准备了一系列高含金量的免</div>
                      <div>费学习机会:</div>
                      <div style={{ marginTop: "8px" }}>
                        包括百万知识博主、求职达人Lindsay为你带来的线上
                      </div>
                      <div>
                        求职规划分析, 多场干货满满的大咖讲座, 以及中信高级
                      </div>
                      <div>分析师为参赛选手带来的在线指导交流等。</div>
                    </div>
                    <span className="message-icon">
                      <Image
                        src="/homeCutout/Group 21@2x.png"
                        style={{ width: "49px", height: "3px" }}
                      />
                    </span>

                    <div
                      className="message-introduce-gray"
                      style={{ marginTop: "12px" }}
                    >
                      我们希望通过为大学生筛选并提供优质的学习资源, 帮助大学
                    </div>

                    <div
                      className="message-introduce-gray"
                      style={{ marginTop: "9px" }}
                    >
                      生完成提升和成长。
                    </div>
                  </div>
                </div>

                <div className="content-wrapper">
                  <Image
                    src="/homeCutout/Mask group-phone3@2x.png"
                    style={{ width: "343px", height: "270px" }}
                  />
                  <div className="message-phone-content">
                    <div className="message-phone-title">
                      <span className="title-bold">权威证书</span>
                    </div>

                    <div className="message-introduce">
                      <div>指数排名前30%的参赛者均会获得由顶尖券商中信证券</div>
                      <div>
                        的官方权威证书。此外,排名不是唯一评判标准,大赛还
                      </div>
                      <div>将设立300余份其他丰厚奖项等你来拿。</div>
                    </div>
                    <span className="message-icon">
                      <Image
                        src="/homeCutout/Group 21@2x.png"
                        style={{ width: "49px", height: "3px" }}
                      />
                    </span>

                    <div
                      className="message-introduce-gray"
                      style={{ marginTop: "12px" }}
                    >
                      我们希望你的实力被更多知名金融企业看见；重量级证书加持，
                    </div>

                    <div
                      className="message-introduce-gray"
                      style={{ marginTop: "9px" }}
                    >
                      丰富你的履历，助力职场之路畅通无忧。
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Aboutus;
