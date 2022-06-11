import 'components/TradingPlatform/eplatform.css';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';
import { fmoney, getPlatformType } from 'utils';
import useWindowDimensions from '../../utils/sizewindow';
import LineSeriesForPorfolio from '../graphs/LineSeriesForPorfolio';


export default function PorforlioMoveGraph({
  widthratio, 
  userSummary, 
  profitLineData,
  XiaoPu,
  Score,
}) {
  
  const {width,height} = useWindowDimensions();
  const [timeP,setTimeP] = useState(7);
  const [id,setID] = useState(0)
  const [vertify, setvertify] = useState(true);
  const [platform, setplatform] = useState(getPlatformType())
  const { url } = useRouteMatch();

  const [usersummary,setusersummary] = useState(200000.00)


  const arrays = ["一周","一个月","三个月","六个月","一年","全部"]

  const arraysforCompetition = ["一周","半个月","一个月","两个月","三个月","全部"]

    useEffect(()=>{
        setTimeP(timeP)
        setID(id)
    },[timeP,id])

    return (
      <>
      {vertify? ( <>

      <div>
      <Card style={{width:"100%", borderColor:"white",}} > 

      <div style={{width:"100%",display:"flex", justifyContent:"space-between"}}>
        <div style={{width:"300px"}}>
        <div style={{
                      height:"56px",
        fontSize:"36px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"500",
        padding:"0px",
        color:"#2A2B30",
        lineHeight:"56px",
        letterSpacing:"1px",
        }}>¥{fmoney(usersummary)}</div>

            <div style={{height:"28px",display:"flex",justifyContent:"left"}}>
            <div style={{
            fontSize:"16px",
            fontFamily:"Microsoft YaHei UI-Bold",
            fontWeight:"500",
            padding:"0px",
            color:"#2A2B30",
            marginRight:"20px",
            lineHeight:"28px",
            }}>¥ 0.00{" "}(+0.00%)</div>

            
          
            <div style={{
            fontSize:"16px",
            fontFamily:"Microsoft YaHei UI-Bold",
            fontWeight:"400",
            padding:"0px",
            color:"#9C9EAC",
            lineHeight:"28px",
            }}>

              {platform == "competition" || url == "/team"? arraysforCompetition[id] == "全部"? "全部" : <>近{arraysforCompetition[id]}</> 
              : arrays[id] == "全部"? "全部" : <>近{arrays[id]}</> }
            
            </div>
            </div>

          </div>


          <div style={{width:"239px",height:"100px"}}>


          <div style={{display:"flex",justifyContent:"space-between",padding:"15% 0% 10% 0%"}}>
                      <div>
                      <div style={{
                          fontSize:"18px",
                          textAlign:"center",
                          fontFamily:"Microsoft YaHei UI-Bold",
                          fontWeight:"500",
                          padding:"0px",
                          color:"#2A2B30",
                          lineHeight:"21px",
                          }}>-.-</div>
                          <div style={{
                          fontSize:"14px",
                          textAlign:"center",
                          fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontWeight:"400",
                          padding:"0px",
                          color:"#9C9EAC",
                          lineHeight:"24px",
                          }}>夏普比率</div>
                          </div>

                          <div>
                      <div style={{
                          fontSize:"18px",
                          textAlign:"center",
                          fontFamily:"Microsoft YaHei UI-Bold",
                          fontWeight:"500",
                          padding:"0px",
                          color:"#2A2B30",
                          lineHeight:"21px",
                          }}>-.-</div>
                          <div style={{
                          fontSize:"14px",
                          textAlign:"center",
                          fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontWeight:"400",
                          padding:"0px",
                          color:"#9C9EAC",
                          lineHeight:"24px",
                          }}>综合收益率</div>
                          </div>


                          <div>
                      <div style={{
                          fontSize:"18px",
                          textAlign:"center",
                          fontFamily:"Microsoft YaHei UI-Bold",
                          fontWeight:"500",
                          padding:"0px",
                          color:"#2A2B30",
                          lineHeight:"21px",
                          }}>-.-</div>
                          <div style={{
                          fontSize:"14px",
                          textAlign:"center",
                          fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                          fontWeight:"400",
                          padding:"0px",
                          color:"#9C9EAC",
                          lineHeight:"24px",
                          }}>综合分数</div>
                          </div>
                  </div>

            </div>

      </div>
    
              <div style={{marginTop:"48px",width:"100%", borderColor:"white"}}>
              <LineSeriesForPorfolio width={widthratio} timeperiod = {timeP} url = {url}/>
              </div>



          <div style={{marginTop:"0px",width:"100%", borderBottom:"1px solid #E5E8EE"}}>
          <div style={{display:"flex",justifyContent:"space-between",padding:"0% 42.70% 0px 0%"}}>
                <Button 
                style={{height:"36px",borderBottom: id == 0? "3px solid #26409A" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:"#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setTimeP(5);setID(0)}}
                >
                1W
                </Button>

                <Button style={{height:"36px",borderBottom: id == 1? "3px solid #26409A" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:"#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setTimeP(platform == "competition"? 11 : 21);setID(1)}}
                >
                {platform == "competition"? "15D" : "1M"}
                </Button>

                <Button style={{height:"36px",borderBottom: id == 2? "3px solid #26409A" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:"#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setTimeP(platform == "competition"? 21 : 63);setID(2)}}
                >
                {platform == "competition"? "1M" : "3M"}
                </Button>

                <Button style={{height:"36px",borderBottom: id == 3? "3px solid #26409A" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:"#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setTimeP(platform == "competition"? 42 : 126);setID(3)}}
                >
                {platform == "competition"? "2M" : "6M"}
                </Button>

                <Button style={{height:"36px",borderBottom: id == 4? "3px solid #26409A" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:"#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setTimeP(platform == "competition"? 126 : 250);setID(4)}}
                >
                {platform == "competition"? "3M" : "1Y"}
                </Button>

                <Button style={{height:"36px",borderBottom: id == 5? "3px solid #26409A" : "0px",
                borderTop:"0px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color:"#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setTimeP(500);setID(5)}}
                >
                全部
                </Button>
                </div> 
              </div>
       
    </Card>
    

    {/* <div style={{width:"100%"}}>
      <Card>   
        <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
    </div> */}
    </div>
    </>) : (<>
    <Card style={{width:"100%",borderRadius:"0px 0px 0px 0px"}} > 


          <div style={{height:"458px",overflow:"auto"}}>
            <div style={{marginTop:height*0.2}}>
            <Button style={{width:"80%",marginLeft:"10%"}} >登录</Button> 
            </div>
    </div>
    </Card>
    

  
    </>
       
      )}
     
    
    </>

    )
}