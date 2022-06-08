import React, {useState, useEffect} from 'react'
import HeaderCreate from '../../MainPage/header'
import useWindowDimensions from '../../../utils/sizewindow';
import Sidebar from '../../MainPage/Sidebar';
import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { Button, Form, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';

import ReactCrop,{centerCrop,makeAspectCrop} from "react-image-crop";
import TeamRegisterModel from '../../screen/modal/TeamRegisterModel'
import Footer from 'components/MainPage/footer';


export default function TeamRegister({
    Pageprocess,
    teamname,
    setteamname,
    lianghua,
    setlianghua,
    duotou,
    setduotou
}){
    const {width,height} = useWindowDimensions();
    const [disable, setdisable] = useState(true)
	const [headPortrait,setHeadPortrait] = useState('/homeCutout/Group 1073@2x.png')
    const history= useHistory()
    const sendUserback = () => {history.push("/team/register")}


    const selectionTracklianghua = (e) =>{
        if (!lianghua){
            setlianghua(true)
            setduotou(false)

        }else{
            setlianghua(false)
        }
    }

    const selectionTrackduotou = (e) =>{
        if (!duotou){
            setlianghua(false)
            setduotou(true)

        }else{
            setduotou(false)
        }
    }

    useEffect(()=>{
        console.log(teamname.length)
        if (teamname.length && (lianghua || duotou) ){
            setdisable(false)
        }else if (teamname.length == 0){
            setdisable(true)
        }else{
            setdisable(true)
        }
    },[lianghua,duotou,disable])

	const uploadFile = React.createRef();
	const [showModal, setShowModal] = useState(false);
	const [imgSrc, setImgSrc] = useState('')

	const hideModal = () => {
	  setShowModal(false);
	  setImgSrc('');
	};

	const openModel = ()=>{
		setShowModal(true)
	}

	const chooseFile = () => {
	  uploadFile.current.click();
	};

	function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
	  if (e.target.files && e.target.files.length > 0) {
	    const reader = new FileReader()
	    reader.addEventListener('load', () =>
	      setImgSrc(reader.result.toString() || ''),
	    )
	    reader.readAsDataURL(e.target.files[0])
		setShowModal(true)
		e.target.value = "";
	  }
	}

	const getBase64 = (url) => {
		setShowModal(false)
		setHeadPortrait(url);
	}

    return (
        <>
        {/* <HeaderCreate toggle = {toggle} />
      {isOpen?(<Sidebar isOpen = {isOpen} toggle={toggle}/>) : null} */}

         <div  style={{marginTop:height*0,width:"100%",display:"flex",justifyContent:"space-between", backgroundColor:"#F5F6F8"}}>

		 <TeamRegisterModel showModal={showModal} hideModal={hideModal} getBase64={getBase64} imgSrc={imgSrc}></TeamRegisterModel>

        <div style={{width:"48px",maxWidth:"18.75%"}}></div>
        <div style={{width:"1200px",minWidth:"fix-content",minHeight: "700px",
            minWidth: "fix-content",
            height:height,
            }}>
                <div style={{marginTop:"64px",height:"111px", width:"100%"}}>
                    <div style={{paddingBottom:"24px",paddingTop:"48px", fontSize:"24px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:"#2A2B30", lineHeight:"40px",letterSpacing:"1px"}}>
                     填写团队信息
                    </div>
                </div>
                <div style={{height:"700px",width:"100%", backgroundColor:"white"}}>

                    <div style={{marginLeft:"24px", height:"8.57%"}}>
                        <IconButton onClick={() => sendUserback()} style={{paddingTop:"24px", paddingBottom:"16px"}}>
                            <ArrowBack/>
                        </IconButton>
                    </div>


                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div style={{width:"160px", height:"160px"}}>
                        <Image src={headPortrait} roundedCircle style={{position: "relative", width: "100%",height: "100%"}}/>
                        </div>



                    </div>
                    <div style={{marginTop:"24px",display:"flex", justifyContent:"center"}}>
                        <Form>
                            {/*<Form.Control
								type="file"
								className="custom-file-label"
								label={"上传团队头像"}
								style={{width:"200px", height:"40px",textAlign:"center", paddingTop:"8px"}}
								onChange={onSelectFile}
							/>*/}

							<Button
								style={{
									width: "120px",
									height: "40px",
									background: "#F5F6F8",
									borderRadius: "4px 4px 4px 4px",
									opacity: "1",
									border:"0",
									color:"rgb(42, 43, 48)"
								}}
								onClick={chooseFile}
							><div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight:"bold",
                                color:"#2A2B30",
                                lineHeight:"24px",

                            }}>上传头像</div></Button>
							<input
								hidden
								ref={uploadFile}
								type="file"
								accept="image/*"
								onChange={onSelectFile} />
                        </Form>




                    </div>

                    <div style={{marginTop:"36px",display:"flex", justifyContent:"center"}}>
                        <div style={{
                        fontSize:"20px",
                        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                        fontWeight:"bold",
                        color:"#2A2B30",
                        lineHeight:"40px",
                        letterSpacing:"1px",
                    }}>
                            团队名称

                        </div>
                    </div>

                    <div style={{marginTop:"12px",display:"flex", justifyContent:"center"}}>
                        <Form>
                            <Form.Control placeholder={"请填写团队名称"}
                            style={{width:"360px", height:"40px",textAlign:"center", paddingTop:"8px",border:"1px solid #C0C3CE", background:"white", borderRadius:"4px 4px 4px 4px"}}
                            value={teamname}
                            onChange={(e) => setteamname(e.target.value)}
                            />
                        </Form>
                    </div>

                    <div style={{marginTop:"36px",display:"flex", justifyContent:"center"}}>
                        <div style={{
                        fontSize:"20px",
                        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                        fontWeight:"bold",
                        color:"#2A2B30",
                        lineHeight:"40px",
                        letterSpacing:"1px",
                    }}>
                            赛道选择

                        </div>
                    </div>

                    <div style={{marginTop:"12px",display:"flex", justifyContent:"center"}}>

                        <div style={{display:"flex", justifyContent:"space-even"}}>
                        <Form>
                            <Form.Check type="radio" checked={lianghua} value={lianghua} onClick ={(e) => selectionTracklianghua(e)}/>
                        </Form>
                        <div style={{marginLeft:"8px", marginRight:"24px"}}>量化赛道</div>

                        <Form>
                            <Form.Check type="radio"  checked={duotou} value={duotou} onClick ={(e) => selectionTrackduotou(e)}/>
                        </Form>
                        <div style={{marginLeft:"8px", marginRight:"24px"}}>主观赛道</div>

                        </div>

                    </div>
                    <div style={{marginTop:"12px",display:"flex", justifyContent:"center"}}>
                        <div style={{
                            fontSize:"14px",
                            fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                            color:"#C0C3CE",
                            lineHeight:"24px",
                        }}>
                            *本次比赛鼓励量化选手的参与，并为量化选手设立更多奖励/实习机会。

                        </div>
                    </div>

                    <div style={{marginTop:"60px",display:"flex", justifyContent:"center"}}>

                        <Button disabled={disable}
                        style ={{width:"288px",height:"48px", background:disable? "#F5F6F8" : "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                        border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                        boxShadow:disable? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                        }}
                        onClick={() => Pageprocess(headPortrait)}
                        >
                            <div style={{display:"flex",justifyContent:"right"}}>
                            <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                fontWeight:"bold",
                                color: disable?"#C0C3CE" : "white",
                                lineHeight:"24px",
                                paddingRight:"95px"
                                }}>
                            下一步
                            </div>
                            <ArrowForward style={{ color: disable?"#C0C3CE" : "white"}}/>

                            </div>

                            </Button>

                    </div>

                </div>
        </div>
        <div style={{width:"48px",maxWidth:"18.75%"}}></div>

        </div>








        </>


    )
}
