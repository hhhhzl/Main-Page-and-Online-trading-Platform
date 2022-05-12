import React from "react";
// import "./footer.css";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./sign.css";
import useWindowDimensions from "../../utils/sizewindow";

export default function Sign() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="sign">
      <div className="sign-container">
        <div className="sign-left">
          <div className="number-container">
            <div className="number ">1</div>

            <div className="number padding120">2</div>
            <div className="number padding120">3</div>
            <div className="number padding120">4</div>
            <div className="number padding120">5</div>
          </div>
        </div>

        <div className="sign-right">
          <div className="step-container">
            <div className="flex-start" style={{ paddingTop: "110px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 179.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">注册UFA账号</div>
            </div>

            <div className="flex-start" style={{ paddingTop: "100px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 181.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">点击报名赛事</div>
            </div>

            <div className="flex-start" style={{ paddingTop: "100px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 182.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">队长录入个人/团队信息</div>
            </div>
            <div className="flex-start" style={{ paddingTop: "90px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 186.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">邀请其他队员入驻</div>
            </div>
            <div className="flex-start" style={{ paddingTop: "90px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 188.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">收到邮件，报名成功！</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-btn-container">
        <div
          className="footer-btn animated bounceInDown"
          
        >
          <Button className="sign-join-match-btn" variant="primary" size="sm">
            报名参赛
          </Button>
        </div>
      </div>
    </div>
  );
}
