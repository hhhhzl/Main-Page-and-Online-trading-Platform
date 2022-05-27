import { useContext, React, useState, useEffect } from "react";

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
import { ViewHeadlineTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import useWindowDimensions from "../../utils/sizewindow";
import Image from "react-bootstrap/Image";
import "./header.css";
import { MobileIcon } from "./NavbarElements";
import { useRouteMatch } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AuthContext from "../../context/AuthContext";
import { MenuItemLinksRouter } from "./HeaderElements";
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
  const history= useHistory()

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
      <HeaderOut
        style={{ width: width }}
        scrolledDownEnough={scrolledDownEnough}
        // onMouseOver={handleMouseOver}
        // onMouseLeave={handleMouseLeave}
      >
        <HeaderContianer>
          <div
            className="image-icon"
            style={{ height: "64px", width: "64px", top: 0 }}
            onClick={() => toHome()}
          >
            <Image
              src={
                scrolledDownEnough
                  ? "/homeCutout/UFA-LOGO-RED@2x.png"
                  : "/UFA-LOGO.png"
              }
              style={{ width: "64px", height: "64px" }}
            />
          </div>
          {scrolledDownEnough ? (
            <>
              <MobileIcon onClick={() => toggle()}>
                <ViewHeadlineTwoTone
                  style={{ color: "black" }}
                  fontSize="large"
                />
              </MobileIcon>
            </>
          ) : (
            <>
              <MobileIcon onClick={() => toggle()}>
                <ViewHeadlineTwoTone fontSize="large" />
              </MobileIcon>
            </>
          )}

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
                      : url != "/" && !scrolledDownEnough
                      ? "#FFFFFF"
                      : scrolledDownEnough && url == "/"
                      ? "#1442ED"
                      : "#FFFFFF",
                }}
                scrolledDownEnough={scrolledDownEnough}
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
                style={{ display: showUFA && current == 1 ? "flex" : "none" }}
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
                  offset={-50}
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
                      : "#FFFFFF",
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
                      : "#FFFFFF",
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
                      : "#FFFFFF",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={() => changeCurrent(4)}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                // to="review"
                spy={true}
                smooth={true}
                duration={700}
                onMouseEnter={handleShowTransaction}
              >
                交易平台
              </HeaderBtnLink>
              <div
                className="header-menu"
                style={{ display: showTransaction ? "flex" : "none" }}
                // onMouseEnter={handleMouseLeave}
                onMouseLeave={handleCloseTransaction}
              >
                <MenuItemLinksRouter to="/eplatform" className="menu-item">
                  赛事账户
                </MenuItemLinksRouter>
                {/* <MenuItemLinksRouter to='/eplatform' className="menu-item">个人账户</MenuItemLinksRouter> */}
              </div>
            </HeaderItem>
          </HeaderMenu>

          <HeaderBtn>
            {user && user.jti ? (
              <>
                <div
                  style={{ marginRight: "34px", position: "relative" }}
                  onClick={() => jumpNewPage()}
                >
                  <div className="notice-dot"></div>
                  <Image
                    src={
                      scrolledDownEnough
                        ? "/homeCutout/Group 1061@2x.png"
                        : "/homeCutout/bell_white.png"
                    }
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
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
                  <div
                    className="user-av"
                    onClick={() => handleShowMenu(true)}
                  >
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
                        color: scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                        marginLeft: "6px",
                      }}
                    >
                      {user.username}
                    </span>
                    <ExpandMoreIcon
                      style={{
                        color: scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
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
                        to="/aboutus"
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
                        to="/review"
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
                        onClick={handleLoginOut}
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
