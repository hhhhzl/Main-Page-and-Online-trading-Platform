import { React, useState, useEffect, useContext } from "react";
import { CloseOutlined, ExpandLess, ExpandMore } from "@material-ui/icons";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR, useRouteMatch } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router";
import AuthContext from "../../../context/AuthContext";
import "../../MainPage/aside.css";
import { clearLocalStorage, setPlatformType } from "utils";
import useWindowDimensions from "../../../utils/sizewindow";

const ASide = ({ isOpen, toggle }) => {
  const { width, height } = useWindowDimensions();
  const { url } = useRouteMatch();
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

  useEffect(() => {
    if (width > 800) {
      toggle();
    }
  });

  return (
    <>
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
          <div className="sidebar-wrapper" style={{
            height:"420px",
          }}>
            <ul className="ul-wrapper" style={{marginBottom:"100px"}}>
              <LinkR
                className="home-side-link"
                scrolledDownEnough={scrolledDownEnough}
                to="/#"
                spy={true}
                smooth={true}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                账户总览
              </LinkR>

              <LinkR
                className="home-side-link"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="/#"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                个股交易
              </LinkR>

              <LinkR
                className="home-side-link"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="/#"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                市场行情
              </LinkR>

              <LinkR
                className="home-side-link"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="/#"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                选股器
              </LinkR>
              <LinkR
                className="home-side-link"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="/#"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                排行榜
              </LinkR>
              <LinkR
                className="home-side-link"
                scrolledDownEnough={scrolledDownEnough}
                offset={-20}
                to="/#"
                spy={true}
                smooth={true}
                onClick={toggle}
              >
                财经洞悉
              </LinkR>
            </ul>
          </div>
        </div>

        <div className="sidebar-footer">
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
              to="/#"
              spy={true}
              smooth={true}
              className="home-side-link-current"
              scrolledDownEnough={scrolledDownEnough}
              offset={-20}
            >
              回到主页
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
                src={"https://test1-1311825037.cos.ap-nanjing.myqcloud.com/public/register_page_banner.png"}
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
        </div>
      </aside>
    </>
  );
};

export default ASide;
