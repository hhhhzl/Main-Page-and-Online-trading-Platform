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
import { apiSymbols, apiSymbolsAllForSearch } from "../../api/trading_platform/market";
import SearchData from "../../static/SearchStock.json";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";


const { SearchBar, ClearSearchButton } = Search;

export default function PageHeader(toggle) {
  const {width, height} = useWindowDimensions();
  const [searchData, setsearcnData] = useState([])


        useEffect(() => {
          getSearchData()
        },[])

      const getSearchData = async (props) => {
        try{
          const response = await apiSymbolsAllForSearch()
          let Searchdata = response.data.data
          setsearcnData(Searchdata)
        }catch (err) {
          console.log(err)
        }
      };




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
  const history = useHistory();

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
    // TODO: 调函数清理localstorage
    history.push("/");
  };





  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectAll:true,
    hideSelectColumn: true,
    style:{background:"#E7ECFD"},
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect){
          console.log(row)
      }else{     
        
      }
    },
    
  };

  const column = [
    {
      id: 0,
      title: "账户总览",
      link: `/eplatform/summary`,
    },
    {
      id: 1,
      title: "个股交易",
      link: `/eplatform/trade`,
    },
    {
      id: 2,
      title: "市场行情",
      link: `/eplatform/market`,
    },
    {
      id: 3,
      title: "选股神器",
      link: `/eplatform/picking`,
    },
    {
      id: 4,
      title: "排行榜",
      link: `/eplatform/ranking`,
    },
    {
      id: 5,
      title: "财经洞悉",
      link: `/eplatform/invest_notes`,
    },
  ];

  const columns = [
    {

        dataField:'代码',
        text:'代码',
        sort: true,
        headerAttrs: {
          hidden: true
        },
        style: { width: "45%" },
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
            {cell > 0?
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
            </>}
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
                            url == elem.link
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
                to="/aboutus"
                duration={700}
                className="menu-item"
              >
                个人主页
              </MenuItemLinks>
              <MenuItemLinks
                to="/team"
                offset={-50}
                spy={true}
                smooth={true}
                duration={700}
                className="menu-item"
              >
                团队信息
              </MenuItemLinks>
              <MenuItemLinks
                to="/review"
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
    </>
  );
}