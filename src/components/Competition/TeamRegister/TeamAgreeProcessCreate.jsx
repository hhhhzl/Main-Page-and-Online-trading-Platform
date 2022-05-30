import react, {useState, useEffect} from 'react'
import HeaderCreate from 'components/MainPage/header';
import useWindowDimensions from 'utils/sizewindow';
import Sidebar from 'components/MainPage/Sidebar';
import { IconButton } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import TeamReister from './TeamRegister'

export default function TeamAgreeProcessCreate({toggle}){
    const {width,height} = useWindowDimensions();
    const [page, setpage] = useState(0)
    const [disable, setdisable] = useState(true)
    const history= useHistory()
    const [isOpen, setIsOpen] = useState(false)
    

    const Pageprocess = () => {if (page!= 6){setpage(page + 1)}   }
    const Pagereduce = () => {setpage(page - 1)}
    const sendUserhome = () => {history.push("/home")}


    const [successSendtoC, setsuccessSendtoC] = useState(false)

    const process =[
        {
            id:1,
            title:"参赛通知",
            pagename:"报名限制",
            pagetext:"每位选手只能创立/加入一个赛事团队。报名成功后，无法更换团队与赛道。"
        },
        {
            id:2,
            title:"参赛通知",
            pagename:"交易规则",
            pagetext:"大赛交易规则模拟A股交易规则；其中，每支证券买入时不得超过账户总资产的25%。"

        },
        {
            id:3,
            title:"参赛通知",
            pagename:"排名规则",
            pagetext:"初赛复赛决赛... 我同意大赛选拔机制，并对评委筛选结果无异议。"

        },
        {
            id:4,
            title:"参赛通知",
            pagename:"财经洞悉",
            pagetext:"初赛复赛决赛... 我同意大赛选拔机制，并对评委筛选结果无异议。"

        },
        {
            id:5,
            title:"总览/回顾",
            pagename:"财经洞悉",
            pagetext:"赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。<br/>“财经洞悉”将每两周举行一次，共计六次。 奖励：每次财经洞悉提交截止后，UFA组委会将对50份优秀分析通过邮件形式发放奖状，并对数个优秀学生进行独家采访。<br/>“财经洞悉”作为投资比赛的附属活动，此板块不影响比赛分数。"

        },
    ]



    return (
        <>
        <HeaderCreate toggle = {toggle} />
      {isOpen?(<Sidebar isOpen = {isOpen} toggle={toggle}/>) : null}

       <Modal 
        show={successSendtoC} 
        centered
        >
          <Modal.Header></Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>团队已成功创建 </Modal.Body>
        <Modal.Footer style={{width:"100%", display:"flex",justifyContent:"center"}}  >
            <div >
            <Button className="modal-btn modal-btn-submit"  variant="primary" onClick ={() => sendUserhome()}>
            回主页
          </Button>
        </div>
          </Modal.Footer>
        </Modal>


      {page == 0 ? 
      <>
      <TeamReister Pageprocess = {Pageprocess}/>
      
      </> :

            <div  style={{marginTop:height*0,width:"100%",display:"flex",justifyContent:"space-between", backgroundColor:"#F5F6F8"}}>

            <div style={{width:"48px",maxWidth:"18.75%"}}></div>
            <div style={{width:"1200px",minWidth:"fix-content",minHeight: "700px",
                minWidth: "fix-content",
                height:height,
                }}>

                <div style={{marginTop:"64px",height:"111px", width:"100%"}}>
                        <div style={{paddingBottom:"24px",paddingTop:"48px", fontSize:"24px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:"#2A2B30", lineHeight:"40px",letterSpacing:"1px"}}>
                        {process[page - 1].title}
                        </div>
                    </div>

                    <div style={{height:"700px",width:"100%", backgroundColor:"white"}}>

                        <div style={{marginLeft:"24px", height:"8.57%"}}>
                            <IconButton style={{paddingTop:"24px", paddingBottom:"16px"}} onClick={() => Pagereduce()}>
                                <ArrowBack/>
                            </IconButton>
                        </div>

                        {page == 5? <>

                            <div style={{display:"flex", justifyContent:"center"}}>
                            <div style={{width:"160px", height:"160px"}}>
                            <Image src="/homeCutout/Mask group.png" roundedCircle style={{position: "relative", width: "100%",height: "100%"}}/>
                            </div>

                            
                        
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
                            <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                fontWeight:"400",
                                color:"#2A2B30",
                                lineHeight:"24px",
                            }}>对短时间的好看好看</div>
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
                        <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                fontWeight:"400",
                                color:"#2A2B30",
                                lineHeight:"24px",
                            }}>主观赛道</div>    
                        </div>
                        

                        <div style={{marginTop:"112px",display:"flex", justifyContent:"center"}}>
                            <div style={{display:"flex", justifyContent:"left"}}>         
                                <Form.Check type ="radio" onChange={() => setdisable(false)}/> 
                            <div style={{
                                fontSize:"14px",
                                fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI;",
                                fontWeight:"400",
                                color:"#6E7184",
                                lineHeight:"24px",
                            }}> 
                                我已同意...隐私政策和服务条款
                            </div>

                            </div>
                            
                            
                        </div>


                        <div style={{marginTop:"12px",display:"flex", justifyContent:"center"}}>

                        <Button disabled={disable} style ={{width:"288px",height:"48px", 
                            border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                            boxShadow:disable? null : "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                            textAlign:"center",
                            backgroundColor:"linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)" 
                            }} 
                            onClick={() => setsuccessSendtoC(true)}
                            >
                                <div style={{
                                    fontSize:"14px",
                                    fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                    fontWeight:"bold",
                                    color: disable?"#C0C3CE" : "white",
                                    lineHeight:"24px",
                                    }}>
                                创建团队
                                </div>
                    
                                
                                </Button>
                        
                            
                            
                        </div>





                    

                        
                        
                        
                        </> : <>

                            <div style={{marginTop:"135px",display:"flex", justifyContent:"center"}}>
                            <div style={{width:width>1200? "700px" :"100%"}}>
                            <div style={{fontSize:"28px", fontFamily:"Microsoft YaHei U-Bold, Microsoft YaHei UI", fontWeight:"bold", color:"#2A2B30", lineHeight:"56px",letterSpacing:"1px"}}>
                            {process[page].pagename}
                            </div>
                            <div style={{marginTop:"16px",fontSize:"18px", fontFamily:"Microsoft YaHei U-Regular, Microsoft YaHei UI", fontWeight:"400", color:"#2A2B30", lineHeight:"32px"}}>
                                {page != 4? (<>{process[page-1].pagetext}</>) : 
                                <>
                                赛事期间，UFA将定期抛出热点财经新闻话题，并邀请大学生基于新闻话题撰写独立分析。
                                <br/>“财经洞悉”将每两周举行一次，共计六次。 奖励：每次财经洞悉提交截止后，UFA组委会将对50份优秀分析通过邮件形式发放奖状，并对数个优秀学生进行独家采访。
                                <br/>“财经洞悉”作为投资比赛的附属活动，此板块不影响比赛分数。
                                </>
                                }
                            
                            </div>

                            </div>  

                        </div>

                        <div style={{marginTop:page == 4? "150px" : "280px" ,display:"flex", justifyContent:"center"}}>

                            <Button style ={{width:"288px",height:"48px", backgroundColor:"linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)", 
                            border:"1px solid #F5F6F8", borderRadius:"4px 4px 4px 4px",
                            boxShadow:"0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                            }}
                            onClick={() => Pageprocess()}
                            >
                                <div style={{display:"flex",justifyContent:"right"}}>
                                <div style={{
                                    fontSize:"14px",
                                    fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                                    fontWeight:"bold",
                                    color:"white",
                                    lineHeight:"24px",
                                    paddingRight:"65px"
                                    }}>
                                同意（{page}/4）
                                </div>
                                <ArrowForward style={{ color:"white"}}/>

                                </div>
                                
                                </Button>

                            </div> 
                        
                        
                        
                        
                        </>}

                                

                    
                        </div>

                    
            </div>
            <div style={{width:"48px",maxWidth:"18.75%"}}></div>
            </div>
      
      
      
      }

         

        </>
        

    )
}