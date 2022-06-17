import { CloseOutlined, ExpandLess, ExpandMore } from "@material-ui/icons";
import { React, useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link as LinkR, useRouteMatch } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { fetchUserSelf } from "redux/reducers/users/userSelf";
import { fetchUser } from "redux/reducers/users/usersSlices";
import { clearLocalStorage, setPlatformType } from "utils";
import AuthContext from "../../context/AuthContext";
import useWindowDimensions from "../../utils/sizewindow";
import "./aside.css";
import { HeaderBtnLink } from "./HeaderElements";

const ASide = ({ isOpen, toggle }) => {
  const { width, height } = useWindowDimensions();
  let { user, logoutUser, apikey, team, getcompetionapikey} = useContext(AuthContext);
  const { url } = useRouteMatch();
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [showFooterContent, setShowFooterContent] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);
  const [shownotinTeam, setShowNotInTeam] = useState(false)
  const [showluntan, setshowluntan] = useState(false)

  const handleClose = () => setShowLoginOutModal(false);
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

  const dispatch = useDispatch()
  const [submit, setsubmit] = useState(false)
  const [submitTeam, setsubmitTeam] = useState(false)
  const { status, data } = useSelector((state) => state.userInfo);
  const { dataself, state } = useSelector((state) => state.userInfoself);
  // const {news,read_or_not} = useSelector((state) => state.news)

  const [loadself,setloadself] = useState(false)
  const [load1, setload1] = useState(false)
  const [load2, setload2] = useState(false)

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
  if(submitTeam && status == "fulfilled"){
     if (url != "/personalEdit"){
      history.push("/personalEdit")
     }
      setsubmitTeam(false)
  }
},[submitTeam,status])

//////////////////////////////////////////////load self data
useEffect(() =>{
  if (user && !loadself){
    dispatch(fetchUserSelf(user.user_id))
    setloadself(true)
  }
},[dispatch,loadself,user])



//////////////////////////////////////////////////load news//////////////////////////////////////////////////////////
// useEffect(()=>{
//   if (user && team && !load1){
//     console.log(user)
//     dispatch(fetchNews({team: team?.metadata, user_id:user.user_id}))
//     setload1(true)
//   }
// },[dispatch, team, user, load1])

// useEffect(()=>{
//   if (user && !team && !load2){
//     dispatch(fetchNews({team: null, user_id:user.user_id}))
//     setload2(true)
//   }
// },[dispatch, team, user, load2])


  useEffect(() => {
    if(width > 800){
      toggle()
    }
  })

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
      >
        <Modal.Header>
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
              <div className="sidebar-wrapper" style={{height:showFooterContent? height-400 : height -150}}>
                <ul className="ul-wrapper">
                  {url == "/" ? (
                    <>
                      <LinkS
                        className="home-side-link"
                        scrolledDownEnough={scrolledDownEnough}
                        to="home"
                        spy={true}
                        smooth={true}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
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
                    </>
                  ) : (
                    <>
                      <LinkR
                        className="home-side-link"
                        scrolledDownEnough={scrolledDownEnough}
                        to="home"
                        spy={true}
                        smooth={true}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        UFA介绍
                      </LinkR>
                    </>
                  )}

                  <LinkR
                  onClick={() => setshowluntan(true)}
                    className="home-side-link"
                    scrolledDownEnough={scrolledDownEnough}
                    offset={-20}
                    // to="/#"
                    spy={true}
                    smooth={true}
                    // onClick={toggle}
                  >
                    论坛
                  </LinkR>

                  <LinkR
                    className="home-side-link"
                    scrolledDownEnough={scrolledDownEnough}
                    offset={-20}
                    to="/tournament"
                    spy={true}
                    smooth={true}
                    onClick={toggle}
                  >
                    赛事介绍
                  </LinkR>

                  

                  <LinkR
                  onClick={() => sendUser()}
                    className="home-side-link"
                    scrolledDownEnough={scrolledDownEnough}
                    offset={-20}
                    // to="/competition"
                    spy={true}
                    smooth={true}
                  >
                    赛事账户
                  </LinkR>
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
                    onClick={() =>{
                      dispatch(fetchUser(user.user_id))
                      setsubmit(true)  
                    }}
                      spy={true}
                      smooth={true}
                      // to="/personal"
                      className="home-side-link-current"
                      scrolledDownEnough={scrolledDownEnough}
                      offset={-20}
                    >
                      个人主页
                    </LinkR>
                    {apikey? <LinkR
                     
                     to="/team"
                     spy={true}
                     smooth={true}
                     className="home-side-link-current"
                     scrolledDownEnough={scrolledDownEnough}
                     offset={-20}
                   >
                     团队信息
                   </LinkR> : null}   
                    <LinkR
                    onClick={() => {
                      dispatch(fetchUser(user.user_id))
                      setsubmitTeam(true)}}
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
                        src={dataself? dataself.avatar : "/homeCutout/Group 1073.png"}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        roundedCircle
                      />
                      <span className="sidebar-footer-username">
                      {dataself.username?.length>5 ? <>{dataself.username.slice(0,5)}...</> : dataself.username}
                      </span>
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
                  <div
                    style={{ paddingBottom: "22px" }}
                    className="asidebar-btn"
                  >
                    <HeaderBtnLink
                      style={{
                        color: "#2A2B30",
                        padding: "0px",
                        fontSize: "16px",
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
                        fontSize: "16px",
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
    </>
  );
};

export default ASide;
