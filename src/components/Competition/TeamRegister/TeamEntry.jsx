import react, {useState, useEffect,useContext} from 'react'
import HeaderCreate from '../../MainPage/header'
import useWindowDimensions from '../../../utils/sizewindow';
import Sidebar from '../../MainPage/Sidebar';
import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { Button, Form, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Footer from 'components/MainPage/footer';
import AuthContext from "../../../context/AuthContext";

export default function TeamEntry(){
	let { user, logoutUser } = useContext(AuthContext);
    const {width,height} = useWindowDimensions();
    const history= useHistory()
    const [disable, setdisable] = useState(true)
    const [hovercreate, setHovercreate] = useState(true);
    const [hoverjoin, setHoverjoin] = useState(false);
    const [createshow, setcreatshow] = useState(false);
    const [joinshow, setjoinshow] = useState(false);
    const sendUserhome = () => {history.push("/home")}


    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };

    const handleMouseOverC = () => {
        setHovercreate(true);
        setHoverjoin(false)
        setcreatshow(true)
        setjoinshow(false)
    }

    const handleMouseLeaveC = () => setHovercreate(false);

    const handleMouseOverJ = () => {
        setHoverjoin(true);
        setHovercreate(false)
        setjoinshow(true)
        setcreatshow(false)
    }

    useEffect(() =>{
        setHovercreate(hovercreate)
        setHoverjoin(hoverjoin)
        setjoinshow(joinshow)
        setcreatshow(createshow)
    },[hovercreate,hoverjoin,joinshow,createshow])

    const handleMouseLeaveJ = () => setHoverjoin(false);

    return (
        <>
        <div>
        <HeaderCreate toggle = {toggle} />
      {isOpen?(<Sidebar isOpen = {isOpen} toggle={toggle}/>) : null}
      </div>


         <div  style={{marginTop:height*0,width:"100%",height:height*0.89,minHeight:"876px",display:"flex",justifyContent:"space-between", backgroundColor:"#F5F6F8"}}>

        <div style={{width:"48px",maxWidth:"18.75%"}}></div>
        <div style={{width:"1200px",minWidth:"fix-content",minHeight: "700px",
            minWidth: "fix-content",
            height:height,
            }}>
                <div style={{marginTop:"64px",height:"111px", width:"100%"}}>

                    <div style={{paddingBottom:"24px",paddingTop:"48px", fontSize:"24px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:"#2A2B30", lineHeight:"40px",letterSpacing:"1px"}}>
                    <IconButton onClick={() => sendUserhome()} >
                            <ArrowBack/>
                        </IconButton>选择参赛方式
                    </div>
                </div>
                <div style={{height:"700px",width:"100%", backgroundColor:"white",display:"flex",justifyContent:"left"}}>

                        <div style ={{
                            paddingTop:0,
                            width:"50%",
                            height:"100%",
                            background: hovercreate? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)" :"white",
                            border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                            }}
                            onMouseOver={() => handleMouseOverC()}
                            >


                            <div style={{marginTop:"248px",display:"flex",justifyContent:"center"}}>
                            <div style={{width:"72px", height:"72px"}}>
                               <Image src={"/homeCutout/Group 1095@2x.png"}  style={{position: "relative", width: "100%",height: "100%"}}/>
                            </div>




                            </div>

                            <div style={{marginTop:"24px",display:"flex",justifyContent:"center"}}>
                            <div style={{fontSize:"20px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:hovercreate? "#FFFFFF" : "#2A2B30", lineHeight:"36px",letterSpacing:"1px"}}>
                             创建团队（我是队长）
                            </div>



                            </div>

                            <div style={{marginTop:"152px",display:"flex",justifyContent:"center"}}>

                            {createshow? <>
                                <Button style ={{width:"288px",height:"48px", backgroundColor: "#F5F6F8",
                        border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                        boxShadow:disable? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                        }}
                        onClick={() => {history.push("/team/create")}}
                        >
                            <div style={{display:"flex",justifyContent:"right"}}>
                            <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight:"bold",
                                color: "#2A2B30",
                                lineHeight:"24px",
                                paddingRight:"95px"
                                }}>
                            下一步
                            </div>
                            <ArrowForward style={{ color: "#2A2B30"}}/>

                            </div>
                            </Button>

                            </> : null}



                            </div>
                            </div>
                            <div style ={{
                            paddingTop:0,
                            width:"50%",
                            height:"100%",
                            background: hoverjoin? "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)" :"white",
                            border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",


                             }}
                            onMouseOver={() => handleMouseOverJ()}

                            >
                            <div style={{marginTop:"248px",display:"flex",justifyContent:"center"}}>
                            <div style={{width:"72px", height:"72px"}}>
                               <Image src={"/homeCutout/Group 1096@2x.png"} style={{position: "relative", width: "100%",height: "100%"}}/>
                            </div>
                            </div>

                            <div style={{marginTop:"24px",display:"flex",justifyContent:"center"}}>
                            <div style={{fontSize:"20px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:hoverjoin? "#FFFFFF" : "#2A2B30", lineHeight:"36px",letterSpacing:"1px"}}>
                             加入团队
                            </div>



                            </div>

                            <div style={{marginTop:"152px",display:"flex",justifyContent:"center"}}>

                                {joinshow? <>
                                    <Button style ={{width:"288px",height:"48px", backgroundColor: "#F5F6F8",
                        border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                        boxShadow:disable? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                        }}
                        onClick={() => {history.push("/team/join")}}
                        >
                            <div style={{display:"flex",justifyContent:"right"}}>
                            <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight:"bold",
                                color: "#2A2B30",
                                lineHeight:"24px",
                                paddingRight:"95px"
                                }}>
                            下一步
                            </div>
                            <ArrowForward style={{ color: "#2A2B30"}}/>

                            </div>
                            </Button>

                                </> : null}



                            </div>
                            </div>


                </div>
        </div>
        <div style={{width:"48px",maxWidth:"18.75%"}}></div>
        </div>

        <div style={{position:"relative"}}>
        <Footer />
        </div>



        </>


    )
}
