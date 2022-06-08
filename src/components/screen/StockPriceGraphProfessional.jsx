import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image,Dropdown, Modal,Spinner} from 'react-bootstrap'
import './screen.css';
import { Add, ArrowBack, ArrowForward, Check, Edit, Forward, StarBorder,Search as Seachimage, SearchOutlined, ShowChart,BarChart,FormatIndentDecrease, FormatIndentIncrease, FlareSharp } from '@material-ui/icons';
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


import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconButton } from '@material-ui/core';
import CandleStickChart from '../graphs/CandlestickChart';
import KeyIndicators from './KeyIndicatorProfessional';
import HeikinAshiChart from '../graphs/heikinAshiGraph';
import KagiGraphChart from '../graphs/KagiGraph';
import Renkochart from '../graphs/RenkoChart';
import PointFigurechart from '../graphs/PointFigureChart';
import CandleStickChartHollow from '../graphs/CandleStickChartHollow';
import LineSeriesChart from '../graphs/LineSeriesChart';
import AreaSeriesChart from '../graphs/AreaSeriesChart';
import { fmoney } from 'utils';
import {
    Switch,
    Route,
    useParams,
    useRouteMatch,
    useHistory
  } from "react-router-dom";

const { SearchBar, ClearSearchButton } = Search;


export default function StockPriceGraphProfessional({
    searchData,
    stockdata,
    kline,
    watchlistdata
}) {
  const {width,height} = useWindowDimensions();
  const [openself,setopenself] = useState(false);
  const [timeP,setTimeP] = useState(7);
  const [id,setID] = useState(5)
  const [vertify, setvertify] = useState(true);
  const [add,setAdd] = useState(false)
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const handleMouseOver1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseOver2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);
  const [chooseChartType, setchooseChartType] = useState(0)
  const history = useHistory();


  const [show, setshow] = useState(false)
  const [showgoingback,setshowgoingback] = useState(false)
  const handleShow = () => {setshow(true)}
  const handleClose = () => {setshow(false)};




////////////////////////////指标//////////////////////////////
const [volumeshow, setvolumeshow] = useState(false)
const [emashow, setemashow] = useState(false)
const [bollingshow, setbollingshow] = useState(false)
const [macdshow, setmacdshow] = useState(false)
const [RSIshow, setRSIshow] = useState(false)
const [ATRshow, setATRshow] = useState(false)



   

  

///////////////choosing logic///////////////////////////
  const [graphnumber, setgraphnumber] = useState(0)
 

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

const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    hideSelectAll:true,
    hideSelectColumn: true,
    style:{background:"#E7ECFD"},
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect){
          history.push({
            pathname:"/eplatform/trade/pro",
            search:`?symbol=${row.代码}`,
            state:{symbol:row.代码}
          })
      }else{     
        
      }
    },
    
  };

const columns = [
    {
        dataField:'代码',
        text:'代码',
        sort: true,
        headerAttrs: {
          hidden: true
        },
        style: { width: "40%" },
        formatter: (cell) => {
          return (
            <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#2A2B30",
                lineHeight: "24px",
              }}
            >
              {cell}
            </div>
          )
      }
    },
    {
        dataField: '名称',
        text: '名称',
        sort: true,
        headerAttrs: {
            hidden: true
          },
        formatter: (cell) => {
          return (
            <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#2A2B30",
                lineHeight: "24px",
              }}
            >
              {cell}
            </div>
          )
      }
    },
    {
      dataField: '涨跌幅',
      text: '涨跌幅',
      // sort: true,
      headerAttrs: {
          hidden: true
        },
        formatter: (cell) => {
          return (
            <>
            {cell >= 0? 
             <>
             <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#FF3541",
                lineHeight: "24px",
              }}
            > +{cell}%</div>

            </> : <>
            <div
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "12px",
                fontSize: "14px",
                fontFamily: " Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                fontWeight: "400",
                color: "#42E083",
                lineHeight: "24px",
              }}
            > {cell}%</div>
            </>
            }
            </>
          )
      }
  },
]



