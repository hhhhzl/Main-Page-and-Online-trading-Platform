import { React, useState, useEffect } from "react";
import {
  NavOut,
  NavbarContianer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { ViewHeadlineTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import useWindowDimensions from "../../utils/sizewindow";

const NavbarCreate = ({ toggle }) => {
  const { width, height } = useWindowDimensions();
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [show, setShow] = useState(false);
  const [box, setbox] = useState(height * 0.09);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h5 className="text-center">暂未上线，尽情期待</h5>
          </Modal.Body>
        </Modal>
      </div>

      <NavOut scrolledDownEnough={scrolledDownEnough}>
        <NavbarContianer>
          {/* <div
            className="image-icon"
            style={{ height: box, width: box, top: 0 }}
          >
            <Image src="/logo0.png" style={{ width: "110%", height: "110%" }} />
          </div>

          {scrolledDownEnough ? (
            <>
              <MobileIcon onClick={() => toggle()}>
                <ViewHeadlineTwoTone fontSize="large" />
              </MobileIcon>
            </>
          ) : (
            <>
              <MobileIcon onClick={() => toggle()}>
                <ViewHeadlineTwoTone fontSize="large" />
              </MobileIcon>
            </>
          )} */}

          <NavMenu>
            <NavItem>
<<<<<<< HEAD
            {/* <NavBtnLink scrolledDownEnough={scrolledDownEnough} width ={width} to="/register">
                    注册
                </NavBtnLink> */}
            
                
            </NavItem>
            <NavItem>
            <NavBtnLink scrolledDownEnough={scrolledDownEnough} width ={width} to="/login">
            <Button className="round-Button" variant="primary" 
    style={{backgroundColor:"#26409A",color:"white",fontFamily:"MicrosoftYaHei",letterSpacing:"3px",paddingLeft:width > 1300 ? "30px" : "15px",paddingRight:width > 1300 ? "30px" : "15px", paddingBottom:"0"}} size='sm'><h5 style={{fontSize:width > 900 ? "18px" : "15px"}}>登录/注册</h5></Button>
                </NavBtnLink>
                </NavItem>
            </NavMenu>
            <NavBtn>
=======
              <NavLinks
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-50}
                activeClass="active-block"
                to="home"
                spy={true}
                smooth={true}
                duration={700}
              >
                UFA介绍
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks scrolledDownEnough={scrolledDownEnough} width ={width} offset={-50} activeClass="active-block" to="aboutus" spy={true} smooth={true} duration={700}>论坛</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} width ={width} offset={-20} activeClass="active-block" to ="team" spy={true} smooth={true} duration={700}>赛事介绍</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} width ={width} offset={-20} activeClass="active-block" to ="review" spy={true} smooth={true} duration={700} >交易平台</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavBtnLink
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={handleShow}
                activeClass="active-block"
                to="/competition"
                spy={true}
                smooth={true}
                duration={700}
              >
                论坛
              </NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={handleShow}
                activeClass="active-block"
                to="/ideas"
                spy={true}
                smooth={true}
                duration={700}
              >
                赛事介绍
              </NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={handleShow}
                activeClass="active-block"
                to="/stocks"
                spy={true}
                smooth={true}
                duration={700}
              >
                交易平台
              </NavBtnLink>
            </NavItem>
>>>>>>> origin/main

            {/* <NavItem>
                    <NavLinks scrolledDownEnough={scrolledDownEnough} width ={width} offset={-20} activeClass="active-block" to ="contactus" spy={true} smooth={true} duration={700}>联系我们</NavLinks>
                </NavItem> */}

            <NavItem>
              <NavBtnLink
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                to="/register"
              >
                注册
              </NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                to="/login"
              >
                <Button
                  className="round-Button"
                  variant="primary"
                  style={{
                    backgroundColor: "#26409A",
                    color: "white",
                    fontFamily: "MicrosoftYaHei",
                    letterSpacing: "3px",
                    paddingLeft: width > 1300 ? "50px" : "20px",
                    paddingRight: width > 1300 ? "50px" : "20px",
                    paddingBottom: "0",
                  }}
                  size="sm"
                >
                  <h5 style={{ fontSize: width > 900 ? "18px" : "15px" }}>
                    登录
                  </h5>
                </Button>
              </NavBtnLink>
            </NavItem>
          </NavMenu>

          <NavBtn></NavBtn>
        </NavbarContianer>
      </NavOut>
    </>
  );
};

export default NavbarCreate;
