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
import Fade from "react-reveal/Fade";

const Aboutus = ({ profileImg, hobbyImgs }) => {
  const { width, height } = useWindowDimensions();
  const React = require("react");
  const [show, setShow] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const { BilibiliVideo } = require("react-bilibili-video");

  const delay = () => {
    setTimeout(() => {
      !show && setShow(!show);
    }, 500);
  };
  delay();
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
      <Fade bottom when={show}>
        <div className="text-center">
          <Image
            src="/homeCutout/Group174.png"
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
              src="/homeCutout/Group 110.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <p
            style={{
              color: "#3D3F4E",
              textIndent: "0",
              fontSize: width > 1300 ? "24px" : width > 960 ? "20px" : "16px",
              fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
              lineHeight: "50px",
              letterSpacing: "0.2px",
            }}
          >
          UFA金融协会是面向全球顶级高校（包括美国排名TOP30、中国内地TOP10、中国香港四大高校等）建立的首个跨学校，跨地区，跨文化的大学生金融协会。自成立以来，UFA金融协会与中信证券、海内外超过100所高校等建立起合作关系，并联合策划了名家分享会、金融系列公益讲座、全球华人大学生投资大赛等多个活动
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
            “UFA金融杯”是由
            UFA⾦融协会牵头发起的首个大型线上模拟投资比赛。“UFA金融杯”为非盈利性赛事，大赛旨在为全球华人大学生提供知识实践以及投资学习的平台支持，鼓励大学生以知促行，以行促知，培养创新精神与实践能力，推动金融创新人才培养机制的建立。大赛愿景希望联结全球未来华人精英，共同建设祖国金融未来
          </p>
          <div className="right-icon">
            <Image
              src="/homeCutout/Group 172.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <br />
          <br />
          <br />

          <h5 className="text-center"></h5>
          <br />
        </Container>
      </Fade>
      <Fade bottom when={show}>
        <div className="video">
          <div className="text-center">
            <Image
              src="/homeCutout/Group 175.png"
              style={{ width: "427px", height: "79px" }}
            />
          </div>

          <div className="video-icon-wrapper">
            <div className="video-icon">
              <Image
                src="/homeCutout/Group 143.png"
                style={{ width: "108px", height: "108px" }}
              />
            </div>
          </div>
          <div className="video-wrapper">
            <Carousel fade className="video-container">
              <Carousel.Item className="player-wrapper">
                <BilibiliVideo
                  cid="548193318"
                  aid="382170523"
                  asWide
                  highQuality
                  danmaku={0}
                />
              </Carousel.Item>

              <Carousel.Item className="player-wrapper">
                <BilibiliVideo
                  cid="548193318"
                  aid="382170523"
                  asWide
                  highQuality
                  danmaku={0}
                />
              </Carousel.Item>
              <Carousel.Item className="player-wrapper">
                <BilibiliVideo
                  cid="548193318"
                  aid="382170523"
                  asWide
                  highQuality
                  danmaku={0}
                />
              </Carousel.Item>
            </Carousel>
            <div className="video-icon-wrapper-bottom">
              <div className="video-icon-bottom">
                <Image
                  src="/homeCutout/Group 27.png"
                  style={{ width: "108px", height: "108px" }}
                />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="about-center">
            {width < 680 ? (
              <>
                <Row className="center-container">
                  <Col className="flex-center">
                    <div className="introduction-box">
                      <Row>
                        <div className="box-image flex-center">
                          <Image
                            src="/homeCutout/Group 101.png"
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
                            由UFA与中信证券、清华大学金融协会等联合举办，旨在打造最具权威的大学生金融赛事
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
                            src="/homeCutout/Group 102.png"
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
                            src="/homeCutout/Group 103.png"
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
                            src="/homeCutout/Group 101.png"
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
                            由UFA与中信证券、清华大学金融协会等联合举办，旨在打造最具权威的大学生金融赛事
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
                            src="/homeCutout/Group 102.png"
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
                            src="/homeCutout/Group 103.png"
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
          <h5 className="text-center" style={{ marginTop: "-80px" }}>
            <Button
              className="video-btn"
              style={{
                color: "#FFFFF",
                padding: "12px 32px",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "16px",
                fontFamily: "PingFang SC-Semibold, PingFang SC",
              }}
              variant="outline-primary"
              size="lg"
            >
              了解赛事
            </Button>
          </h5>
        </div>
      </Fade>

      <Fade bottom when={show}>
        <div className="about-intro">
          <div
            className="section"
            style={{ paddingTop: "120px", paddingBottom: "90px" }}
          >
            <div className="text-center">
              {width > 700? <><Image
                src="/homeCutout/Group 58.png"
                style={{ width: "685px", height: "79px" }}
              /></> : <><Image
              src="/homeCutout/Group 58.png"
              style={{ width: width-10, height: "79px" }}
            /></>  }
              
            </div>

            {width > 1100 ? (
              <>
                <div className="message-box">
                  <div className="flex-between">
                    <div className=" message-left">
                      <div className="message-title">
                        “权威金融竞赛证书”，为你提升核心竞争力
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content">
                        赛事证书由
                        UFA，中信证券，以及清华大学联合签署。表现优异的前
                        30%参赛选手将收获主办方颁发的官方证书，为你的简历增添亮点，丰富金融专业背景，帮助你从同龄人中迅速脱颖而出！
                      </div>
                    </div>
                    <div className="flex-center image-right">
                      <div className="image-right-icon-top">
                        <Image
                          src="/homeCutout/Rectangle 21.png"
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
                          src="/homeCutout/Group 25.png"
                          style={{ width: "108px", height: "108px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "200px" }}>
                  <div className="flex-between">
                    <div className="image-left">
                      <div className="image-left-icon-bottom">
                        <Image
                          src="/homeCutout/Group 61.png"
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
                          src="/homeCutout/Rectangle 21.png"
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                    </div>
                    <div className=" message-right">
                      <div className="message-title">
                        “0 门槛参与要求”，帮助小白完成自我提升
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content">
                        就算是没有经验的投资小白也不用担心，UFA
                        将在比赛全程陪伴你，无论是指导撰写投资笔记并生成属于自己的投资报告，还是定期邀请金融专家深度解析市场走向，我们将会全力为你的成长助力，帮你实现人生新高度！
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "200px" }}>
                  <div className="flex-between">
                    <div className=" message-left">
                      <div className="message-title">
                        “汇聚顶尖金融精英”，助你迅速拓展人脉圈
                      </div>
                      <span className="message-icon">
                        <Image
                          src="/homeCutout/Group 21.png"
                          style={{ width: "49px", height: "3px" }}
                        />
                      </span>
                      <div className="message-content">
                        相遇即机遇，我们联结了来自全球最顶尖大学的华人金融精英，他们可能是你未来并肩作战的同事，或是雇主，或是可靠的商业伙伴，亦或是投资人。我们丰富的线上/线下活动将为选手间进行深度交流提供绝佳机会，帮助你快速提升软技能！
                      </div>
                    </div>
                    <div className="flex-center image-right">
                      <div className="image-right-icon-top">
                        <Image
                          src="/homeCutout/Rectangle 21.png"
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
                          src="/homeCutout/Group 25.png"
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
                      “权威金融竞赛证书”为你加强背景与竞争力{width}
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
                      赛事证书由
                      UFA，中信证券，以及清华大学联合签署。表现优异的前
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