/////////////////////////////////////////////////////////////////////////Type/////////////////////////////////////////////////////
  const CandleChart = () => {
      return(
        <CandleStickChart 
        width ={openself? width-348: width} 
        screeheight = {height - 192}
        choice = {"Trendline"} 
        ma ={[12,50]} 
        open = {openself} 
        volumeshow = {volumeshow} 
        emashow = {emashow} 
        macdshow = {macdshow}
        bollingshow = {bollingshow}
        graphnumber = {graphnumber}
        rsishow = {RSIshow}
        ATRshow = {ATRshow}
        />
      )
  }

  const LineChart = () => {
    return (
        <LineSeriesChart width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
    )
}

  const HeikinChart = () => {
      return (
          <HeikinAshiChart width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
      )
  }

  const AreaChart = () => {
    return (
        <AreaSeriesChart width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
    )
}

const CandleHollow = () => {
    return (
        <CandleStickChartHollow width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
    )
}

const KagiChart= () => {
    return (
        <KagiGraphChart width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
    )
}

const RendoChart= () => {
    return (
        <RendoChart width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
    )
}

const PointFigure = () => {
    return (
        <PointFigurechart width ={openself? width-348: width} choice = {"Trendline"} ma ={[12,50]} open = {openself} volumeshow = {volumeshow}/>
    )
}



  const chartChooseType ={
        0: CandleChart,
        1: LineChart,
        2: AreaChart,
        3: CandleHollow,
        4: HeikinChart,
        5: KagiChart,
        6: RendoChart,
        7: PointFigure,
  }

