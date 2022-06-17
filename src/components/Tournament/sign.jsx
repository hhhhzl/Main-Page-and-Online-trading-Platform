import React, { useEffect, useState, useContext } from "react";
// import "./footer.css";
import { Image, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./sign.css";
import useWindowDimensions from "../../utils/sizewindow";
import AuthContext from "context/AuthContext";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";
import { setchoice, setPlatformType } from "utils";
import moment from "moment";

export default function Sign() {
  const { width, height } = useWindowDimensions();
  const [bodyscrollrdTop, setbodyscrollTop] = useState(0);
  let { user, logoutUser, apikey, competition } = useContext(AuthContext);
  const [buttonword, setbuttonword] = useState("正式报名");
  const history = useHistory();
  const [showwheretogo, setshowwheretogo] = useState(false);

  const [loginModel, setloginModel] = useState(false);
  const [teamActive, setTeamActive] = useState(true);
  const handleClose = () => {
    setloginModel(false);
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bodyscrollrdTop]);

  const sendUser = () => {
    // if (user) {
    //   history.push("/team/register");
    // } else {
    //   history.push("/tournament");
    // }
    if (buttonword == "进入赛事") {
      setPlatformType("competition");
      history.push("/team/register");
    } else if (buttonword == "正式报名") {
      if (!user) {
        setshowwheretogo(true);
      } else {
        history.push("/team/register");
      }
    } else if (buttonword == "查看赛事") {
      /////todu
    }
  };

  useEffect(() => {
    if (user == null && competition) {
      var now = moment();
      var timeInShanghai = now.tz("Asia/Shanghai").format();
      if (timeInShanghai < competition.register) {
        setbuttonword("正式报名");
      } else if (
        competition.register < timeInShanghai &&
        timeInShanghai < competition.start
      ) {
        setbuttonword("正式报名");
      } else if (competition.start < timeInShanghai) {
        setbuttonword("查看赛事");
      }
    }
  }, [user, competition]);

  useEffect(() => {
    if (user && competition) {
      var now = moment();
      var timeInShanghai = now.tz("Asia/Shanghai").format();
      if (timeInShanghai < competition.register) {
        setbuttonword("正式报名");
      } else if (
        competition.register < timeInShanghai &&
        timeInShanghai < competition.start
      ) {
        setbuttonword("正式报名");
      } else if (competition.start < timeInShanghai) {
        setbuttonword("查看赛事");
      }
    }
  }, [user, competition]);

  useEffect(() => {
    if (apikey && competition) {
      var now = moment();
      var timeInShanghai = now.tz("Asia/Shanghai").format();
      if (timeInShanghai < competition.register) {
        setbuttonword("正式报名");
      } else if (
        competition.register < timeInShanghai &&
        timeInShanghai < competition.end
      ) {
        setbuttonword("进入赛事");
      } else if (competition.end < timeInShanghai) {
        setbuttonword("查看赛事");
      }
    }
  }, [apikey, competition]);

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

      <Modal
        show={showwheretogo}
        onHide={() => setshowwheretogo(false)}
        centered
        className="general-modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            您还没有登录，请先登录或者注册再报名参加比赛。
        </Modal.Body>
        <Modal.Footer style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
          <Button
            className="modal-btn modal-btn-cancel"
            variant="secondary"
            onClick={() => {
              setchoice("/login");
              history.push("/team/register");
            }}
          >
            前往登录
          </Button>
          <Button
            className="modal-btn modal-btn-submit"
            variant="primary"
            onClick={() => {
              setchoice("/register");
              history.push("/team/register");
            }}
          >
            前往注册
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          width: width > 800 ? "1px" : "",
            height: "662px",
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
        <div className="team-or-person" style={{ marginLeft: width * 0.1875 }}>
          <div
            className={teamActive ? "match-active" : "match-normal"}
            onClick={() => setTeamActive(true)}
          >
            团队参赛
          </div>
          <div
            className={teamActive ? "match-normal" : "match-active"}
            onClick={() => setTeamActive(false)}
            style={{ marginLeft: "36px" }}
          >
            个人参赛
          </div>
        </div>
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
              {teamActive ? (
                <Fade bottom when={bodyscrollrdTop > 790}>
                  <div className="number padding120">4</div>
                </Fade>
              ) : null}

              {/* <Fade bottom when={bodyscrollrdTop > 990}>
                <div className="number padding120">5</div>
              </Fade> */}
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

                  <div className="step-text-wrapper">
                    <div className="step-text">点击报名赛事</div>
                    {teamActive ? (
                      <>
                        <div className="step-text-instr">
                          (由队长率先“创建团队”)
                        </div>
                        <div className="step-text-instr">
                          (其他队员点击“加入团队”)
                        </div>
                      </>
                    ) : (
                      <div className="step-text-instr">
                        (其中点击“创建团队”)
                      </div>
                    )}
                  </div>
                </div>
              </Fade>
              {teamActive ? (
                <>
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
                      <div className="step-text-wrapper">
                        <div className="step-text">队长通过队员入队申请</div>
                        <div className="step-text-instr">
                          (在网站的右上角小铃铛处查看申请)
                        </div>
                      </div>
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
                          src="/tournament/Group 188@2x.png"
                          style={{ width: "94px", height: "94px" }}
                        />
                      </div>

                      <div className="step-text">收到邮件，报名成功！</div>
                    </div>
                  </Fade>
                </>
              ) : (
                <Fade bottom when={bodyscrollrdTop > 590}>
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
              )}
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
              {buttonword}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
