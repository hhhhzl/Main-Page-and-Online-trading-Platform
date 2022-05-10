import { React, useState, useEffect } from "react";

import {
  HeaderOut,
  HeaderContianer,
  HeaderMenu,
  HeaderItem,
  HeaderBtnLink,
  HeaderLinks,
  HeaderBtn,
} from "./HeaderElements";
import { ViewHeadlineTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import useWindowDimensions from "../../utils/sizewindow";
import Image from "react-bootstrap/Image";

const HeaderCreate = ({ toggle }) => {
  const { width, height } = useWindowDimensions();
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [show, setShow] = useState(false);
  const [box, setbox] = useState(height * 0.09);

  const [hover, setHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMouseOver = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = 85 < bodyScrollTop ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h5 className="text-center">暂未上线，尽情期待</h5>
          </Modal.Body>
        </Modal>
      </div>
      <HeaderOut
        scrolledDownEnough={scrolledDownEnough}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderContianer>
          <div
            className="image-icon"
            style={{ height: "64px", width: "64px", top: 0 }}
          >
            <Image
              src={
                scrolledDownEnough || hover
                  ? "/homeCutout/UFA-LOGO-RED.png"
                  : "/UFA-LOGO.png"
              }
              style={{ width: "64px", height: "64px" }}
            />
          </div>
          <HeaderMenu>
            <HeaderItem>
              <HeaderLinks
                style={{
                  color: hover || scrolledDownEnough ? "#1442ED" : "#FFFFFF",
                  borderBottom:
                    hover || scrolledDownEnough
                      ? "3px solid #1442ED"
                      : "3px solid #FFFFFF",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-50}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                to="home"
                spy={true}
                smooth={true}
                duration={700}
              >
                UFA介绍
              </HeaderLinks>
            </HeaderItem>

            <HeaderItem>
              <HeaderLinks
                style={{
                  color: hover || scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                // onClick={handleShow}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                // to="aboutus"
                spy={true}
                smooth={true}
                duration={700}
              >
                论坛
              </HeaderLinks>
            </HeaderItem>
            <HeaderItem>
              <HeaderLinks
                style={{
                  color: hover || scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                // onClick={handleShow}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                // to="team"
                spy={true}
                smooth={true}
                duration={700}
              >
                赛事介绍
              </HeaderLinks>
            </HeaderItem>
            <HeaderItem>
              <HeaderLinks
                style={{
                  color: hover || scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                // onClick={handleShow}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                // to="review"
                spy={true}
                smooth={true}
                duration={700}
              >
                交易平台
              </HeaderLinks>
            </HeaderItem>
          </HeaderMenu>

          <HeaderBtn>
            <HeaderItem>
              <HeaderBtnLink
                style={{
                  color: hover || scrolledDownEnough ? "#2A2B30" : "#FFFFFF",
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
                    background:
                      hover || scrolledDownEnough
                        ? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                        : "#FFFFFF",
                    border: "none",
                    color: hover || scrolledDownEnough ? "#FFFFFF" : "#2A2B30",
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
                    登陆
                  </h5>
                </Button>
              </HeaderBtnLink>
            </HeaderItem>
          </HeaderBtn>
        </HeaderContianer>
      </HeaderOut>
    </>
  );
};

export default HeaderCreate;
