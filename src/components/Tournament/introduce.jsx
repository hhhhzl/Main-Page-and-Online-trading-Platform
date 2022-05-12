import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./introduce.css";
import useWindowDimensions from "../../utils/sizewindow";

export default function Introduce() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="introduce">
      <div className="introduce-content gray-bg">
        <div className="introduce-mark">
          <div className="top-image">
            <Image
              src="/tournament/Group 110.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <div className="center-content">
            大赛旨在为全球华人大学生提供知识实践以及投资学习的平台支持，鼓励大学生以知促行，以行促知，培养创新精神与实践能力，推动金融创新人才培养机制的建立。大赛愿景希望联结全球未来华人精英，共同建设祖国金融未来。
          </div>
          <div className="bottom-image">
            <Image
              src="/tournament/Group 172.png"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
