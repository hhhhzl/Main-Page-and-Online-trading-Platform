import React, { useState } from "react";
import "./contacts.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Row, Container, Col, Form } from "react-bootstrap";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";

const Contacts = () => {
  const [validated, setValidated] = useState(false);
  const { width, height } = useWindowDimensions();

  return (
    <div className="section" style={{ padding: "120px 0px 0px 0px" }}>
      <div className="text-center">
        <Image
          src="/homeCutout/Group 81.png"
          style={{ width: "248px", height: "79px" }}
        />
      </div>
      <div className="bottom-cover-picture animated">
        <Row>
          <Col className="flex-center">
            <div className="introduction-box">
              <Row>
                <div className="box-image flex-center">
                  <Image
                    src="/homeCutout/Group 1010.png"
                    style={{
                      width:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                      height:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      color: "#6E7184",
                      fontWeight: "400",
                      fontFamily:
                        "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontSize: width > 960 ? "16px" : "14px",
                      paddingTop: width > 1000 ? "92px" : "70px",
                      lineHeight: "28px",
                    }}
                  >
                    “UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办
                  </div>
                </div>
              </Row>
            </div>
          </Col>
          <Col
            className="flex-center"
            style={{ padding: width > 1600 ? "0px 3.91%" : "0px" }}
          >
            <div className="introduction-box">
              <Row>
                <div className="box-image flex-center">
                  <Image
                    src="/homeCutout/Group 1020.png"
                    style={{
                      width:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                      height:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                    }}
                  />
                </div>
                <div className="title"></div>
                <div>
                  <div
                    style={{
                      color: "#6E7184",
                      fontWeight: "400",
                      fontFamily:
                        "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontSize: width > 960 ? "16px" : "14px",
                      paddingTop: width > 1000 ? "92px" : "70px",
                      lineHeight: "28px",
                    }}
                  >
                    “UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办
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
                    src="/homeCutout/Group 1003.png"
                    style={{
                      width:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                      height:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      color: "#6E7184",
                      fontWeight: "400",
                      fontFamily:
                        "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontSize: width > 960 ? "16px" : "14px",
                      paddingTop: width > 1000 ? "92px" : "70px",
                      lineHeight: "28px",
                    }}
                  >
                    “UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: width > 800 ? "120px" : "0px" }}>
          <Col className="flex-center">
            <div className="introduction-box">
              <Row>
                <div className="box-image flex-center">
                  <Image
                    src="/homeCutout/Group 1001.png"
                    style={{
                      width:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                      height:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      color: "#6E7184",
                      fontWeight: "400",
                      fontFamily:
                        "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontSize: width > 960 ? "16px" : "14px",
                      paddingTop: width > 1000 ? "92px" : "70px",
                      lineHeight: "28px",
                    }}
                  >
                    “UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办
                  </div>
                </div>
              </Row>
            </div>
          </Col>
          <Col
            className="flex-center"
            style={{ padding: width > 800 ? "0px 75px" : "0px" }}
          >
            <div className="introduction-box">
              <Row>
                <div className="box-image flex-center">
                  <Image
                    src="/homeCutout/Group 1002.png"
                    style={{
                      width:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                      height:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                    }}
                  />
                </div>
                <div className="title"></div>
                <div>
                  <div
                    style={{
                      color: "#6E7184",
                      fontWeight: "400",
                      fontFamily:
                        "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontSize: width > 960 ? "16px" : "14px",
                      paddingTop: width > 1000 ? "92px" : "70px",
                      lineHeight: "28px",
                    }}
                  >
                    “UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办
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
                    src="/homeCutout/Group 1003.png"
                    style={{
                      width:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                      height:
                        width > 1500
                          ? "160px"
                          : width > 1350
                          ? "140px"
                          : width > 960
                          ? "120px"
                          : "100px",
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      color: "#6E7184",
                      fontWeight: "400",
                      fontFamily:
                        "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontSize: width > 960 ? "16px" : "14px",
                      paddingTop: width > 1000 ? "92px" : "70px",
                      lineHeight: "28px",
                    }}
                  >
                    “UFA杯” 由UFA与中信证券、清华大学金融协会等联合举办
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ background: "#F5F6F8" }}>
        <div className="section" style={{ padding: " 120px 0px" }}>
          <div className="text-center">
            <Image
              src="/homeCutout/Group 127.png"
              style={{ width: "248px", height: "79px" }}
            />
          </div>

          <div className="text-center" style={{ paddingTop: "80px" }}>
            <div>
              <Image
                src="/homeCutout/Group 8100.png"
                style={{ width: "160px", height: "160px", marginRight: "40px" }}
              />
              <Image
                src="/homeCutout/Group 8100.png"
                style={{ width: "160px", height: "160px", marginLeft: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
