import React, {useEffect, useState, useContext} from "react";
// import "./footer.css";
import { Image, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./sign.css";
import useWindowDimensions from "../../utils/sizewindow";
import AuthContext from "context/AuthContext";
import { useHistory } from "react-router";

export default function Sign() {
  const { width, height } = useWindowDimensions();
  const [bodyscrollrdTop, setbodyscrollTop] = useState(0);
  let { user, logoutUser } = useContext(AuthContext);
  const history = useHistory();
  
  const [loginModel, setloginModel] = useState(false)
  const handleClose = () => {
    setloginModel(false);
  };

  const sendUser = () =>{
    if (user){
      history.push("/team/register")
    }else{
      setloginModel(true)
    }
    
  }

  useEffect(() => {
    const handleScroll = () => {
      setbodyscrollTop(document.documentElement.scrollTop || document.body.scrollTop)
      console.log("屏幕向下距离",bodyscrollrdTop)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [bodyscrollrdTop]);

  return (
    <>
    <Modal
     show={loginModel}
     onHide={handleClose}
     center
     backdrop="static"
     keyboard={false}
     className="page-header-modal"
    >
      <Modal.Header closeButton>
      <Modal.Title 
      style={{
      textAlign:"center",
      fontSize:"15px", 
      fontFamily:"",
      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
      fontWeight:"bold",
      paddingLeft:"30px",
      color:"#2A2B30",
      lineHeight:"20px",
      letterSpacing:"1px",
    }}
      >请先登录账户</Modal.Title>
      </Modal.Header>
    </Modal>
    <div style={{position:"fixed",zIndex:10,width:"1px",height:width/2.97,background:`linear-gradient(to top, #E5E8EE ${(bodyscrollrdTop/(width/2.97)*100).toString() + '%'}, rgba(255, 255, 255, 0.5) ${(bodyscrollrdTop/(width/2.97)*100).toString() + '%'})`, top:"64px",left:width/2-1}}></div>
    <div className="sign">
      <div className="sign-container">
        <div className="sign-left">
          <div className="number-container">
            <div className="number ">1</div>

            <div className="number padding120">2</div>
            <div className="number padding120">3</div>
            <div className="number padding120">4</div>
            <div className="number padding120">5</div>
          </div>
        </div>

        <div className="sign-right">
          <div className="step-container">
            <div className="flex-start" style={{ paddingTop: "110px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 179.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">注册UFA账号</div>
            </div>

            <div className="flex-start" style={{ paddingTop: "100px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 181.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">点击报名赛事</div>
            </div>

            <div className="flex-start" style={{ paddingTop: "100px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 182.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">队长录入个人/团队信息</div>
            </div>
            <div className="flex-start" style={{ paddingTop: "90px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 186.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">邀请其他队员入驻</div>
            </div>
            <div className="flex-start" style={{ paddingTop: "90px" }}>
              <div className="sign-icon-wrapper">
                <Image
                  src="/tournament/Group 142.png"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>

              <div className="sign-line"></div>

              <div className="step-icon">
                <Image
                  src="/tournament/Group 188.png"
                  style={{ width: "94px", height: "94px" }}
                />
              </div>

              <div className="step-text">收到邮件，报名成功！</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-btn-container">
        {/*<div
          className="footer-btn animated bounceInDown"
        >*/}
		
		<div
		  className="footer-btn animated "
		>
          <Button className="sign-join-match-btn" variant="primary" size="sm"
          onClick ={() => sendUser()}
          >
            报名参赛
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
