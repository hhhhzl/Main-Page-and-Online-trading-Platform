import React, { useEffect, useState, useContext } from "react";
// import "./footer.css";
import { Image, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./sign.css";
import useWindowDimensions from "../../utils/sizewindow";
import AuthContext from "context/AuthContext";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";

export default function Sign() {
  const { width, height } = useWindowDimensions();
  const [bodyscrollrdTop, setbodyscrollTop] = useState(0);
  let { user, logoutUser } = useContext(AuthContext);
  const history = useHistory();

  const [loginModel, setloginModel] = useState(false);
  const handleClose = () => {
    setloginModel(false);
  };

  const sendUser = () => {
    if (user) {
      history.push("/team/register");
    } else {
      setloginModel(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.scrollTop > bodyscrollrdTop ||
        document.body.scrollTop > bodyscrollrdTop
      ) {
        setbodyscrollTop(
          document.documentElement.scrollTop || document.body.scrollTop
        );
      }
      console.log("屏幕向下距离", bodyscrollrdTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bodyscrollrdTop]);

  return (
    <>
      <Modal
        show={loginModel}
        onHide={handleClose}
        center
        backdrop="static"
        keyboard={false}
        className="page-header-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              textAlign: "center",
              fontSize: "15px",
              fontFamily: "",
              fontFamily: " Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
              fontWeight: "bold",
              paddingLeft: "30px",
              color: "#2A2B30",
              lineHeight: "20px",
              letterSpacing: "1px",
            }}
          >
            请先登录账户
          </Modal.Title>
        </Modal.Header>
      </Modal>
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          width: "1px",
          height: width / 2.97,
          background: `linear-gradient(to top, #E5E8EE ${
            ((bodyscrollrdTop / (width / 2.97)) * 100).toString() + "%"
          }, rgba(255, 255, 255, 0.5) ${
            ((bodyscrollrdTop / (width / 2.97)) * 100).toString() + "%"
          })`,
          top: "64px",
          left: width / 2 - 1,
        }}
      ></div>
      <div className="sign">
        <div className="sign-container">
          <div className="sign-left">
            <div className="number-container">
              <Fade bottom when={bodyscrollrdTop >= 0}>
                <div className="number ">1</div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 390}>
                <div className="number padding120">2</div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 590}>
                <div className="number padding120">3</div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 790}>
                <div className="number padding120">4</div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 990}>
                <div className="number padding120">5</div>
              </Fade>
            </div>
          </div>

          <div className="sign-right">
            <div className="step-container">
              <Fade bottom when={bodyscrollrdTop >= 0}>
                <div className="flex-start" style={{ paddingTop: "110px" }}>
                  <div className="sign-icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>

                  <div className="sign-line"></div>

                  <div className="step-icon">
                    <Image
                      src="/tournament/Group 179@2x.png"
                      style={{ width: "94px", height: "94px" }}
                    />
                  </div>

                  <div className="step-text">注册UFA账号</div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 390}>
                <div className="flex-start" style={{ paddingTop: "100px" }}>
                  <div className="sign-icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>

                  <div className="sign-line"></div>

                  <div className="step-icon">
                    <Image
                      src="/tournament/Group 181@2x.png"
                      style={{ width: "94px", height: "94px" }}
                    />
                  </div>

                  <div className="step-text">点击报名赛事</div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 590}>
                <div className="flex-start" style={{ paddingTop: "100px" }}>
                  <div className="sign-icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>

                  <div className="sign-line"></div>

                  <div className="step-icon">
                    <Image
                      src="/tournament/Group 182@2x.png"
                      style={{ width: "94px", height: "94px" }}
                    />
                  </div>

                  <div className="step-text">队长录入个人/团队信息</div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 790}>
                <div className="flex-start" style={{ paddingTop: "90px" }}>
                  <div className="sign-icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>

                  <div className="sign-line"></div>

                  <div className="step-icon">
                    <Image
                      src="/tournament/Group 186@2x.png"
                      style={{ width: "94px", height: "94px" }}
                    />
                  </div>

                  <div className="step-text">邀请其他队员入驻</div>
                </div>
              </Fade>
              <Fade bottom when={bodyscrollrdTop > 990}>
                <div className="flex-start" style={{ paddingTop: "90px" }}>
                  <div className="sign-icon-wrapper">
                    <Image
                      src="/tournament/Group 142@2x.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>

                  <div className="sign-line"></div>

                  <div className="step-icon">
                    <Image
                      src="/tournament/Group 188@2x.png"
                      style={{ width: "94px", height: "94px" }}
                    />
                  </div>

                  <div className="step-text">收到邮件，报名成功！</div>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="footer-btn-container">
          {/*<div
          className="footer-btn animated bounceInDown"
        >*/}

          <div
            className="footer-btn animated"
            style={{ marginTop: "0px", position: "relative", zIndex: "100" }}
          >
            <div
              style={{ height: "48px", position: "relative", zIndex: "100" }}
            ></div>
            <Button
              className="sign-join-match-btn"
              variant="primary"
              size="sm"
              onClick={() => sendUser()}
            >
              正式报名
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
