import { IconButton } from "@material-ui/core";
import {
  NotificationsNoneOutlined,
  ViewHeadlineTwoTone
} from "@material-ui/icons";
import { React, useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  useRouteMatch
} from "react-router-dom";
import { fetchNews } from "redux/reducers/News/newsSlice";
import { fetchUserSelf } from "redux/reducers/users/userSelf";
import { fetchUser } from "redux/reducers/users/usersSlices";
import { clearLocalStorage, setPlatformType } from "utils";
import AuthContext from "../../context/AuthContext";
import useWindowDimensions from "../../utils/sizewindow";
import "./header.css";
import {
  HeaderBtn, HeaderBtnLink, HeaderContianer, HeaderItem, HeaderMenu, HeaderOut, MenuItemLinks, MenuItemLinksRouter
} from "./HeaderElements";
import { HomeMobileIcon } from "./NavbarElements";


const HeaderCreate = ({ toggle }) => {
  let { user, logoutUser, apikey, team, getcompetionapikey} = useContext(AuthContext);
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
  const [shownotinTeam, setShowNotInTeam] = useState(false)
  const [showluntan, setshowluntan] = useState(false)

  const [loadself,setloadself] = useState(false)
  const [load1, setload1] = useState(false)
  const [load2, setload2] = useState(false)


  const history = useHistory();
  const dispatch = useDispatch()
  const [submit, setsubmit] = useState(false)
  const [submitTeam, setsubmitTeam] = useState(false)
  const { status, data } = useSelector((state) => state.userInfo);
  const { dataself, state } = useSelector((state) => state.userInfoself);
  const {news,read_or_not} = useSelector((state) => state.news)

  const sendUserNews = () => {
    history.push("/chat");
  };
  const sendUser = () => {
    if (!user){
      setPlatformType("competition");
      history.push("/competition")
    }else if (user && !apikey){
      setShowNotInTeam(true)
    }else if (user && apikey){
      setPlatformType("competition");
      history.push("/competition")
    }
  };
  // const [hover, setHover] = useState(false);

  // const handleClose = () => setShow(false);
  const handleClose = () => setShowLoginOutModal(false);
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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  useEffect(() => {
    if (shownotinTeam){
         const interval = setInterval(() => {
            history.push('/competition');
            clearInterval(interval);
            setShowNotInTeam(false)
        }, 3000);
    }
  },[shownotinTeam])

  useEffect(() =>{
    if(submit && status == "fulfilled"){
       if (url != "/personal"){
        history.push("/personal")
       }
        setsubmit(false)
    }
},[submit,status])

useEffect(() =>{
  if(submitTeam && state == "fulfilled"){
     if (url != "/personalEdit"){
      history.push("/personalEdit")
     }
      setsubmitTeam(false)
  }
},[submitTeam,state])


/////////////////////////////////////////////load apikey after create team
useEffect(() =>{
  if (localStorage.getItem("createTeam") == "true" && url == "/"){
    getcompetionapikey()
    localStorage.removeItem("createTeam")
  }
},[localStorage.getItem("createTeam"), url])



//////////////////////////////////////////////load self data
useEffect(() =>{
  if (user && !loadself){
    dispatch(fetchUserSelf(user.user_id))
    setloadself(true)
  }
},[dispatch,loadself,user])



//////////////////////////////////////////////////load news//////////////////////////////////////////////////////////
useEffect(()=>{
  if (user && localStorage.getItem("Team") && !load1){
    console.log(localStorage.getItem("Team"))
    let team = JSON.parse(localStorage.getItem("Team"))
    dispatch(fetchNews({team: team.metadata, user_id:user.user_id, reload:false}))
    setload1(true)
  }
},[dispatch, user, load1])

useEffect(()=>{
  if (user && !localStorage.getItem("Team") && !load2){
    dispatch(fetchNews({team: null, user_id:user.user_id, reload:false}))
    setload2(true)
  }
},[dispatch, user, load2])

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
        <Modal.Body className="active-500">您确定要退出吗？</Modal.Body>
        <Modal.Footer style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
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

      <Modal
        show={shownotinTeam}
        centered
        className="general-modal"
      >
        <Modal.Header className="active-500">
          您尚未报名，请先报名.....
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
      </Modal>

      <Modal
        show={showluntan}
        onHide={() => setshowluntan(false)}
      >
        <Modal.Header closeButton>
          <div className="active-500" style={{width:"100%",textAlign:"center"}}>即将上线.....</div>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
      </Modal>

      
      <HeaderOut
        style={{
          width: "100%",
          borderBottom:
            url == "/personal" ||
            url == "/team" ||
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
          {scrolledDownEnough ||
          url == "/personal" ||
          url == "/team" ||
          url == "/personalEdit" ||
          url == "/chat" ||
          url == "/team/register" ||
          url == "/team/create" ||
          url == "/team/join" ? (
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
                  : "/UFA-LOGO@2x.png"
              }
              style={{
                width: "64px",
                height: "64px",
              }}
            />
          </div>

          <div style={{ display: width < 800 ? "block" : "none" }}>
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
                    {read_or_not ? (
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
                className={url == "/" ? "active-bold" : "active-500"}
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
                  // fontWeight: url == "/" ? "bold" : "500",
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
                className={url == "/#" ? "active-bold" : "active-500"}
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
                  // fontWeight: url == "/#" ? "bold" : "500",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={() => {changeCurrent(2);setshowluntan(true)}}
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
                className={url == "/tournament" ? "active-bold" : ""}
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
                  // fontWeight: url == "/tournament" ? "bold" : "500",
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
                className={url == "/#" ? "active-bold" : "active-500"}
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
                  // fontWeight: url == "/#" ? "bold" : "500",
                }}
                scrolledDownEnough={scrolledDownEnough}
                width={width}
                offset={-20}
                onClick={() => {
                  changeCurrent(4);
                  sendUser()
                }}
                activeClass={
                  scrolledDownEnough ? "active-block-scroll" : "active-block"
                }
                // to="review"
                spy={true}
                smooth={true}
                duration={700}
                // onMouseEnter={handleShowTransaction}
                // to={"/competition"}
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
                    {read_or_not ? (
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
                  onClick={() => handleShowMenu(true)}
                  onMouseLeave={() => handleShowMenu(false)}
                  onMouseEnter={() => handleShowMenu(true)}
                >
                  <div className="user-av">
                    <Image
                      src={dataself? dataself.avatar : "/homeCutout/Group 1073.png"}
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
                      {dataself.username?.length>5 ? <>{dataself.username.slice(0,5)}...</> : dataself.username}
                    </span>
                    {/*<ExpandMoreIcon*/}
                    {/*  style={{*/}
                    {/*    color: scrolledDownEnough*/}
                    {/*      ? "#2A2B30"*/}
                    {/*      : url != "/" && url != "/tournament"*/}
                    {/*      ? "#2A2B30"*/}
                    {/*      : "#FFFFFF",*/}
                    {/*  }}*/}
                    {/*></ExpandMoreIcon>*/}
                  </div>
                  <div
                    className="header-user-menu"
                    style={{
                      display: showMenu ? "flex" : "none",
                      borderRadius: "4px",
                    }}
                    // onMouseEnter={handleMouseLeave}
                  >
                    <MenuItemLinksRouter
                     onClick={() =>{
                       dispatch(fetchUser(user.user_id))
                       setsubmit(true)  
                     }}
                      offset={-50}
                      spy={true}
                      smooth={true}
                      // to="/personal"
                      duration={700}
                      className="menu-item menu-item-home"
                    >
                      个人主页
                    </MenuItemLinksRouter>
                    {apikey? <MenuItemLinksRouter
                      to="/team"
                      offset={-50}
                      spy={true}
                      smooth={true}
                      duration={700}
                      className="menu-item menu-item-home"
                    >
                      团队信息
                    </MenuItemLinksRouter> : null}    
                    <MenuItemLinksRouter
                    onClick={() =>{
                      dispatch(fetchUserSelf(user.user_id))
                      setsubmitTeam(true)  
                    }}
                      // to="/personalEdit"
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