let ChartChoice = chartChooseType[chooseChartType]




   useEffect(() =>{
    const count = [macdshow,ATRshow,RSIshow]
    var number  = 0
    count.forEach((elem) =>{
        if (elem == true){
            number++
        }
    })
    setgraphnumber(number)
})

  useEffect(() => {
    if (width < 800 || height< 750){
         setshowgoingback(true)
         const interval = setInterval(() => {
            history.push('/eplatform/trade');
            clearInterval(interval);
        }, 2000);
    }
  })


   

    

    return (
    <>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body style ={{textAlign:"center"}}><div style={{
                      height:"24px",
                      fontSize:"20px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"bold",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>功能暂未开放</div></Modal.Body>
      </Modal>

      <Modal show={showgoingback} centered>
        <Modal.Body style ={{textAlign:"center"}}>
          <div style={{
                      height:"24px",
                      fontSize:"15px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>设备屏幕尺寸过小，专业版暂不支持，返回简易版本中...</div>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Body>
      </Modal>

    <div style={{width:"100%",height:"100%", minHeight:"1000px",minWidth:"1200px", display:"flex", justifyContent:"left"}}>


{/* /////HEADER/////////////////////////////////////////////////////////////////////////////////// */}

    <div>
    <div style={{width:openself? width-348 : "100%", minWidth:openself? 1200 - 348: 1200,minHeight:"6.2%", display:"flex",justifyContent:"left",borderBottom:"1px solid #E5E8EE"}}>
    <div style={{marginLeft:"2.5%" ,width:"37.7%",display:"flex",justifyContent:"left"}}>
                <Link style ={{color:"black", paddingTop:"24px", textDecoration:"none"}} to="../trade"><ArrowBack/></Link>
                <div style={{
                      height:"28px",
                      paddingTop:"24px", 
                      fontSize:"16px",    
                      fontFamily:" Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                      fontWeight:"bold",
                      marginLeft:"6px",
                      color:"#2A2B30",
                      lineHeight:"28px",
                      }}>{stockdata? stockdata.名称 : <Spinner animation="border"></Spinner>}</div>

                <div style={{
                      height:"28px",
                      paddingTop:"24px", 
                      fontSize:"16px",    
                      fontFamily:" Futura",
                      fontWeight:"500",
                      marginLeft:"6px",
                      color:"#2A2B30",
                      lineHeight:"28px",
                      }}>￥{stockdata? fmoney(stockdata?.最新价,2) 
                        : 
                      null
                      }</div>

                <div style={{
                      height:"28px",
                      paddingTop:"24px", 
                      fontSize:"16px",    
                      fontFamily:" Futura",
                      fontWeight:"500",
                      marginLeft:"6px",
                      color:stockdata?.涨跌幅>=0? "#EC1421" : "#42E083",
                      lineHeight:"28px",
                      }}>{stockdata?.涨跌幅>=0? <>(+{stockdata?.涨跌幅}%)</> : <>({stockdata?.涨跌幅}%)</> }</div>

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
              <Dropdown.Menu align="end" style={{position:'fixed',
                      width:"300px", border:"0px",Left:"10%"}}>
                     <KeyIndicators stockdata = {stockdata}/>
                
                </Dropdown.Menu>
              </Dropdown>
                      </div>
            </div>

            <div style={{width:"18.75%"}}>
                <Form >
                <ToolkitProvider  
                              keyField="代码"
                              data={ searchData? searchData : null }
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
                                 <div className ="scroll" style={{position:"absolute",marginLeft:"0%",
                                 zIndex:999, 
                                 width:"300px",
                                 background: "white",
                                 boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",
                                 }}>
                                <BootstrapTable 
                                { ...props.baseProps}
                                 hover = {true}
                                 condensed ={true}
                                 sort={ { dataField: 'label', order: 'asc' } }       
                                 classes ="custom-row-class"
                                 selectRow={selectRow}
                                />  
                                </div>
                               </Collapse>  
                                                          
                            </div>
                            )
                            }
                            </ToolkitProvider>


                </Form>

            </div>

            <div style={{width:"37%",display:"flex",justifyContent:"right"}}>
            <div style={{
                      height:"28px",
                      marginLeft:"16px",
                      marginTop:"12px", 
                      marginRight:"20px",
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
                <StockTradeComponet vertify={false} stockdata ={stockdata} />
                
                </Dropdown.Menu>

              </Dropdown>

              
              </div>
              <IconButton onClick={() => setopenself(!openself)}>
                  {openself? 
                    <FormatIndentIncrease/> 
                  : <FormatIndentDecrease/>   
                }    
              </IconButton>
              

            </div>   

        </div>


        <div style={{width:openself? width-348 : "100%", minWidth:openself? 1200 - 348: 1200,minHeight:"6.2%", display:"flex",justifyContent:"left",borderBottom:"1px solid #E5E8EE"}}>
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

            <div style={{width:"300px",marginRight:"2.5%",height:"53px",marginLeft:"2.5%",display:"flex",justifyContent:"right"}}>


                {chooseChartType == 0? <>
                    <Dropdown style={{marginTop:"8px", marginRight:"20px",marginLeft:"20px"}} >
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
              <Dropdown.Menu >
                <Dropdown.Item onClick={() => setchooseChartType(6)} ><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>趋势线</div></Dropdown.Item>
                <Dropdown.Item ><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>直线</div></Dropdown.Item>
                <Dropdown.Item><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>射线</div></Dropdown.Item>
                <Dropdown.Item onClick = {() => handleShow()}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>斐波那契回撤</div></Dropdown.Item>
                <Dropdown.Item onClick = {() => handleShow()}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>矩形</div></Dropdown.Item>
                <Dropdown.Item onClick = {() => handleShow()}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>趋势通道</div></Dropdown.Item>
                <hr/>
                <Dropdown.Item><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>删除所有画线</div></Dropdown.Item>
                
                </Dropdown.Menu>
              </Dropdown>
                </>
                 : null }
           

              <Dropdown style={{marginTop:"8px", marginRight:"20px",marginLeft:"20px"}}>
              <Dropdown.Toggle size="sm" style={{borderRadius:"4px 4px 4px 4px",background: "#F5F6F8",height:"36px",width:"72px",paddingLeft:"0px",paddingTop:0, border:"0"}} variant="primary" id="dropdown-basic">
                  
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
              <Dropdown.Menu style={{marginLeft:"0%", padding:"0"}}>
              {/* <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"left",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>均线指标：</div> */}
                {/* <Dropdown.Item >MA</Dropdown.Item> */}
                
                    <div style={{
                      height:"24px",
                      width:"100%",
                      fontSize:"14px",
                      paddingTop:"4px",
                      paddingBottom:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      display:"flex",
                      justifyContent:"space-evenly",
                      }}>
                          <Form.Check checked ={volumeshow} onClick={(e) => setvolumeshow(!volumeshow)}/>
                          成交量</div>
                <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      display:"flex",
                      justifyContent:"space-evenly",
                      }}><Form.Check checked ={emashow} onClick={(e) => setemashow(!emashow)}/>EMA</div>
                {/* <Dropdown.Item >SMA</Dropdown.Item>
                <Dropdown.Item >TMA</Dropdown.Item>
                <Dropdown.Item >WMA</Dropdown.Item> */}
                <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      display:"flex",
                      justifyContent:"space-evenly",
                      }}><Form.Check checked ={bollingshow} onClick={(e) => setbollingshow(!bollingshow)}/>布林线</div>
                <hr/>
                <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      display:"flex",
                      justifyContent:"space-evenly",
                      }}><Form.Check checked ={macdshow} onClick={(e) => setmacdshow(!macdshow)}/>MACD</div>
                <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      display:"flex",
                      justifyContent:"space-evenly",
                      }}><Form.Check checked ={RSIshow} onClick={(e) => setRSIshow(!RSIshow)}/>RSI</div>
                <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      display:"flex",
                      justifyContent:"space-evenly",
                      }}><Form.Check checked ={ATRshow} onClick={(e) => setATRshow(!ATRshow)}/>ATR</div>
                </Dropdown.Menu>
              </Dropdown>
       
              <Dropdown style={{marginTop:"8px", marginRight:"20px",marginLeft:"20px"}}>
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
                <Dropdown.Item onClick={() => setchooseChartType(0) }> <div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>蜡烛图</div></Dropdown.Item>
                      <Dropdown.Item  onClick={() => setchooseChartType(1)}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>折线图</div></Dropdown.Item>
                      <Dropdown.Item  onClick={() => setchooseChartType(2)}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>面积图</div></Dropdown.Item>
                <Dropdown.Item onClick={() => setchooseChartType(3)}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>平均K线图</div></Dropdown.Item>


                      
                     <Dropdown.Item  onClick={() => setchooseChartType(4)}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>卡吉图(Kagi)</div></Dropdown.Item>

                     <Dropdown.Item onClick={() => setchooseChartType(6)}><div style={{
                      height:"24px",
                      fontSize:"14px",
                      paddingTop:"4px",
                      textAlign:"center",    
                      fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                      fontWeight:"400",
                      color:"#2A2B30",
                      lineHeight:"24px",
                      }}>点数图</div></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

             
            </div>
            </div>


            <div style={{width:openself? width-348 : "100%",maxWidth:"100%"}}>
                <ChartChoice/>
            </div>


    </div>

    {openself? (<div style={{width:"348px",height:"100%",borderBottom:"1px solid #E5E8EE",backgroundColor:"yellow"}}>
                
            </div>   ) : null}
        
        </div>            
        </div>
    </div>

    {openself? (<div style={{width:"348px",height:"100%",borderBottom:"1px solid #E5E8EE",backgroundColor:"yellow"}}>
                <WatchList heightratio={(height-138)/height} watchlistdata ={watchlistdata}/>
            </div>   ) : null}



    </div>

    
    </>

    )
}