import react, {useState, useEffect} from 'react'
import HeaderCreate from 'components/MainPage/header';
import useWindowDimensions from 'utils/sizewindow';
import Sidebar from 'components/MainPage/Sidebar';
import {IconButton} from '@material-ui/core';
import {ArrowBack, ArrowForward} from '@material-ui/icons';
import {Button, Form, Image, Modal} from 'react-bootstrap';
import {useHistory} from 'react-router';
import TeamReister from './TeamRegister'
import TeamQuestionnaire from './TeamQuestionnaire'
import Footer from "../../MainPage/footer";
import { apiCreateTeamAccount } from 'api/main_platform/competitions';
import { competitionID } from 'constants/maps';

export default function TeamAgreeProcessCreate({toggle}) {
    const {width, height} = useWindowDimensions();
    const [page, setpage] = useState(0)
    const [disable, setdisable] = useState(true)
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)

    const [headPortrait, setHeadPortrait] = useState('');
    const [teamname, setteamname] = useState("")
    const [lianghua, setlianghua] = useState(false)
    const [duotou, setduotou] = useState(false)

    const [grade, setGrade] = useState("")
    const [investmentTime, setInvestmentTime] = useState("")
    const [attentionIndustry, setAttentionIndustry] = useState("")

    const Pageprocess = (headPortrait) => {
        if (headPortrait != undefined) {
            setHeadPortrait(headPortrait);
        }
        if (page != 6) {
            setpage(page + 1)
        }
    }

    const backPageprocess = () => {
        setpage(page - 1)
    }

    const Pagereduce = () => {
        setpage(page - 1)
    }
    const sendUserhome = () => {
        history.push("/home")
    }
    

    const [successSendtoC, setsuccessSendtoC] = useState(false)
    const [showExist, setshowExist] = useState(false)
    const [deadline, setdeadline] = useState(false)
    const [teamnameDuplicate, setteamnameDuplicate] = useState(false)

    const createTeam = async () =>{
        try{
            const data = {
                competition_id:competitionID,
                name:teamname
            }
            const dataprops = JSON.stringify(data)
            const response = await apiCreateTeamAccount(data)      
            const messge = response.data.msg
            if (messge == "The user has already joined a team in this competition."){
                setshowExist(true)
            }else if (messge == "OK."){
                setsuccessSendtoC(true)
            }else if (messge == "The name is already in use."){
                setteamnameDuplicate(true)     
            }else{
                setdeadline(true)
            }
        }catch(e){
            alert("系统错误，请稍后重试..")
        }    
    }


    const process = [
        {
            id: 1,
            title: "参赛通知",
            pagename: "报名限制",
            pagetext: "每位选手只能创立/加入一个赛事团队。报名成功后，无法更换团队与赛道。"
        },
        {
            id: 2,
            title: "参赛通知",
            pagename: "报名限制",
            pagetext: "每位选手只能创立/加入一个赛事团队。报名成功后，无法更换团队与赛道。"
        },
        {
            id: 3,
            title: "参赛通知",
            pagename: "交易规则",
            pagetext: "大赛交易规则模拟A股交易规则；其中，每支证券买入时不得超过账户总资产的25%。"

        },
        {
            id: 4,
            title: "参赛通知",
            pagename: "排名规则",
            pagetext: "初赛复赛决赛... 我同意大赛选拔机制，并对评委筛选结果无异议。"

        },
        {
            id: 5,
            title: "参赛通知",
            pagename: "财经洞悉",
            pagetext: "初赛复赛决赛... 我同意大赛选拔机制，并对评委筛选结果无异议。"

        },
        {
            id: 6,
            title: "总览/回顾",
            pagename: "财经洞悉",
            pagetext: "赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。<br/>“财经洞悉”将每两周举行一次，共计六次。 奖励：每次财经洞悉提交截止后，UFA组委会将对50份优秀分析通过邮件形式发放奖状，并对数个优秀学生进行独家采访。<br/>“财经洞悉”作为投资比赛的附属活动，此板块不影响比赛分数。"

        },
    ]


    return (
        <>
            <HeaderCreate toggle={toggle}/>
            {isOpen ? (<Sidebar isOpen={isOpen} toggle={toggle}/>) : null}

            <Modal
                show={teamnameDuplicate}
                onHide={() => setteamnameDuplicate(false)}
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body style={{textAlign: "center",letterSpacing:"2px"}}>团队名称已被使用，请更改！ </Modal.Body>
            </Modal>

            <Modal
                show={successSendtoC}
                centered
            >
                <Modal.Header></Modal.Header>
                <Modal.Body style={{textAlign: "center",letterSpacing:"2px"}}>恭喜您报名成功！后续请根据邮件指示，扫描二维码加入选手微信群（若您是团队形式报名，请联系其他团员前往网站报名进入团队） </Modal.Body>
                <Modal.Footer style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div>
                        <Button className="modal-btn modal-btn-submit" variant="primary" onClick={() => sendUserhome()}>
                            回主页
                        </Button>

                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                show={deadline}
                centered
            >
                <Modal.Header></Modal.Header>
                <Modal.Body style={{textAlign: "center",letterSpacing:"2px"}}>报名失败，报名已截止 </Modal.Body>
                <Modal.Footer style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div>
                        <Button className="modal-btn modal-btn-submit" variant="primary" onClick={() => sendUserhome()}>
                            回主页
                        </Button>

                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showExist}
                centered
            >
                <Modal.Header></Modal.Header>
                <Modal.Body style={{textAlign: "center",letterSpacing:"2px"}}>注册失败, 您已存在于一个队伍当中 </Modal.Body>
                <Modal.Footer style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div>
                        <Button className="modal-btn modal-btn-submit" variant="primary" onClick={() => sendUserhome()}>
                            回主页
                        </Button>

                    </div>
                </Modal.Footer>
            </Modal>





            {/* /////////////////////////////////////////////////////////////////////// */}


            {page == 0 ?
                <>
                    <TeamReister
                        Pageprocess={Pageprocess}
                        teamname={teamname}
                        setteamname={setteamname}
                        lianghua={lianghua}
                        duotou={duotou}
                        setlianghua={setlianghua}
                        setduotou={setduotou}

                    />

                </> : page == 1 ?
                    <>
                        <TeamQuestionnaire
                            Pageprocess={Pageprocess}
                            backPageprocess={backPageprocess}
                            grade={grade}
                            setGrade={setGrade}
                            investmentTime={investmentTime}
                            setInvestmentTime={setInvestmentTime}
                            attentionIndustry={attentionIndustry}
                            setAttentionIndustry={setAttentionIndustry}
                        />

                    </> :

                    <div style={{
                        marginTop: height * 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#F5F6F8"
                    }}>

                        <div style={{width: "48px", maxWidth: "18.75%"}}></div>
                        <div style={{
                            width: "1200px", minWidth: "fix-content", minHeight: "700px",
                            minWidth: "fix-content",
                            height: "max-content",
                            marginBottom:"84px",
                        }}>

                            <div style={{marginTop: "64px", height: "111px", width: "100%"}}>
                                <div style={{
                                    paddingBottom: "24px",
                                    paddingTop: "48px",
                                    fontSize: "24px",
                                    fontFamily: "Microsoft YaHei U-Bold, Microsoft YaHei UI",
                                    fontWeight: "bold",
                                    color: "#2A2B30",
                                    lineHeight: "40px",
                                    letterSpacing: "1px"
                                }}>
                                    {process[page - 1].title}
                                </div>
                            </div>

                            <div style={{height: "700px", width: "100%", backgroundColor: "white"}}>

                                <div style={{marginLeft: "24px", height: "8.57%"}}>
                                    <IconButton style={{paddingTop: "24px", paddingBottom: "16px"}}
                                                onClick={() => Pagereduce()}>
                                        <ArrowBack/>
                                    </IconButton>
                                </div>

                                {page == 6 ? <>

                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <div style={{width: "160px", height: "160px"}}>
                                            <Image src={headPortrait} roundedCircle
                                                   style={{position: "relative", width: "100%", height: "100%"}}/>
                                        </div>


                                    </div>

                                    <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "20px",
                                            fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                            fontWeight: "bold",
                                            color: "#2A2B30",
                                            lineHeight: "40px",
                                            letterSpacing: "1px",
                                        }}>
                                            团队名称

                                        </div>
                                    </div>

                                    <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "14px",
                                            fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                            fontWeight: "400",
                                            color: "#2A2B30",
                                            lineHeight: "24px",
                                        }}>{teamname}</div>
                                    </div>

                                    <div style={{marginTop: "36px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "20px",
                                            fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                            fontWeight: "bold",
                                            color: "#2A2B30",
                                            lineHeight: "40px",
                                            letterSpacing: "1px",
                                        }}>
                                            赛道选择

                                        </div>
                                    </div>

                                    <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            fontSize: "14px",
                                            fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                            fontWeight: "400",
                                            color: "#2A2B30",
                                            lineHeight: "24px",
                                        }}>{
                                            lianghua ? "量化" : "主观"
                                        }赛道
                                        </div>
                                    </div>


                                    <div style={{marginTop: "112px", display: "flex", justifyContent: "center"}}>
                                        <div style={{display: "flex", justifyContent: "left"}}>
                                            <Form.Check type="radio" checked={!disable}
                                                        onClick={(e) => setdisable(!disable)}/>
                                            <div style={{
                                                fontSize: "14px",
                                                fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                                fontWeight: "400",
                                                color: "#6E7184",
                                                lineHeight: "24px",
                                            }}>
                                                我已同意...隐私政策和服务条款
                                            </div>

                                        </div>


                                    </div>


                                    <div style={{marginTop: "12px", display: "flex", justifyContent: "center"}}>

                                        <Button disabled={disable} style={{
                                            width: "288px", height: "48px",
                                            border: "1px solid #F5F6F8", borderRadius: "4px 4px 4px 4px",
                                            boxShadow: disable ? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                                            textAlign: "center",
                                            backgroundColor: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)"
                                        }}
                                                onClick={() => createTeam()}
                                        >
                                            <div style={{
                                                fontSize: "14px",
                                                fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                                fontWeight: "bold",
                                                color: disable ? "#C0C3CE" : "white",
                                                lineHeight: "24px",
                                            }}>
                                                创建团队
                                            </div>


                                        </Button>


                                    </div>


                                </> : <>

                                    <div style={{marginTop: "135px", display: "flex", justifyContent: "center"}}>
                                        <div style={{width: width > 1200 ? "700px" : "100%"}}>
                                            <div style={{
                                                fontSize: "28px",
                                                fontFamily: "Microsoft YaHei U-Bold, Microsoft YaHei UI",
                                                fontWeight: "bold",
                                                color: "#2A2B30",
                                                lineHeight: "56px",
                                                letterSpacing: "1px"
                                            }}>
                                                {process[page].pagename}
                                            </div>
                                            <div style={{
                                                marginTop: "16px",
                                                fontSize: "18px",
                                                fontFamily: "Microsoft YaHei U-Regular, Microsoft YaHei UI",
                                                fontWeight: "400",
                                                color: "#2A2B30",
                                                lineHeight: "32px"
                                            }}>
                                                {page != 4 ? (<>{process[page - 1].pagetext}</>) :
                                                    <>
                                                        赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。
                                                        <br/>“财经洞悉”将每两周举行一次，共计六次。
                                                        奖励：每次财经洞悉提交截止后，UFA组委会将对50份优秀分析通过邮件形式发放奖状，并对数个优秀学生进行独家采访。
                                                        <br/>“财经洞悉”作为投资比赛的附属活动，此板块不影响比赛分数。
                                                    </>
                                                }

                                            </div>

                                        </div>

                                    </div>

                                    <div style={{
                                        marginTop: page == 4 ? "150px" : "280px",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>

                                        <Button style={{
                                            width: "288px",
                                            height: "48px",
                                            backgroundColor: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                                            border: "1px solid #F5F6F8",
                                            borderRadius: "4px 4px 4px 4px",
                                            boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                                        }}
                                                onClick={() => Pageprocess()}
                                        >
                                            <div style={{display: "flex", justifyContent: "right"}}>
                                                <div style={{
                                                    fontSize: "14px",
                                                    fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    lineHeight: "24px",
                                                    paddingRight: "65px"
                                                }}>
                                                    同意（{page - 1}/4）
                                                </div>
                                                <ArrowForward style={{color: "white"}}/>

                                            </div>

                                        </Button>

                                    </div>


                                </>}


                            </div>


                        </div>
                        <div style={{width: "48px", maxWidth: "18.75%"}}></div>
                    </div>


            }
            <div style={{ position: "relative", width:"100%" }}>
                <Footer />
            </div>

        </>


    )
}