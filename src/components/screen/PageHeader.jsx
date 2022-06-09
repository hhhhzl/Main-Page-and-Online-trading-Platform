import { React, useState, useEffect, useContext } from "react";
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
import { Notifications, NotificationsOffOutlined, ViewHeadlineTwoTone } from "@material-ui/icons";
import "./pageheader.css";
import useWindowDimensions from "../../utils/sizewindow";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import { SearchOutlined } from "@material-ui/icons";
import { apiSymbols, apiSymbolsAllForSearch } from "../../api/trading_platform/market";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import AuthContext from "context/AuthContext";
import { NotificationsNoneOutlined } from "@material-ui/icons";
import { MenuItemLinksRouter } from "components/MainPage/HeaderElements";
import { IconButton } from "@material-ui/core";
import { clearLocalStorage } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { updateStock } from "redux/reducers/Stock/stockReducer";



const { SearchBar, ClearSearchButton } = Search;

export default function PageHeader({searchData, platformType, showrankingOnly}) {
  let { user, logoutUser, apikey} = useContext(AuthContext);
  const {width, height} = useWindowDimensions();
  const [note, setnote] = useState(null)
  const dispatch = useDispatch()
  const [headermenu,setheadermenu] =  useState(
    platformType == "eplatform"? [{
    id: 0,
    title: "账户总览",
    link: `/${platformType}/summary`,
  },
  {
    id: 1,
    title: "个股交易",
    link: `/${platformType}/trade`,
  },
  {
    id: 2,
    title: "市场行情",
    link: `/${platformType}/market`,
  },
  {
    id: 3,
    title: "选股器",
    link: `/${platformType}/picking`,
  },
  {
    id: 4,
    title: "排行榜",
    link: `/${platformType}/ranking`,
  },
  ]

  :

  platformType == "competition" && showrankingOnly != true?
  [{
    id: 0,
    title: "账户总览",
    link: `/${platformType}/summary`,
  },
  {
    id: 1,
    title: "个股交易",
    link: `/${platformType}/trade`,
  },
  {
    id: 2,
    title: "市场行情",
    link: `/${platformType}/market`,
  },
  {
    id: 3,
    title: "选股器",
    link: `/${platformType}/picking`,
  },
  {
    id: 4,
    title: "排行榜",
    link: `/${platformType}/ranking`,
  },
  {
    id: 5,
    title: "财经洞悉",
    link: `/${platformType}/invest_notes`,
  },

  ] : 
  
  [
  {
    id: 4,
    title: "排行榜",
    link: `/${platformType}/ranking`,
  },
  ]
  )



  const [showMenu, setHhowMenu] = useState(false);
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);

  const [scrollswitch, setScrollswitch] = useState(false);
  const [linkedInstitution, setLinkedInstitution] = useState("");
  const handleSearch = (propes) => {
    propes.onSearch(linkedInstitution.value);
  };
  const { username } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  const sendUserNews = () =>{
    history.push("/chat")
  }

  const searchSwitch = () => {
    if (linkedInstitution.value != "") {
      setScrollswitch(true);
    } else {
      setScrollswitch(false);
    }
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

  const LogUserOut = () =>{
    history.push("/");
    logoutUser()
    clearLocalStorage()
  }

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectAll:true,
    hideSelectColumn: true,
    style:{background:"#E7ECFD"},
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect){
          dispatch(updateStock(row.代码))
          setScrollswitch(false);
          history.push(`/${platformType}/trade`)
      }else{     
        
      }
    },
    
  };

  const columns = [
    {
        dataField:'代码',
        text:'代码',
        sort: true,
        headerAttrs: {
          hidden: true
        },
        style: { width: "40%" },
        formatter: (cell) => {
          return (
            <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#2A2B30",
                lineHeight: "24px",
              }}
            >
              {cell}
            </div>
          )
      }
    },
    {
        dataField: '名称',
        text: '名称',
        sort: true,
        headerAttrs: {
            hidden: true
          },
        formatter: (cell) => {
          return (
            <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#2A2B30",
                lineHeight: "24px",
              }}
            >
              {cell}
            </div>
          )
      }
    },
    {
      dataField: '涨跌幅',
      text: '涨跌幅',
      // sort: true,
      headerAttrs: {
          hidden: true
        },
        formatter: (cell) => {
          return (
            <>
            {cell >= 0? 
             <>
             <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#FF3541",
                lineHeight: "24px",
              }}
            > +{cell}%</div>

            </> : <>
            <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#42E083",
                lineHeight: "24px",
              }}
            > {cell}%</div>
            </>
            }
            </>
          )
      }
  },
]


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
            justifyContent: width > 1200 ? "space-between" : "space-around",
          }}
        >


        <div style ={{display:"flex", justifyContent:"left"}}>
          <div onClick={() => {clearLocalStorage();history.push("/")}}>
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
                  marginRight:"10%",
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor:"white",
                }}
              >
                {headermenu.map((elem) => {
                  return (
                   
                      <Button
                        style={{
                          backgroundColor: "white",
                          width: "86px",
                          height: "100%",
                          marginRight:"10px",
                          textAlign: "center",
                          paddingTop: "10px",
                          fontSize: "14px",
                          fontFamily:
                            "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontWeight: elem.title == "财经洞悉" || url == elem.link? "bold" : "400",
                          color: elem.title == "财经洞悉" || url == elem.link ? "#1442ED" : "#2A2B30",
                          lineHeight: "24px",
                          borderRadius: "0",
                          borderLeftColor: "white",
                          borderRightColor: "white",
                          borderTopColor: "white",
                          borderBottom:
                            url == elem.link
                              ? "3px solid #1442ED"
                              : "white",
                        }}
                        onClick={() => history.push(elem.link)}
                      >
                        <div>{elem.title}</div>
                      </Button>
                 
                  );
                })}
              </div>
            </>
          ) : null}
          </div>




        <div style={{display:"flex",justifyContent:"right"}}>
          <div
            style={{
              width: "240px",
              marginLeft: "20px",
            }}
          >
            {showrankingOnly? 
            null 
            : 
            <>
            <Form>
              <ToolkitProvider
                keyField="代码"
                data={searchData? searchData : null}
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
                        placeholder="代码/名称"
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
                          marginLeft: "0%",
                          zIndex: 999,
                          width: "300px",
                          background: "white",
                          boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",

                        }}
                      >
                        <BootstrapTable
                          {...props.baseProps}
                          hover={true}
                          condensed={true}
                          sort={{ dataField: "label", order: "asc" }}
                          classes="custom-row-class"
                          selectRow={selectRow}
                        />
                      </div>
                    </Collapse>
                  </div>
                )}
              </ToolkitProvider>
            </Form>

            </> }
            
          </div>
          <div>
            <IconButton style={{margin:"20px 24px", padding:"0px 0"}} onClick={() => sendUserNews()}>
                <NotificationsNoneOutlined ></NotificationsNoneOutlined >
                {true? (<div style={{width:"7px",height:"7px",backgroundColor:"#FF3541", borderRadius:"50%", marginLeft:"-10px",marginTop:"-10px"}}></div>)
                : null
                }
                
            </IconButton>
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
              <span className="header-user-name">{user.username? user.username.length > 8? <>{user.username.slice(0,5)}...</> : user.username : "用户名"}</span>
              <ExpandMoreIcon></ExpandMoreIcon>
            </div>
            <div
              className="header-user-menu"
              style={{ display: showMenu ? "flex" : "none" }}
              // onMouseEnter={handleMouseLeave}
              onMouseLeave={() => handleShowMenu(!showMenu)}
            >
              <MenuItemLinksRouter
                offset={-50}
                spy={true}
                smooth={true}
                to="/personal"
                duration={700}
                className="menu-item"
              >
                个人主页
              </MenuItemLinksRouter>
              {platformType == "competition"? 
              <>
              <MenuItemLinksRouter
                to="/team"
                offset={-50}
                spy={true}
                smooth={true}
                duration={700}
                className="menu-item"
              >
                团队信息
              </MenuItemLinksRouter>
              </>
              :null
              }
              
              <MenuItemLinksRouter
                to="/personalEdit"
                offset={-50}
                spy={true}
                smooth={true}
                duration={700}
                className="menu-item"
              >
                编辑资料
              </MenuItemLinksRouter>
              <MenuItemLinksRouter
                offset={-50}
                spy={true}
                smooth={true}
                duration={700}
                className="menu-item"
                onClick={() => {clearLocalStorage();history.push("/home")}}
              >
                回到主页
              </MenuItemLinksRouter>
              <MenuItemLinksRouter
                offset={-50}
                spy={true}
                smooth={true}
                duration={700}
                className="menu-item"
                onClick={handleLoginOut}
              >
                退出登录
              </MenuItemLinksRouter>
            </div>
          </div>
          </div>

          <MobileIcon>
            <ViewHeadlineTwoTone style={{ color: "black" }} fontSize="large" />
          </MobileIcon>
        </div>
        {width > 1200 ? (
          <>
            <div style={{ width: "auto", maxWidth: "18.75%" }}></div>
          </>
        ) : null}
      </div>
    </>
  );
}