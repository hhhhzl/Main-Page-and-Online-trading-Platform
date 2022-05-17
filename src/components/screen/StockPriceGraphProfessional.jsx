import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image,Dropdown} from 'react-bootstrap'
import './screen.css';
import { Add, ArrowBack, ArrowForward, Check, Edit, Forward, StarBorder,Search as Seachimage, SearchOutlined, ShowChart,BarChart,FormatIndentDecrease, FormatIndentIncrease } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import UserHolding from './UserHolding';
import WatchList from './WatchList';
import useWindowDimensions from '../../utils/sizewindow';
import StockTradeComponet from './StockTradeComponet';
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
import  SearchData  from "../../static/SearchStock.json"

import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconButton } from '@material-ui/core';
import CandleStickChart from '../graphs/CandlestickChart';

const { SearchBar, ClearSearchButton } = Search;


export default function StockPriceGraphProfessional(props) {
  const {width,height} = useWindowDimensions();
  const [openself,setopenself] = useState(false);
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

  const [scrollswitch, setScrollswitch] = useState(false);
  const [linkedInstitution, setLinkedInstitution] = useState("")
  const handleSearch = (propes) => {
    propes.onSearch(linkedInstitution.value);
};

const searchSwitch = () => {
    if (linkedInstitution.value != ""){
        setScrollswitch(true)
    }else{
        setScrollswitch(false)
    }
};
  
  

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

  

  const arrays = [{
      id: 0,
      timeperiod:"15m",

  },
  {
    id: 1,
    timeperiod:"30m",

},{
    id: 2,
    timeperiod:"1h",

},
{
    id: 3,
    timeperiod:"2h",

},{
    id: 4,
    timeperiod:"4h",

},{
    id: 5,
    timeperiod:"D",

},{
    id: 6,
    timeperiod:"M",

},
{
    id: 6,
    timeperiod:"Y",

}

]

  const columns = [
    {
        dataField:'id',
        text:'ID',
        hidden: true
    },
    {
        dataField: 'name',
        text: '机构(升/降)',
        sort: true,
        headerAttrs: {
            hidden: true
          },
    },
]


   useEffect(()=>{
       setopenself(openself)
   },[openself])

    

    return (
    <>
    <div style={{minWidth:"700px",width:"auto",height:"100%"}}>




{/* /////HEADER/////////////////////////////////////////////////////////////////////////////////// */}
        <div style={{width:"100%",minHeight:"6.2%", display:"flex",justifyContent:"left",borderBottom:"1px solid #E5E8EE"}}>

            <div style={{marginLeft:"2.5%" ,width:"37.7%",display:"flex",justifyContent:"left"}}>
                <Link style ={{color:"black", paddingTop:"24px", textDecoration:"none"}} to="/home"><ArrowBack/></Link>
                <div style={{
                      height:"28px",
                      paddingTop:"24px", 
                      fontSize:"16px",    
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                      fontWeight:"bold",
                      marginLeft:"6px",
                      color:"#2A2B30",
                      lineHeight:"28px",
                      }}>阿里巴巴</div>

                <div style={{
                      height:"28px",
                      paddingTop:"24px", 
                      fontSize:"16px",    
                      fontFamily:" Futura-Medium, Futura",
                      fontWeight:"500",
                      marginLeft:"6px",
                      color:"#2A2B30",
                      lineHeight:"28px",
                      }}>￥1,986.32</div>

                <div style={{
                      height:"28px",
                      paddingTop:"24px", 
                      fontSize:"16px",    
                      fontFamily:" Futura-Medium, Futura",
                      fontWeight:"500",
                      marginLeft:"6px",
                      color:"#EC1421",
                      lineHeight:"28px",
                      }}>(+2.03%)</div>

                <div style={{
                      height:"28px",
                      marginLeft:"16px",
                      paddingTop:"16px", 
                      }}>


            <Dropdown style={{marginTop:"5px"}} >
              <Dropdown.Toggle size="sm" style={{borderRadius:"4px 4px 4px 4px",background: "#F5F6F8",height:"32px",width:"80px",paddingLeft:"1px",paddingTop:0, border:"0"}} variant="primary" id="dropdown-basic">
              <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      paddingLeft:"5px",
                      textAlign:"center",    
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                      fontWeight:"bold",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>关键指标</div>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"-20%",height:"200px",
                      width:"100px",
                      backgroundColor:"red",
                      marginLeft:"16px"}}>
                <Card style={{
                      
                      }}></Card>
                
                </Dropdown.Menu>
              </Dropdown>
                      </div>
            </div>

            <div style={{width:"18.75%"}}>
                <Form >
                <ToolkitProvider  
                              keyField="id"
                              data={ SearchData }
                              columns={ columns }  
                              search
                            >
                                {props => (
                            <div className="expanded-container">
                                <InputGroup className="mb-3" controlId="formBasicPassword">
                                    <Button disable style={{height:"36px",background:"#F5F6F8",marginTop:"14px",borderRadius: "4px 0px 0px 4px",opacity: 1,borderWidth:"0px",color:"#2A2B30" }}><SearchOutlined/></Button>
                                     <Form.Control
                                     style={{height:"36px",background:"#F5F6F8",marginTop:"14px",borderRadius: "0px 4px 4px 0px",opacity: 1,borderWidth:"0px"}}
                                     type="text"
                                     placeholder="代码/名称/拼音"
                                     ref={ n => setLinkedInstitution(n)}
                                     onChange={() => {
                                         handleSearch({...props.searchProps});searchSwitch();
                                }
                            }     
                                />   
                                </InputGroup>          
                                <Collapse in= {scrollswitch}>
                                 <div className ="scroll">
                                <BootstrapTable 
                                { ...props.baseProps}
                                 hover = {true}
                                 condensed ={true}
                                 sort={ { dataField: 'label', order: 'asc' } }       
                                 classes ="custom-row-class"
                                />  
                                </div>
                               </Collapse>  
                                                          
                            </div>
                            )
                            }
                            </ToolkitProvider>


                </Form>

            </div>

            <div style={{width:"38.125%",display:"flex",justifyContent:"right"}}>
            <div style={{
                      height:"28px",
                      marginLeft:"16px",
                      marginTop:"12px", 
                      }}>
            <Dropdown style={{marginTop:"5px"}} drop={"down"} >
              <Dropdown.Toggle size="sm" style={{
                  borderRadius:"4px 4px 4px 4px",
                  width:"120px",height:"40px",
                  background: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                  boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                  border:"0"}} variant="primary" id="dropdown-basic">
              <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      paddingLeft:"5px",
                      textAlign:"center",    
                      fontFamily:" PingFang SC-Semibold, PingFang SC",
                      fontWeight:"600",
                      color:"#FFFFFF",
                      lineHeight:"24px",
                      }}>交易</div>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{
                      width:"360px", border:"0px"}}>
                <StockTradeComponet vertify={false} />
                
                </Dropdown.Menu>

              </Dropdown>
              </div>

            </div>
        </div>




