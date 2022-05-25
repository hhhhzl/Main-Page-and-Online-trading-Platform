import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./executive.css";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";
import { fontWeight } from "@material-ui/system";

export default function Executive() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="section" style={{ padding: "120px 0px" }}>
      <div className="text-center">
        <Image
          src="/homeCutout/Group 71.png"
          style={{ width: "286px", height: "79px" }}
        />
      </div>

      <div className="team-intro-block" style={{ marginTop: "80px" }}>
        <br />
        <Row style={{ justifyContent: "flex-start", aligntems: "end" }}>
          <Col xs={4}>
            <div className="text-center" style={{ position: "relative" }}>
              <Image
                src="/homeCutout/chenbolin.png"
                title="head image"
                id="img-txz"
                alt="header"
                style={{
                  position: "relative",
                  width: "79.091%",
                  height: "150%",
                }}
              />
                <div className="bottom-shadow-image">
                    <Image
                        src="/homeCutout/Rectangle 656.png"
                        title="head image"
                        id="img-txz"
                        alt="header"
                        style={{
                            position: "relative",
                            width: "79.091%",
                            height: "30%",
                        }}
                    />
                </div>
              <div className="bottom-shadow">
                <div className="school">密歇根大学 大三</div>
                <div className="name">主席 | 陈柏霖 Max</div>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="text-center" style={{ position: "relative" }}>
              <Image
                src="/homeCutout/helitong.png"
                title="head image"
                id="img-txz"
                alt="header"
                style={{
                  position: "relative",
                  width: "79.091%",
                  height: "150%",
                }}
              />
                <div className="bottom-shadow-image">
                    <Image
                        src="/homeCutout/Rectangle 656.png"
                        title="head image"
                        id="img-txz"
                        alt="header"
                        style={{
                            position: "relative",
                            width: "79.091%",
                            height: "30%",
                        }}
                    />
                </div>
              <div className="bottom-shadow">
                <div className="school">香港大学 大四</div>
                <div className="name">何丽童 Stella</div>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="text-center" style={{ position: "relative" }}>
              <Image
                src="/homeCutout/hezhilin.png"
                title="head image"
                id="img-txz"
                alt="header"
                style={{
                  position: "relative",
                  width: "79.091%",
                  height: "150%",
                }}
              />
             <div className="bottom-shadow-image">
                 <Image
                     src="/homeCutout/Rectangle 656.png"
                     title="head image"
                     id="img-txz"
                     alt="header"
                     style={{
                         position: "relative",
                         width: "79.091%",
                         height: "30%",
                     }}
                 />
             </div>
              <div className="bottom-shadow">
                <div className="school">南加州大学 大三</div>
                <div className="name">何炙霖 Hector</div>
              </div>
            </div>
          </Col>
        </Row>

        <div style={{display:"flex", justifyContent: "center", aligntems: "end",marginTop:'120px' }}>
            <div className="text-center" style={{ position: "relative",    marginRight: "75px", }}>
              <Image
                src="/homeCutout/heruohang.png"
                title="head image"
                id="img-txz"
                alt="header"
                style={{
                  position: "relative",

                }}
              />
                <div className="bottom-shadow-image">
                    <Image
                        src="/homeCutout/Rectangle 656.png"
                        title="head image"
                        id="img-txz"
                        alt="header"
                        style={{
                            position: "relative",
                            width: "79.091%",
                            height: "30%",
                        }}
                    />
                </div>
              <div className="bottom-shadow" style={{left:"0",bottom: "95px"}}>
                <div className="school">密歇根大学 大三</div>
                <div className="name">贺若航 Harris</div>
              </div>
            </div>

            <div className="text-center" style={{ position: "relative",marginLeft: "75px", }}>
              <Image
                src="/homeCutout/chenhaonan.png"
                title="head image"
                id="img-txz"
                alt="header"
                style={{
                  position: "relative",

                }}
              />
                <div className="bottom-shadow-image">
                    <Image
                        src="/homeCutout/Rectangle 656.png"
                        title="head image"
                        id="img-txz"
                        alt="header"
                        style={{
                            position: "relative",
                            width: "79.091%",
                            height: "30%",
                        }}
                    />
                </div>
              <div className="bottom-shadow" style={{left:"24%"}}>
                <div className="school">密歇根大学 大三</div>
                <div className="name">陈昊楠 Norman</div>
              </div>
            </div>
        </div >
      </div>
    </div>
  );
}
