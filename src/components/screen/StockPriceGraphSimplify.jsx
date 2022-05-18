import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image,Modal } from 'react-bootstrap'
import './screen.css';
import { Add, ArrowForward, Check, Edit, Forward, StarBorder } from '@material-ui/icons';
import { NotificationsNone, KeyboardArrowDown, ArrowDropUp} from '@material-ui/icons';
import UserHolding from './UserHolding';
import WatchListTable from './WatchListTable';
import useWindowDimensions from '../../utils/sizewindow';
import LineSeriesForPorfolio from '../graphs/LineSeriesForPorfolio';
import AreaSeriesForStockPrice from '../graphs/AreaSeriesForStockPrice';

import * as d3 from "d3";
import { format } from "d3-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries, AlternatingFillAreaSeries } from "react-stockcharts/lib/series";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import { timeFormat } from "d3-time-format";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../static/Stockdata";
import { Link } from 'react-router-dom';


export default function StockPriceGraphSimplify({widthratio}) {
  const {width,height} = useWindowDimensions();
  const [timeP,setTimeP] = useState(7);
  const [id,setID] = useState(0)
  const [vertify, setvertify] = useState(true);
  const [add,setAdd] = useState(false)
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const handleMouseOver1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseOver2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  
  

    const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
    const parseDate = d3.timeParse(dateTimeFormat);
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => parseDate(d.date)
      );
    const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        SampleData
      );

      const [start, setstart] = useState(last(data))
      const [end, setend] = useState(data[Math.max(0, data.length - 7)])
      const [updown, setupdown] = useState(end.close < start.close? true : false)

   

  

  const checkprice = (interval,id) =>{
      setTimeP(interval)
      setID(id)  
      setend(data[Math.max(0, data.length - interval)])
      if (data[Math.max(0, data.length - interval)].close < start.close){
          setupdown(true)
      }else{
          setupdown(false)
      }
  }

  const checkupdown = () =>{
    
  }

  

  const arrays = ["今日","一周","一个月","三个月","一年","五年"]

    useEffect(()=>{
        setTimeP(timeP)
        setID(id)
        setend(end)
        setupdown(updown)
        console.log(timeP,id,end,updown,80)
    },[timeP,id,end,updown])

    return (
      <>
      {vertify? ( <>
        <div>
        <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h5 className="text-center">您手机尺寸暂不支持专业版，请使用大尺寸设备</h5>
          </Modal.Body>
        </Modal>
      </div>

      <div>
      <Card style={{width:widthratio, borderColor:"white"}} > 

          <Row style={{ height:"124px" }}>
              <Col xs ={7} style={{height:"124px"}} >
                  <div>


                  <div style={{
                      height:"40px",
                      fontSize:"24px",    
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                      fontWeight:"bold",
                      padding:"0px",
                      color:"#2A2B30",
                      lineHeight:"40px",
                      letterSpacing:"1px",
                      }}>阿里巴巴</div>

                  <div style={{
                      height:"56px",
                      position:"relative",
                      top:"0",
                      fontSize:"36px",
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
                      fontWeight:"500",
                      padding:"0px",
                      color:"#2A2B30",
                      lineHeight:"56px",
                      letterSpacing:"1px",
                      }}>￥1,986.32</div>


        <Row>
            <Col xs ={7} style={{height:"28px"}}>
        <div style={{
        fontSize:"16px",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"500",
        padding:"0px",
        color:updown? "#42E083" : "#FF3541",
        lineHeight:"28px",
        }}>+¥30608.26(+2.03%)</div>

        
        </Col><Col xs ={5} style={{height:"28px"}}>
        <div style={{
        fontSize:"16px",
        marginLeft:"-40%",
        fontFamily:"Microsoft YaHei UI-Bold",
        fontWeight:"400",
        padding:"0px",
        color:"#9C9EAC",
        lineHeight:"28px",
        }}>

        {arrays[id] == "今日"? "今日" : <>近{arrays[id]}</> }
        
        </div>
    
            </Col></Row>
        
                  </div>
              </Col>
            
              
              <Col xs ={5} style={{height:"124px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"13% 0% 10% 5%"}}>


                      {add? <><div>
                          <Button style={{background: "#F5F6F8",width: "120px",height: "48px", borderRadius: "4px 4px 4px 4px",opacity: 1, borderWidth:"0"}}
                          variant="outline-secondary"
                          onClick={() => setAdd(false)}
                          >     
                              <div   style={{
                                  display:"flex",
                                  justifyContent:"space-between",
                              fontSize:"14px",
                              color:"#2A2B30",
                              fontFamily:"Microsoft YaHei UI-Bold",
                              fontWeight:"bold",
                              padding:"5% 0% 10% 0%",
                              lineHeight:"24px"
                              }}><Check/>已加入自选</div>              
                          </Button>
                     </div></> : <>
                     <div>
                          <Button className="select-Button"  style={{width: "120px",height: "48px", borderRadius: "4px 4px 4px 4px",opacity: 1, borderWidth: "1px", borderColor:"#2A2B30"}} 
                          variant="outline-secondary"
                          onClick={() => setAdd(true)}
                          onMouseOver={handleMouseOver1}
                          onMouseLeave={handleMouseLeave1}
                          > 
                    <div className ="hover-fontcolor"  style={{
                              display:"flex",justifyContent:"space-between",
                              fontSize:"14px",
                              color:hover1? "white" : "#2A2B30" ,
                              fontFamily:"Microsoft YaHei UI-Bold",
                              fontWeight:"bold",
                              padding:"5% 10% 10% 3%",
                              lineHeight:"24px"
                              }}><Add className ="hover-fontcolor"/>加入自选</div>              
                          </Button>
                     </div>
                     
                     </>}    
                     <div>
                          <Button className="select-Button" style={{textAlign:"center",width: "120px", height: "48px", borderRadius: "4px 4px 4px 4px",opacity: 1, border: "1px solid #2A2B30"}} 
                          variant="outline-secondary"
                          onMouseOver={handleMouseOver2}
                          onMouseLeave={handleMouseLeave2}
                          onClick={() => {
                            if (width < 1200){
                              handleShow()
                            }
                          } }
                          >
                            {width > 1200? <>
                              <Link to='user/pro'>
                          <div className ="hover-fontcolor" style={{
                              display:"flex",justifyContent:"space-between",
                              fontSize:"14px",
                              fontFamily:"Microsoft YaHei UI-Bold",
                              color: hover2? "white" : "#2A2B30" ,
                              fontWeight:"bold",
                              padding:"5% 13% 10% 10%",
                              lineHeight:"24px",
                              }}>  专业版{" "}
                              <ArrowForward className ="hover-fontcolor" style={{
                              padding:"0px",
                              }}
                              /> </div> </Link> 

                            </> : <>
                            <div className ="hover-fontcolor" style={{
                              display:"flex",justifyContent:"space-between",
                              fontSize:"14px",
                              fontFamily:"Microsoft YaHei UI-Bold",
                              color: hover2? "white" : "#2A2B30" ,
                              fontWeight:"bold",
                              padding:"5% 13% 10% 10%",
                              lineHeight:"24px",
                              }}>  专业版{" "}
                              <ArrowForward className ="hover-fontcolor" style={{
                              padding:"0px",
                              }}
                              /> </div>
                            </>}
                            
                                     
                          </Button>
                     </div>
                  </div>
              </Col>

          </Row>

    
              <div style={{marginTop:"8px",width:"100%", borderColor:"white"}}>
              <AreaSeriesForStockPrice width={widthratio} 
              timeperiod = {timeP} 
              start={start}
              end = {end}
              xScale = {xScale}
              xAccessor = {xAccessor}
              displayXAccessor = {displayXAccessor}
              data = {data}
              updown = {updown}
               />
              </div>



          <div style={{marginTop:"0px",width:"100%", borderBottom:"1px solid #E5E8EE"}}>
          <div style={{display:"flex",justifyContent:"space-between",padding:"0% 42.70% 0px 0%"}}>
                <Button 
                style={{height:"36px",borderBottom: id == 0? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px" ,
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
                color:id == 0? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(7,0)}}
                >
                1D
                </Button>

                <Button style={{height:"36px",borderBottom: id == 1? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
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
                color:id == 1? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(30,1)}}
                >
                1W
                </Button>

                <Button style={{height:"36px",borderBottom: id == 2? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
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
                color:id == 2? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(90,2)}}
                >
                1M
                </Button>

                <Button style={{height:"36px",borderBottom: id == 3? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
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
                color:id == 3? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(180,3)}}
                >
                3M
                </Button>

                <Button style={{height:"36px",borderBottom: id == 4? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
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
                color:id == 4? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(365,4)}}
                >
                1Y
                </Button>

                <Button style={{height:"36px",borderBottom: id == 5? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px",
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
                color:id == 5 ? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {checkprice(365,5)}}
                >
                5Y
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