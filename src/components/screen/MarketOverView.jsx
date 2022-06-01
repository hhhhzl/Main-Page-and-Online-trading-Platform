import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image } from 'react-bootstrap'
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
import AreaChart from '../graphs/areaChart';
import AreaChartForMarketView from '../graphs/AreaChartForMarketView';

export default function MarketOverview({widthRatio}) {

    const [selected, setselected] = useState(0)
    const [upDown, setUpdown] = useState(false)

    const data = [
        {
        id:0,
        name:"上证",
        price:318.46,
        updown:-3.37,
        percent: "-1.05%",
    },
    {
        id:1,
        name:"沪深",
        price:318.46,
        updown:-3.37,
        percent: "-1.05%",
    },
    {   
        id:2,
        name:"创业板",
        price:318.46,
        updown:-3.37,
        percent: "-1.05%",
    },
    {
        id:3,
        name:"科创板",
        price:318.46,
        updown:-3.37,
        percent: "-1.05%",
    },
    {
        id:4,
        name:"恒生指数",
        price:318.46,
        updown:-3.37,
        percent: "-1.05%",
    },


    ]

    // useEffect(() => {
    //     setselected(selected)
    //     console.log(selected)
    // },[selected])

    return (
        <>
        <div style={{
        position:"relative",
        paddingTop:"24px",
        marginLeft:"5%",
        paddingBottom:"24px",
        height:"13.43%",
        fontSize:"24px",
        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
        fontWeight:"bold",
        color:"#2A2B30",
        lineHeight:"40px",
        letterSpacing:"1px",
        }}>指数</div>

        <div style={{
        position:"relative",
        marginLeft:"5%",
        height:"86.6%",
        width:"95%",
        display:'flex',
        justifyContent:"left"
        }}>
                    <div style={{
                position:"relative",
                width:"20.83%",
                }}
                >

                    {
                        data.map((elem) => {
                            return (
                                <Button
                                onClick={() => setselected(elem.id)}
                                 style={{width:"100%", height:"16.23%",
                                position:"relative",
                                textAlign:"left",
                                borderWidth:"0",
                                background: "#FFFFFF",
                                zIndex: selected == elem.id? 1000 : 1, 
                                borderRadius: "4px 4px 4px 4px",
                                opacity: 1,  
                                // marginBottom:"3px",
                                padding:"0",
                            }} variant="outline-success"
                            
                            >
                        <div style={{display:"flex",justifyContent:"left",
                        boxShadow: selected == elem.id? "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)" : null,
                         width:"100%",height:"100%"}}>
                            <div style={{width:"5.26%",height:"100%",borderRadius: "4px 0px 0px 4px",backgroundColor: selected == elem.id? upDown? "#16CE62": "#FF3541" : null}}></div>

                            <div style ={{width:"94.74%",height:"100%"}}>
                            <div style={{
                                    paddingTop:"4.21%",
                                    paddingLeft:"5.5%",
                                    paddingBottom:"4.21%",
                                    // paddingBottom:"24px",
                                    // marginLeft:"-70%",
                                    height:"30.4%",
                                    fontSize:"16px",
                                    fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                    fontWeight:"bold",
                                    color:"#2A2B30",
                                    lineHeight:"28px",  
                                    }}>{elem.name}</div>

                                    <div style={{
                                    paddingTop:"4.21%",
                                    paddingLeft:"5.5%",
                                    paddingBottom:"4.21%",
                                    // marginLeft:"-65%",
                                    height:"26.09%",
                                    fontSize:"14px",
                                    fontFamily:"Futura",
                                    fontWeight:"500",
                                    color:"#2A2B30",
                                    lineHeight:"24px",  
                                    }}>{elem.price}</div>

                                    <div style={{
                                    paddingTop:"4.21%",
                                    paddingLeft:"5.5%",
                                    paddingBottom:"4.21%",
                                    // paddingLeft:"10px",
                                    // paddingBottom:"24px",
                                    // marginLeft:"-50%",
                                    height:"26.09%",
                                    fontSize:"14px",
                                    fontFamily:"Futura",
                                    fontWeight:"500",
                                    color:upDown? "#16CE62": "#FF3541",
                                    lineHeight:"24px",  
                                    }}>{elem.updown}{" "}{elem.percent}</div>
                            </div>
                        </div>
                    </Button>

                            )
                        })
                    }

                    
                    </div>








                    <div style={{
                position:"relative",
                height:"100%",
                width:"79.17%",
                }}
                >
                    <AreaChartForMarketView width={widthRatio * 0.7518} upDown ={upDown}/>
                    <div style={{width:"85%",height:"20px",marginTop:"2.33%",display:"flex",justifyContent:"space-between"}}>
                                    <div style={{
                                    // marginLeft:"-65%",
                                   
                                    fontSize:"12px",
                                    fontFamily:"Futura",
                                    fontWeight:"500",
                                    color:"#9C9EAC",
                                    lineHeight:"20px",  
                                    letterSpacing: "1px"
                                    }}>9:30</div>
                                    <div style={{
                                    // marginLeft:"-65%",
                                   
                                    fontSize:"12px",
                                    fontFamily:"Futura",
                                    fontWeight:"500",
                                    color:"#9C9EAC",
                                    lineHeight:"20px",  
                                    letterSpacing: "1px"
                                    }}>11:30</div>
                                    <div style={{
                                    // marginLeft:"-65%",
                                   
                                    fontSize:"12px",
                                    fontFamily:"Futura",
                                    fontWeight:"500",
                                    color:"#9C9EAC",
                                    lineHeight:"20px",  
                                    letterSpacing: "1px"
                                    }}>15:00</div>

                    </div>

                    </div>


        </div>


        </>
    )
}