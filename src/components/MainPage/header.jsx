import { useContext, React, useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useHistory } from "react-router";
import {
  HeaderOut,
  HeaderContianer,
  HeaderMenu,
  HeaderItem,
  HeaderBtnLink,
  HeaderLinks,
  HeaderBtn,
  MenuItemLinks,
} from "./HeaderElements";
import {
  NotificationsNoneOutlined,
  ViewHeadlineTwoTone,
} from "@material-ui/icons";
import { Modal, Button } from "react-bootstrap";
import useWindowDimensions from "../../utils/sizewindow";
import Image from "react-bootstrap/Image";
import "./header.css";
import { MobileIcon, HomeMobileIcon } from "./NavbarElements";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AuthContext from "../../context/AuthContext";
import { MenuItemLinksRouter } from "./HeaderElements";
import { IconButton } from "@material-ui/core";
import { clearLocalStorage, setPlatformType } from "utils";
const HeaderCreate = ({ toggle }) => {
  let { user, logoutUser } = useContext(AuthContext);
  const { width, height } = useWindowDimensions();
  const [showMenu, setHhowMenu] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [show, setShow] = useState(false);
  const [showUFA, setShowUFA] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [box, setbox] = useState(height * 0.09);
  const [current, setCurrent] = useState(1);
  const { url } = useRouteMatch();
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);
  const history = useHistory();
  const [note, setnote] = useState(null);
  const sendUserNews = () => {
    history.push("/chat");
  };
  // const [hover, setHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseUFA = () => setShowUFA(false);
  const handleShowUFA = () => setShowUFA(true);
  const handleShowMenu = (showMenu) => {
    setHhowMenu(showMenu);
  };

  const handleCloseTransaction = () => setShowTransaction(false);
  const handleShowTransaction = () => setShowTransaction(true);

  const jumpNewPage = () => {
    history.push("/");
  };
  const toHome = () => {
    history.push("/");
  };

  const changeCurrent = (item) => {
    console.log(item);
    setCurrent(item);
  };

  const handleLoginOut = () => {
    setShowLoginOutModal(true);
  };

  const LogUserOut = () => {
    setShowLoginOutModal(false);
    history.push("/");
    logoutUser();
    clearLocalStorage();
  };

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = 85 < bodyScrollTop ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };
    console.log(user, "---------------user------------");
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  return (
    <>
      <Modal
        show={showLoginOutModal}
        onHide={handleClose}
        centered
        className="page-header-modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>您确定要退出吗？</Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-btn modal-btn-cancel"
            variant="secondary"
            onClick={handleClose}
          >
            取消
          </Button>
          <Button
            className="modal-btn modal-btn-submit"
            variant="primary"
            onClick={LogUserOut}
          >
            确认
          </Button>
        </Modal.Footer>
      </Modal>
      <HeaderOut
        style={{
          width: width,
          borderBottom:
            url == "/personal" ||
            url == "/team" ||
            url == "/personalEdit" ||
            url == "/personalEdit" ||
            url == "/chat" ||
            url == "/team/register" ||
            url == "/team/create" ||
            url == "/team/join"
              ? "1px solid rgb(229, 232, 238)"
              : "",
        }}
        scrolledDownEnough={scrolledDownEnough}
        url={url}
        // onMouseOver={handleMouseOver}
        // onMouseLeave={handleMouseLeave}
      >
        <HeaderContianer>
          {scrolledDownEnough ? (
            <>
              <HomeMobileIcon onClick={() => toggle()}>
                <ViewHeadlineTwoTone
                  style={{ color: "black" }}
                  fontSize="large"
                />
              </HomeMobileIcon>
            </>
          ) : (
            <>
              <HomeMobileIcon onClick={() => toggle()}>
                <ViewHeadlineTwoTone fontSize="large" />
              </HomeMobileIcon>
            </>
          )}
          <div
            className=""
            style={{ height: "64px", width: "64px", top: 0 }}
            onClick={() => toHome()}
          >
            <Image
              src={
                scrolledDownEnough
                  ? "/homeCutout/UFA-LOGO-RED@2x.png"
                  : url != "/" && url != "/tournament"
                  ? "/homeCutout/UFA-LOGO-RED@2x.png"
                  : "/UFA-LOGO.png"
              }
              style={{
                width: "64px",
                height: "64px",
              }}
            />
          </div>

          <div style={{ display: width < 426 ? "block" : "none" }}>
            {user && user.jti ? (
              <>
                <div>
                  <IconButton
                    style={{
                      // margin: "20px 24px",
                      padding: "0px 0",
                      color: scrolledDownEnough
                        ? "black"
                        : url != "/" && url != "/tournament"
                        ? "black"
                        : "white",
                    }}
                    onClick={() => sendUserNews()}
                  >
                    <NotificationsNoneOutlined></NotificationsNoneOutlined>
                    {note ? (
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "#FF3541",
                          borderRadius: "50%",
                          marginLeft: "-10px",
                          marginTop: "-10px",
                        }}
                      ></div>
                    ) : null}
                  </IconButton>
                </div>
              </>
            ) : (
              // <span
              //   className="small-screen-title"
              //   style={{ color: scrolledDownEnough ? "black" : "" }}
              // >
              //   登录/注册
              // </span>
              <div className="small-screen-title">
                <HeaderBtnLink
                  style={{
                    color: scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                    padding: "0px",
                    fontSize: "16px",
                  }}
                  to="/login"
                >
                  登录
                </HeaderBtnLink>
                <span
                  style={{
                    color: scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                  }}
                >
                  /
                </span>
                <HeaderBtnLink
                  style={{
                    color: scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                    padding: "0px",
                    fontSize: "16px",
                  }}
                  to="/register"
                >
                  注册
                </HeaderBtnLink>
                {/* <span className="small-screen-title" style={{color:"#2A2B30",fontSize:"18px"}}>登录/注册</span> */}
              </div>
            )}
          </div>

          <HeaderMenu>
            <HeaderItem
              onMouseLeave={handleCloseUFA}
              style={{ width: width > 900 ? "100px" : "92px" }}
            >
              {/* {user} */}
              <HeaderBtnLink
                style={{
                  borderBottom:
                    url != "/"
                      ? "none"
                      : scrolledDownEnough
                      ? "3px solid #1442ED"
                      : "3px solid #FFFFFF",
                  color:
                    scrolledDownEnough && url != "/"
                      ? "#2A2B30"
                      : url != "/" && scrolledDownEnough
                      ? "#FFFFFF"
                      : scrolledDownEnough && url == "/"
                      ? "#1442ED"
                      : !scrolledDownEnough &&
                        url != "/" &&
                        url != "/tournament"
                      ? "#2A2B30"
                      : "#FFFFFF",
                  fontWeight: url == "/" ? "bold" : "500",
                }}
                scrolledDownEnough={scrolledDownEnough}
                url={url}
                width={width}
                offset={-50}
                activeClass={
                  scrolledDownEnough && current == 1
                    ? "active-block-scroll"
                    : "active-block"
                }
                to="/"
                spy={true}
                smooth={true}
                duration={700}
                onMouseEnter={handleShowUFA}
                onClick={() => changeCurrent(1)}
              >
                UFA介绍
              </HeaderBtnLink>
              <div
                className="header-menu"
                style={{
                  display:
                    showUFA && current == 1 && url == "/" ? "flex" : "none",
                  width: "107px",
                }}
                // onMouseEnter={handleMouseLeave}
                onMouseLeave={handleCloseUFA}
              >
                <MenuItemLinks
                  offset={-50}
                  spy={true}
                  smooth={true}
                  to="aboutus"
                  duration={700}
                  className="menu-item"
                >
                  协会介绍
                </MenuItemLinks>
                <MenuItemLinks
                  to="team"
                  offset={20}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="menu-item"
                >
                  团队介绍
                </MenuItemLinks>
                <MenuItemLinks
                  to="review"
                  offset={-50}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="menu-item"
                >
                  往期回顾
                </MenuItemLinks>
                <MenuItemLinks
                  to="contactus"
                  offset={-50}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="menu-item"
                >
                  联系我们
                </MenuItemLinks>
              </div>
            </HeaderItem>

            <HeaderItem>
              <HeaderBtnLink
                style={{
                  borderBottom:
                    url != "/#"
                      ? "none"
                      : scrolledDownEnough
                      ? "3px solid #1442ED"
                      : "3px solid #FFFFFF",
                  color:
                    scrolledDownEnough && url != "/#"
                      ? "#2A2B30"
                      : url == "/#" && scrolledDownEnough
                      ? "#1442ED"
                      : scrolledDownEnough && url == "/#"
                      ? "#1442ED"
                      : !scrolledDownEnough &&
                        url != "/" &&
                        url != "/tournament"
                      ? "#2A2B30"
                      : "#FFFFFF",
                      fontWeight: url == "/#" ? "bold" : "500",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={() => changeCurrent(2)}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                spy={true}
                smooth={true}
                duration={700}
              >
                论坛
              </HeaderBtnLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderBtnLink
                style={{
                  borderBottom:
                    url != "/tournament"
                      ? "none"
                      : scrolledDownEnough
                      ? "3px solid #1442ED"
                      : "3px solid #FFFFFF",
                  color:
                    scrolledDownEnough && url != "/tournament"
                      ? "#2A2B30"
                      : url == "/tournament" && !scrolledDownEnough
                      ? "#FFFFFF"
                      : scrolledDownEnough && url == "/tournament"
                      ? "#1442ED"
                      : !scrolledDownEnough &&
                        url != "/" &&
                        url != "/tournament"
                      ? "#2A2B30"
                      : "#FFFFFF",
                      fontWeight: url == "/tournament" ? "bold" : "500",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                spy={true}
                smooth={true}
                duration={700}
                onClick={() => changeCurrent(3)}
                to="/tournament"
              >
                赛事介绍
              </HeaderBtnLink>
            </HeaderItem>
            <HeaderItem onMouseLeave={handleCloseTransaction}>
              <HeaderBtnLink
                style={{
                  paddingLeft: "16px",
                  borderBottom:
                    url != "/#"
                      ? "none"
                      : scrolledDownEnough
                      ? "3px solid #1442ED"
                      : "3px solid #FFFFFF",
                  color:
                    scrolledDownEnough && url != "/#"
                      ? "#2A2B30"
                      : url == "/#" && scrolledDownEnough
                      ? "#1442ED"
                      : scrolledDownEnough && url == "/#"
                      ? "#1442ED"
                      : !scrolledDownEnough &&
                        url != "/" &&
                        url != "/tournament"
                      ? "#2A2B30"
                      : "#FFFFFF",
                      fontWeight: url == "/#" ? "bold" : "500",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={() => {
                  changeCurrent(4);
                  setPlatformType("competition");
                }}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                // to="review"
                spy={true}
                smooth={true}
                duration={700}
                // onMouseEnter={handleShowTransaction}
                to="/eplatform"
              >
                赛事账户
              </HeaderBtnLink>
              {/* <div
                className="header-menu"
                style={{ display: showTransaction ? "flex" : "none" }}
                // onMouseEnter={handleMouseLeave}
                onMouseLeave={handleCloseTransaction}
              >
                <MenuItemLinksRouter
                  to="/eplatform"
                  className="menu-item"
                  onClick={() => setPlatformType("competition")}
                >
                  赛事账户
                </MenuItemLinksRouter>
                <MenuItemLinksRouter to='/eplatform' className="menu-item">个人账户</MenuItemLinksRouter>
              </div> */}
            </HeaderItem>
          </HeaderMenu>

          <HeaderBtn>
            {user && user.jti ? (
              <>
                <div>
                  <IconButton
                    style={{
                      margin: "20px 24px",
                      padding: "0px 0",
                      color: scrolledDownEnough
                        ? "black"
                        : url != "/" && url != "/tournament"
                        ? "black"
                        : "white",
                    }}
                    onClick={() => sendUserNews()}
                  >
                    <NotificationsNoneOutlined></NotificationsNoneOutlined>
                    {note ? (
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "#FF3541",
                          borderRadius: "50%",
                          marginLeft: "-10px",
                          marginTop: "-10px",
                        }}
                      ></div>
                    ) : null}
                  </IconButton>
                </div>

                <div
                  className="header-user"
                  style={{
                    marginRight: width > 1200 ? null : "75px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px",
                  }}
                  onMouseLeave={() => handleShowMenu(false)}
                >
                  <div className="user-av" onClick={() => handleShowMenu(true)}>
                    <Image
                      src={"/loginback.jpg"}
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                      roundedCircle
                    />
                    <span
                      className="header-user-name"
                      style={{
                        color: scrolledDownEnough
                          ? "#2A2B30"
                          : url != "/" && url != "/tournament"
                          ? "#2A2B30"
                          : "#FFFFFF",
                        marginLeft: "6px",
                      }}
                    >
                      {user.username}
                    </span>
                    <ExpandMoreIcon
                      style={{
                        color: scrolledDownEnough
                          ? "#2A2B30"
                          : url != "/" && url != "/tournament"
                          ? "#2A2B30"
                          : "#FFFFFF",
                      }}
                    ></ExpandMoreIcon>
                  </div>
                  <div
                    className="header-user-menu"
                    style={{ display: showMenu ? "flex" : "none" }}
                    // onMouseEnter={handleMouseLeave}
                  >
                    <MenuItemLinksRouter
                      offset={-50}
                      spy={true}
                      smooth={true}
                      to="/personal"
                      duration={700}
                      className="menu-item menu-item-home"
                    >
                      个人主页
                    </MenuItemLinksRouter>
                    <MenuItemLinksRouter
                      to="/team"
                      offset={-50}
                      spy={true}
                      smooth={true}
                      duration={700}
                      className="menu-item menu-item-home"
                    >
                      团队信息
                    </MenuItemLinksRouter>
                    <MenuItemLinksRouter
                      to="/personalEdit"
                      offset={-50}
                      spy={true}
                      smooth={true}
                      duration={700}
                      className="menu-item menu-item-home"
                    >
                      编辑资料
                    </MenuItemLinksRouter>
                    <MenuItemLinksRouter
                      offset={-50}
                      spy={true}
                      smooth={true}
                      duration={700}
                      className="menu-item menu-item-home"
                      onClick={() => handleLoginOut()}
                    >
                      退出登录
                    </MenuItemLinksRouter>
                  </div>
                </div>
              </>
            ) : (
              <>
                <HeaderItem>
                  <HeaderBtnLink
                    style={{
                      color: scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                    }}
                    scrolledDownEnough={scrolledDownEnough}
                    width={width}
                    to="/register"
                  >
                    注册
                  </HeaderBtnLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderBtnLink
                    scrolledDownEnough={scrolledDownEnough}
                    width={width}
                    to="/login"
                  >
                    <Button
                      className="round-Button"
                      variant="primary"
                      style={{
                        background: scrolledDownEnough
                          ? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                          : "#FFFFFF",
                        border: "none",
                        boxShadow:
                          "0px 1px 2px 1px rgb(35 97 255 / 8%), 0px 2px 4px 1px rgb(35 97 255 / 8%), 0px 4px 8px 1px rgb(35 97 255 / 8%), 0px 8px 16px 1px rgb(35 97 255 / 8%), 0px 16px 32px 1px rgb(35 97 255 / 8%)",
                        color: scrolledDownEnough ? "#FFFFFF" : "#2A2B30",
                        fontFamily: "PingFang SC-Medium, PingFang SC",
                        letterSpacing: "3px",
                        paddingBottom: "0",
                        padding: "10px 32px",
                        fontWeight: "600",
                      }}
                      size="sm"
                    >
                      <h5
                        style={{
                          fontSize: width > 900 ? "14px" : "12px",
                          margin: "0px",
                        }}
                      >
                        登录
                      </h5>
                    </Button>
                  </HeaderBtnLink>
                </HeaderItem>
              </>
            )}
          </HeaderBtn>
        </HeaderContianer>
      </HeaderOut>
    </>
  );
};

export default HeaderCreate;
