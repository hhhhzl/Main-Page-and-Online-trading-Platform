import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./team.css";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";
import { fontWeight } from "@material-ui/system";

export default function Team() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="section colored-team" style={{ padding: "120px 0px 87px" }}>
      <div className="text-center">
        <Image
          src="/homeCutout/Group 65@2x.png"
          style={{ width: "248px", height: "79px" }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="team-center-block">
        {width > 800 ? (
          <>
            <Row>
              <Col xs={4}>
                <div className="text-center">
                  <Image
                    src="/homeCutout/Mask group@2x.png"
                    title="lindsay image"
                    alt="Lindsay"
                    roundedCircle
                    style={{
                      position: "relative",
                      width: "55.559%",
                      height: "55%",
                    }}
                  />
                  <div
                    className="text-center"
                    style={{ color: "#6E7184", padding: "24px 10px 10px 10px" }}
                  >
                    <h5
                      style={{
                        color: "#2A2B30",
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "20px" : width > 800 ? "18px" : "16px",
                        lineHeight: "23px",
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      邹鲁秦 Lindsay
                    </h5>
                    <p
                      style={{
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "16px" : width > 800 ? "14px" : "12px",
                        textIndent: "0",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                        lineHeight: "28px",
                        paddingTop: "16px",
                        fontWeight: "400",
                      }}
                    >
                      拥有抖音、知乎百万粉丝的求职界一姐
                      <br />
                      JP Morgan纽约总部工作多年并担任校招官
                      <br />
                      北大/哥大学霸 毕业后斩获十余份offer
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={4}>
                <div className="text-center">
                  <Image
                    src="/homeCutout/zhangyankui@2x.png"
                    title="张彦魁 image"
                    alt="张彦魁"
                    roundedCircle
                    style={{
                      position: "relative",
                      width: "55.559%",
                      height: "55%",
                    }}
                  />

                  <div
                    className="text-center"
                    style={{ color: "#6E7184", padding: "24px 10px 10px 10px" }}
                  >
                    <h5
                      style={{
                        color: "#2A2B30",
                        fontFamily:
                          "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontSize:
                          width > 1000 ? "20px" : width > 800 ? "18px" : "16px",
                        lineHeight: "23px",
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      张彦魁
                    </h5>
                    <p
                      style={{
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "16px" : width > 800 ? "14px" : "12px",
                        textIndent: "0",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                        lineHeight: "28px",
                        paddingTop: "16px",
                        fontWeight: "400",
                      }}
                    >
                      中信证券 首席客户经理
                      <br />
                      上海交通大学SAIF MBA
                      <br />
                      曾担任全球最大私人银行 财富管理部 副董事
                      <br />
                      彦魁聊财富 财经博主
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={4}>
                <div className="text-center">
                  <Image
                    src="/homeCutout/chumen@2x.png"
                    title="楚门 image"
                    alt="楚门"
                    roundedCircle
                    style={{
                      position: "relative",
                      width: "55.559%",
                      height: "55%",
                    }}
                  />
                  <div
                    className="text-center"
                    style={{ color: "#6E7184", padding: "24px 10px 10px 10px" }}
                  >
                    <h5
                      style={{
                        color: "#2A2B30",
                        fontFamily:
                          "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontSize:
                          width > 1000 ? "20px" : width > 800 ? "18px" : "16px",
                        lineHeight: "23px",
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      楚门
                    </h5>
                    <p
                      style={{
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "16px" : width > 800 ? "14px" : "12px",
                        textIndent: "0",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                        lineHeight: "28px",
                        paddingTop: "16px",
                        fontWeight: "400",
                      }}
                    >
                      易思汇COO&合伙人 / 埔思学院联合创始人
                      <br />
                      前密大CSSA联合主席
                      <br />
                      密西根中国论坛创始人
                      <br />
                      现任密歇根大学北京校友会主席{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{justifyContent: "center",marginTop:"20px"}}>
              <Col xs={6}>
                <div className="text-center">
                  <Image
                    src="/homeCutout/Mask group@2x.png"
                    title="lindsay image"
                    alt="Lindsay"
                    roundedCircle
                    style={{
                      position: "relative",
                      width: "55.559%",
                      height: "55%",
                    }}
                  />
                  <div
                    className="text-center"
                    style={{ color: "#6E7184", padding: "24px 10px 10px 10px" }}
                  >
                    <h5
                      style={{
                        color: "#2A2B30",
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "20px" : width > 800 ? "18px" : "16px",
                        lineHeight: "23px",
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      邹鲁秦 Lindsay
                    </h5>
                    <p
                      style={{
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "16px" : width > 800 ? "14px" : "12px",
                        textIndent: "0",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                        lineHeight: "28px",
                        paddingTop: "16px",
                        fontWeight: "400",
                      }}
                    >
                      拥有抖音、知乎百万粉丝的求职界一姐
                      <br />
                      JP Morgan纽约总部工作多年并担任校招官
                      <br />
                      北大/哥大学霸 毕业后斩获十余份offer
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row style={{justifyContent: "center",marginTop:"20px"}}>
              <Col xs={6}>
                <div className="text-center">
                  <Image
                    src="/homeCutout/zhangyankui@2x.png"
                    title="张彦魁 image"
                    alt="张彦魁"
                    roundedCircle
                    style={{
                      position: "relative",
                      width: "55.559%",
                      height: "55%",
                    }}
                  />

                  <div
                    className="text-center"
                    style={{ color: "#6E7184", padding: "24px 10px 10px 10px" }}
                  >
                    <h5
                      style={{
                        color: "#2A2B30",
                        fontFamily:
                          "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontSize:
                          width > 1000 ? "20px" : width > 800 ? "18px" : "16px",
                        lineHeight: "23px",
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      张彦魁
                    </h5>
                    <p
                      style={{
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "16px" : width > 800 ? "14px" : "12px",
                        textIndent: "0",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                        lineHeight: "28px",
                        paddingTop: "16px",
                        fontWeight: "400",
                      }}
                    >
                      中信证券 首席客户经理
                      <br />
                      上海交通大学SAIF MBA
                      <br />
                      曾担任全球最大私人银行 财富管理部 副董事
                      <br />
                      彦魁聊财富 财经博主
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row style={{justifyContent: "center",marginTop:"20px"}}>
              <Col xs={6}>
                <div className="text-center">
                  <Image
                    src="/homeCutout/chumen@2x.png"
                    title="楚门 image"
                    alt="楚门"
                    roundedCircle
                    style={{
                      position: "relative",
                      width: "55.559%",
                      height: "55%",
                    }}
                  />
                  <div
                    className="text-center"
                    style={{ color: "#6E7184", padding: "24px 10px 10px 10px" }}
                  >
                    <h5
                      style={{
                        color: "#2A2B30",
                        fontFamily:
                          "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontSize:
                          width > 1000 ? "20px" : width > 800 ? "18px" : "16px",
                        lineHeight: "23px",
                        fontWeight: "bold",
                        margin: "0px",
                      }}
                    >
                      楚门
                    </h5>
                    <p
                      style={{
                        fontFamily: "MicrosoftYaHeiUI",
                        fontSize:
                          width > 1000 ? "16px" : width > 800 ? "14px" : "12px",
                        textIndent: "0",
                        paddingLeft: width > 750 ? "10px" : "5px",
                        paddingRight: width > 750 ? "10px" : "5px",
                        lineHeight: "28px",
                        paddingTop: "16px",
                        fontWeight: "400",
                      }}
                    >
                      易思汇COO&合伙人 / 埔思学院联合创始人
                      <br />
                      前密大CSSA联合主席
                      <br />
                      密西根中国论坛创始人
                      <br />
                      现任密歇根大学北京校友会主席{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
}