{/* /////Timer/////////////////////////////////////////////////////////////////////////////////// */}
<div style={{width:"100%",height:"100%",display:"flex",justifyContent:"space-between"}}>
    <div style={{width:openself? width-348 : "100%",maxWidth:"100%",height:"100%"}}>
    <div style={{width:openself? width-348 : "100%",maxWidth:"100%",minHeight:"4.81%",height:"55px",borderBottom:"1px solid #E5E8EE",display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"453px",marginLeft:"2.5%",display:"flex",justifyContent:"space-between"}}>

            {arrays.map((elem) => {
                return(

                    <Button 
                style={{height:"36px",borderBottom: id == elem.id? updown? "3px solid #42E083" : "3px solid #FF3541" : "0px" ,
                borderTop:"0px",
                marginTop:"16px",
                borderLeft:"0px",
                borderRight:"0px",
                borderRadius:"0px",   
                backgroundColor:"white",
                fontSize:"16px",
                textAlign:"center",
                fontFamily:"Microsoft YaHei UI-Bold",
                fontWeight:"500",
                padding:"0px",
                color: id == elem.id? updown? "#42E083" : "#FF3541" : "#2A2B30",
                lineHeight:"28px",
                letterSpacing:"1px",
                }} variant="outline-primary"
                onClick={() => {setID(elem.id)}}
                >
                {elem.timeperiod}
                </Button>
                )
            })}
            </div>

            <div style={{width:"320px",marginRight:"2.5%",height:"53px",marginLeft:"2.5%",display:"flex",justifyContent:"space-between"}}>
            <Dropdown style={{marginTop:"8px"}} >
              <Dropdown.Toggle size="sm" style={{borderRadius:"4px 4px 4px 4px",background: "#F5F6F8",height:"36px",width:"72px",paddingLeft:"1px",paddingTop:0, border:"0"}} variant="primary" id="dropdown-basic">
                  
                  <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#6E7184",
                      lineHeight:"24px",
                      }}>画线</div>
                  
                  </Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"0%"}}>
                <Dropdown.Item >趋势线</Dropdown.Item>
                <Dropdown.Item >直线</Dropdown.Item>
                <Dropdown.Item>射线</Dropdown.Item>
                <Dropdown.Item>斐波那契回撤</Dropdown.Item>
                <Dropdown.Item>矩形</Dropdown.Item>
                <Dropdown.Item>趋势通道</Dropdown.Item>
                <hr/>
                <Dropdown.Item>删除所有画线</Dropdown.Item>
                
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown style={{marginTop:"8px"}}>
              <Dropdown.Toggle size="sm" style={{borderRadius:"4px 4px 4px 4px",background: "#F5F6F8",height:"36px",width:"72px",paddingLeft:"1px",paddingTop:0, border:"0"}} variant="primary" id="dropdown-basic">
                  
                  <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#6E7184",
                      lineHeight:"24px",
                      }}>指标</div>
                      </Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"0%"}}>
                均线指标：
                <Dropdown.Item >MA</Dropdown.Item>
                <Dropdown.Item >EMA</Dropdown.Item>
                <Dropdown.Item >SMA</Dropdown.Item>
                <Dropdown.Item >TMA</Dropdown.Item>
                <Dropdown.Item >WMA</Dropdown.Item>
                <Dropdown.Item >布林线</Dropdown.Item>
                <hr/>
                超买超卖指标:
                <Dropdown.Item>MACD</Dropdown.Item>
                <Dropdown.Item>RSI</Dropdown.Item>
                <Dropdown.Item>ATR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
       
              <Dropdown style={{marginTop:"8px"}}>
              <Dropdown.Toggle size="sm" style={{borderRadius:"4px 4px 4px 4px",background: "#F5F6F8",height:"36px",width:"72px",paddingLeft:"1px",paddingTop:0, border:"0"}} variant="primary" id="dropdown-basic">
                  
                  <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#6E7184",
                      lineHeight:"24px",
                      }}>K线</div>
                      </Dropdown.Toggle>
              <Dropdown.Menu style={{marginLeft:"0%"}}>
                <Dropdown.Item >蜡烛图</Dropdown.Item>
                <Dropdown.Item >面积图</Dropdown.Item>
                <Dropdown.Item>平均K线图（Heikin-Ashi）</Dropdown.Item>
                <Dropdown.Item>卡吉图（Kagi）</Dropdown.Item>
                <Dropdown.Item>点数图</Dropdown.Item>
                <Dropdown.Item>砖型图（Renko）</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <IconButton onClick={() => setopenself(!openself)}>
                  {openself? 
                    <FormatIndentIncrease/> 
                  : <FormatIndentDecrease/>   
                }    
              </IconButton>
            </div>
            </div>


            <div style={{width:openself? width-348 : "100%",maxWidth:"100%"}}>
            <CandleStickChart width ={openself? width-348: width} choice = {"Trendline"}/>
            </div>


    </div>
        

            



            {openself? (<div style={{width:"348px",height:"100%",borderBottom:"1px solid #E5E8EE",backgroundColor:"yellow"}}>
                <WatchList/>
            </div>   ) : null}

        </div>
    </div>
      
     
    
    </>

    )
}