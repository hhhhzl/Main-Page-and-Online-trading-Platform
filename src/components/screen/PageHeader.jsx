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
  InputGroup,
  Collapse,
} from "react-bootstrap";
import { MenuItemLinks } from "../MainPage/HeaderElements";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { MobileIcon } from "../MainPage/NavbarElements";
import { ViewHeadlineTwoTone } from "@material-ui/icons";
import "./pageheader.css";
import useWindowDimensions from "../../utils/sizewindow";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import { SearchOutlined } from "@material-ui/icons";
import SearchData from "../../static/SearchStock.json";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const { SearchBar, ClearSearchButton } = Search;

export default function PageHeader(toggle) {
  const { width, height } = useWindowDimensions();
  const [selectKey, setSelectKey] = useState(0);
  const [showMenu, setHhowMenu] = useState(false);
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);

  const [scrollswitch, setScrollswitch] = useState(false);
  const [linkedInstitution, setLinkedInstitution] = useState("");
  const handleSearch = (propes) => {
    propes.onSearch(linkedInstitution.value);
  };
  const { username } = useParams();
  const { url } = useRouteMatch();

  const searchSwitch = () => {
    if (linkedInstitution.value != "") {
      setScrollswitch(true);
    } else {
      setScrollswitch(false);
    }
  };
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

  const column = [
    {
      id: 0,
      title: "账户总览",
      link: `${url}`,
    },
    {
      id: 1,
      title: "个股交易",
      link: `/trade`,
    },
    {
      id: 2,
      title: "市场行情",
      link: `/market`,
    },
    {
      id: 3,
      title: "选股神器",
      link: `/screener`,
    },
    {
      id: 4,
      title: "排行榜",
      link: `/ranking`,
    },
    {
      id: 5,
      title: "财经洞悉",
      link: `/invest_notes`,
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true,
    },
    {
      dataField: "name",
      text: "机构(升/降)",
      sort: true,
      headerAttrs: {
        hidden: true,
      },
    },
  ];

  useEffect(() => {
    setSelectKey(selectKey);
  }, [selectKey]);

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
            onClick={handleClose}
          >
            确认
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          marginTop: 0,
          width: "100%",
          MaxHeight: "64px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #E5E8EE",
        }}
      >
        {width > 1200 ? (
          <>
            <div style={{ width: "auto", maxWidth: "18.75%" }}></div>
          </>
        ) : null}

        <div
          style={{
            width: width > 1200 ? "1200px" : "100%",
            minWidth: "fix-content",
            display: "flex",
            justifyContent: width > 1200 ? "left" : "space-around",
          }}
        >
          <div>
            <Image
              src={"/homeCutout/UFA-LOGO-RED.png"}
              style={{ width: "64px", height: "64px" }}
            />
          </div>

          {width > 1200 ? (
            <>
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                {column.map((elem) => {
                  return (
                    <Link to={elem.link}>
                      <Button
                        style={{
                          backgroundColor: "white",
                          width: "96px",
                          height: "100%",
                          textAlign: "center",
                          paddingTop: "20px",
                          fontSize: "14px",
                          fontFamily:
                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontWeight: "400",
                          color: "#2A2B30",
                          lineHeight: "24px",
                          borderRadius: "0",
                          borderLeftColor: "white",
                          borderRightColor: "white",
                          borderTopColor: "white",
                          borderBottom:
                            selectKey == elem.id
                              ? "3px solid #1442ED"
                              : "white",
                        }}
                        onClick={() => setSelectKey(elem.id)}
                      >
                        <div>{elem.title}</div>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}
          <div
            style={{
              width: "240px",
              marginLeft: "15%",
            }}
          >
            <Form>
              <ToolkitProvider
                keyField="id"
                data={SearchData}
                columns={columns}
                search
              >
                {(props) => (
                  <div className="expanded-container">
                    <InputGroup controlId="formBasicPassword">
                      <Button
                        disable
                        style={{
                          height: "36px",
                          background: "#F5F6F8",
                          marginTop: "14px",
                          borderRadius: "4px 0px 0px 4px",
                          opacity: 1,
                          borderWidth: "0px",
                          color: "#2A2B30",
                        }}
                      >
                        <SearchOutlined />
                      </Button>
                      <Form.Control
                        style={{
                          height: "36px",
                          background: "#F5F6F8",
                          marginTop: "14px",
                          borderRadius: "0px 4px 4px 0px",
                          opacity: 1,
                          borderWidth: "0px",
                        }}
                        type="text"
                        placeholder="代码/名称/拼音"
                        ref={(n) => setLinkedInstitution(n)}
                        onChange={() => {
                          handleSearch({ ...props.searchProps });
                          searchSwitch();
                        }}
                      />
                    </InputGroup>
                    <Collapse in={scrollswitch}>
                      <div
                        className="scroll"
                        style={{
                          position: "absolute",
                          marginLeft: "3%",
                          zIndex: 999,
                          width: "300px",
                          background: "white",
                        }}
                      >
                        <BootstrapTable
                          {...props.baseProps}
                          hover={true}
                          condensed={true}
                          sort={{ dataField: "label", order: "asc" }}
                          classes="custom-row-class"
                        />
                      </div>
                    </Collapse>
                  </div>
                )}
              </ToolkitProvider>
            </Form>
          </div>

          <div
            className="header-user"
            style={{ marginRight: width > 1200 ? null : "75px" }}
          >
            <div className="user-av" onClick={() => handleShowMenu(!showMenu)}>
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

          <MobileIcon onClick={() => toggle()}>
            <ViewHeadlineTwoTone style={{ color: "black" }} fontSize="large" />
          </MobileIcon>
        </div>
        {width > 1200 ? (
          <>
            <div style={{ width: "auto", maxWidth: "18.75%" }}></div>
          </>
        ) : null}
      </div>

      {/* <Navbar bg="#FFFFFF" expand="sm" sticky="top" className="header-nav">
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
          <Navbar.Toggle aria-controls="navbarScroll" style={{marginLeft: "20px"}}/>
          <Navbar id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
              activeKey={selectKey}
              onSelect={handleSelect}
            >
              <Nav.Item className={selectKey == 1 ? "border-bottom1" : ""}>
                <Nav.Link eventKey="1" href="./user2" className="header-link">
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
      </Navbar> */}
    </>
  );
}
