import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image } from 'react-bootstrap'
import 'components/TradingPlatform/eplatform.css';
import { StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp} from '@material-ui/icons';
import UserHolding from './UserHolding';
import WatchListTable from './WatchListTable';
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


  const [usersummary,setusersummary] = useState(200000.00)


  const arrays = ["一周","一个月","三个月","六个月","一年","全部"]

    useEffect(()=>{
        setTimeP(timeP)
        setID(id)
    },[timeP,id])

    return (
      <>
      {vertify? ( <>

      <div>
      <Card style={{width:"100%", borderColor:"white"}} > 

          <Row style={{ height:"84px"}} >
              <Col xs ={7} style={{ height:"84px"}} >
                  <div>


                  <div style={{
                      height:"56px",
        fontSize:"36px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"500",
        padding:"0px",
        color:"#2A2B30",
        lineHeight:"56px",
        letterSpacing:"1px",
        }}>¥{usersummary}</div>


        <div style={{height:"28px",display:"flex",justifyContent:"left"}}>
        <div style={{
        fontSize:"16px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"500",
        padding:"0px",
        color:"#2A2B30",
        marginRight:"20px",
        lineHeight:"28px",
        }}>¥30608.26{" "}(+2.03%)</div>

        
       
        <div style={{
        fontSize:"16px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"400",
        padding:"0px",
        color:"#9C9EAC",
        lineHeight:"28px",
        }}>

        {arrays[id] == "全部"? "全部" : <>近{arrays[id]}</> }
        
        </div>
        </div>
    
          
        
                  </div>
              </Col>
              <Col xs ={1}></Col>
              
              <Col xs ={4} style={{ height:"84px"}}>
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
                          }}>1.03</div>
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
                          }}>23%</div>
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
                          }}>96.03</div>
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
              </Col>

          </Row>

    
              <div style={{marginTop:"48px",width:"100%", borderColor:"white"}}>
              <LineSeriesForPorfolio width={widthratio} timeperiod = {timeP}/>
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
                onClick={() => {setTimeP(7);setID(0)}}
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
                onClick={() => {setTimeP(30);setID(1)}}
                >
                1M
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
                onClick={() => {setTimeP(90);setID(2)}}
                >
                3M
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
                onClick={() => {setTimeP(180);setID(3)}}
                >
                6M
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
                onClick={() => {setTimeP(365);setID(4)}}
                >
                1Y
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
                onClick={() => {setTimeP(365);setID(5)}}
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