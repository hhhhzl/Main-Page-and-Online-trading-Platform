import { React, useState, useEffect, useContext } from "react";
import { CloseOutlined, ExpandLess, ExpandMore } from "@material-ui/icons";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import "./aside.css";
import { MenuItemLinksRouter, HeaderBtnLink } from "./HeaderElements";
import { clearLocalStorage, setPlatformType } from "utils";

const ASide = ({ isOpen, toggle }) => {
  let { user, logoutUser } = useContext(AuthContext);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [showFooterContent, setShowFooterContent] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowContent = () => {
    setShowContent(!showContent);
    setShowFooterContent(false);
  };

  const handleShowFooterContent = () => {
    setShowFooterContent(!showFooterContent);
    setShowContent(true);
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
      const scrolledDownEnough = bodyScrollTop > 85 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  return (
    <aside
      className="aside"
      style={{
        height: isOpen ? "100%" : "0",
        backgroundColor: scrolledDownEnough ? "white" : "white",
        top: "0px",
        borderBottom: scrolledDownEnough ? "2px solid #cccccc" : "none",
      }}
      scrolledDownEnough={scrolledDownEnough}
      isOpen={isOpen}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="home-icon" onClick={toggle}>
          <CloseOutlined />
        </div>
        <div className="sidebar-wrapper">
          <ul className="ul-wrapper">
            <LinkS
              className="home-side-link"
              scrolledDownEnough={scrolledDownEnough}
              to="home"
              spy={true}
              smooth={true}
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => handleShowContent()}
            >
              UFA介绍
              <span>
                {showContent ? (
                  <ExpandMore></ExpandMore>
                ) : (
                  <ExpandLess></ExpandLess>
                )}
              </span>
            </LinkS>
            <div
              style={{
                display: showContent ? "none" : "flex",
                flexDirection: "column",
              }}
            >
              <LinkS
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="aboutus"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                <span>协会介绍</span>
              </LinkS>
              <LinkS
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="team"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                团队介绍
              </LinkS>
              <LinkS
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="review"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                往期回顾
              </LinkS>

              <LinkS
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="contactus"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                联系我们
              </LinkS>
            </div>

            <LinkS
              className="home-side-link"
              scrolledDownEnough={scrolledDownEnough}
              offset={-20}
              to="/eplatform/:admin"
              spy={true}
              smooth={true}
              onClick={toggle}
            >
              赛事介绍
            </LinkS>

            <LinkS
              className="home-side-link"
              scrolledDownEnough={scrolledDownEnough}
              offset={-20}
              to="/eplatform/:admin"
              spy={true}
              smooth={true}
              onClick={toggle}
            >
              论坛
            </LinkS>

            <LinkS
              className="home-side-link"
              scrolledDownEnough={scrolledDownEnough}
              offset={-20}
              to="/eplatform/:admin"
              spy={true}
              smooth={true}
              onClick={toggle}
            >
              交易平台
            </LinkS>
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        {user && user.jti ? (
          <>
            <div
              style={{
                display: showFooterContent ? "flex" : "none",
                flexDirection: "column",
              }}
            >
              <LinkR
                spy={true}
                smooth={true}
                to="/personal"
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
              >
                个人主页
              </LinkR>
              <LinkR
                to="/team"
                spy={true}
                smooth={true}
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
              >
                团队信息
              </LinkR>
              <LinkR
                to="/personalEdit"
                spy={true}
                smooth={true}
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
              >
                编辑资料
              </LinkR>
              <LinkR
                spy={true}
                smooth={true}
                className="home-side-link-current"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                onClick={() => handleLoginOut()}
              >
                退出登录
              </LinkR>
            </div>

            <div
              className="sidebar-footer-content"
              onClick={() => handleShowFooterContent()}
            >
              <div>
                <Image
                  src={"/loginback.jpg"}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                  roundedCircle
                />
                <span className="sidebar-footer-username">{user.username}</span>
              </div>
              <span>
                {showFooterContent ? (
                  <ExpandMore></ExpandMore>
                ) : (
                  <ExpandLess></ExpandLess>
                )}
              </span>
            </div>
          </>
        ) : (
          <>
            <div style={{ paddingBottom: "30px" }} className="asidebar-btn">
              <HeaderBtnLink
                style={{
                  color: "#2A2B30",
                  padding: "0px",
									fontSize:"16px",
                }}
                to="/login"
              >
                登录
              </HeaderBtnLink>
              <span>/</span>
              <HeaderBtnLink
                style={{
                  color: "#2A2B30",
                  padding: "0px",
									fontSize:"16px",
                }}
                to="/register"
              >
                注册
              </HeaderBtnLink>
              {/* <span className="small-screen-title" style={{color:"#2A2B30",fontSize:"18px"}}>登录/注册</span> */}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default ASide;
