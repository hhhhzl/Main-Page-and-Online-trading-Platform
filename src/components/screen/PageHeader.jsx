import { React, useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Modal,
} from "react-bootstrap";
import { MenuItemLinks } from "../MainPage/HeaderElements";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { MobileIcon } from "../MainPage/NavbarElements";
import { ViewHeadlineTwoTone } from "@material-ui/icons";
import "./pageheader.css";

export default function PageHeader(toggle) {
  const [selectKey, setSelectKey] = useState(1);
  const [showMenu, setHhowMenu] = useState(false);
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);
  const handleSelect = (eventKey) => {
    setSelectKey(eventKey);
  };
  const handleShowMenu = (showMenu) => {
    setHhowMenu(showMenu);
  };

  const handleLoginOut = () => {
    setShowLoginOutModal(true);
  };

  const handleClose = () => {
    setShowLoginOutModal(false);
  };
  return (
    <>
      <Modal show={showLoginOutModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>您确定要退出吗？</Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn modal-btn-cancel" variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button className="modal-btn modal-btn-submit" variant="primary" onClick={handleClose}>
            确认
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar bg="#FFFFFF" expand="sm" sticky="top" className="header-nav">
        <Container fluid className="header-container">
          <Navbar.Brand href="#">
            <Image
              src={"/homeCutout/UFA-LOGO-RED.png"}
              style={{ width: "64px", height: "64px" }}
            />
          </Navbar.Brand>

          <MobileIcon className="header-mobile" onClick={() => toggle()}>
            <ViewHeadlineTwoTone fontSize="large" />
          </MobileIcon>
          {/* <Navbar.Toggle aria-controls="navbarScroll" style={{marginLeft: "20px"}}/> */}
          <Navbar id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
              activeKey={selectKey}
              onSelect={handleSelect}
            >
              <Nav.Item className={selectKey == 1 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="1" href="#action1" className="header-link">
                  账户总览
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={selectKey == 2 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="2" href="#action2" className="header-link">
                  个股交易
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={selectKey == 3 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="3" href="#action3" className="header-link">
                  市场行情
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={selectKey == 4 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="4" href="#action4" className="header-link">
                  选股器
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={selectKey == 5 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="5" href="#action5" className="header-link">
                  排行榜
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={selectKey == 6 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="6" href="#action6" className="header-link">
                  财经洞悉
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="代码/名称/拼音"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <div className="header-user">
              <div
                className="user-av"
                onClick={() => handleShowMenu(!showMenu)}
              >
                <Image
                  src={"/homeCutout/UFA-LOGO-RED.png"}
                  style={{ width: "38px", height: "38px" }}
                />
                <span className="header-user-name">用户名</span>
                <ExpandMoreIcon></ExpandMoreIcon>
              </div>
              <div
                className="header-user-menu"
                style={{ display: showMenu ? "flex" : "none" }}
                // onMouseEnter={handleMouseLeave}
                onMouseLeave={() => handleShowMenu(!showMenu)}
              >
                <MenuItemLinks
                  offset={-50}
                  spy={true}
                  smooth={true}
                  to="aboutus"
                  duration={700}
                  className="menu-item"
                >
                  个人主页
                </MenuItemLinks>
                <MenuItemLinks
                  to="team"
                  offset={-50}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="menu-item"
                >
                  团队信息
                </MenuItemLinks>
                <MenuItemLinks
                  to="review"
                  offset={-50}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="menu-item"
                >
                  编辑资料
                </MenuItemLinks>
                <MenuItemLinks
                  offset={-50}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="menu-item"
                  onClick={handleLoginOut}
                >
                  退出登录
                </MenuItemLinks>
              </div>
            </div>
          </Navbar>
        </Container>

        <MobileIcon onClick={() => toggle()}>
          <ViewHeadlineTwoTone style={{ color: "black" }} fontSize="large" />
        </MobileIcon>
      </Navbar>
    </>
  );
}
