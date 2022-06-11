import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image } from 'react-bootstrap'
import './screen.css';
import AreaChartForMarketView from '../graphs/AreaChartForMarketView';
import BarChartMarket from '../graphs/BarChartMarket';
import "./plateCard.css";
import {fmoney} from "../../utils/index"


export default function MarketUpdownDistribute({widthRatio, searchData}) {

    const [selected, setselected] = useState(0)
    const [stockforprop, setstockforprop] = useState(null)
    const [dataSource, setdataSource] = useState(null)

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

    useEffect(() => {
        if (searchData) {
            const [updown, stockdata] = stockUpdownFilter()
           console.log(updown)
           setstockforprop(stockdata)
           setdataSource(updown)
        }
        
    },[searchData])
    
    const stockUpdownFilter = (props) =>{
        const propsdata = {"<-15%":0,  "-15~-10%":0, "-10~-5%":0, "-5~-2%":0, "-2~-0%":0, "0%":0, "0~2%":0, "2~5%":0, "5~10%":0, "10~15%":0,">15%":0}
        const label = {"<-15%":0,  "-15~-10%":0, "-10~-5%":0, "-5~-2%":0, "-2~-0%":0, "0%":2, "0~2%":1, "2~5%":1, "5~10%":1, "10~15%":1,">15%":1}
        const updown = {"上涨家数":0 , "下跌家数": 0 ,"不涨不跌家数":0}
        searchData.forEach((elem) =>{
            if (elem.涨跌幅 == null){
              console.log(elem)
            }else if (elem.涨跌幅 <= -15){
                propsdata['<-15%'] = propsdata['<-15%'] +1 
                updown.下跌家数 = updown.下跌家数 + 1 
            } else if (-15 < elem.涨跌幅 && elem.涨跌幅 <= -10){
                propsdata['-15~-10%'] = propsdata['-15~-10%'] + 1 
                updown.下跌家数 = updown.下跌家数 + 1 

            } else if (-10 < elem.涨跌幅 && elem.涨跌幅 <= -5){
                propsdata['-10~-5%'] = propsdata['-10~-5%'] + 1 
                updown.下跌家数 = updown.下跌家数 + 1 

            } else if (-5 < elem.涨跌幅 && elem.涨跌幅 <= -2){
                propsdata['-5~-2%'] = propsdata['-5~-2%'] + 1 
                updown.下跌家数 = updown.下跌家数 + 1 

            } else if (-2 < elem.涨跌幅 && elem.涨跌幅 < 0){
                propsdata['-2~-0%'] = propsdata['-2~-0%'] + 1 
                updown.下跌家数 = updown.下跌家数 + 1 






            } else if (0 < elem.涨跌幅 && elem.涨跌幅 <= 2){
                propsdata['0~2%'] = propsdata['0~2%'] + 1 
                updown.上涨家数 = updown.上涨家数 + 1 

            } else if (2 < elem.涨跌幅 && elem.涨跌幅 <= 5){
                propsdata['2~5%'] = propsdata['2~5%'] + 1 
                updown.上涨家数 = updown.上涨家数 + 1 

            }else if (5 < elem.涨跌幅 && elem.涨跌幅 <= 10){
                propsdata['5~10%'] = propsdata['5~10%'] + 1 
                updown.上涨家数 = updown.上涨家数 + 1 

            }else if (10 < elem.涨跌幅 && elem.涨跌幅 <= 15){
                propsdata['10~15%'] = propsdata['10~15%'] + 1 
                updown.上涨家数 = updown.上涨家数 + 1 

            }else if (15 < elem.涨跌幅){
                propsdata['>15%'] = propsdata['>15%'] + 1 
                updown.上涨家数 = updown.上涨家数 + 1 

            }else if (elem.涨跌幅 == 0 && elem.涨跌幅 != null){
                propsdata['0%'] = propsdata['0%'] + 1 
                updown.不涨不跌家数 = updown.不涨不跌家数 + 1 
            }

        })
        console.log("结果",propsdata, updown)
        const stockpropsData = []
        for (const [key, value] of Object.entries(propsdata)) {
            const single = {"name":key, "number":value,"color":label[key]}
            console.log(single);
            stockpropsData.push(single)
          }
        return [updown, stockpropsData]
    }

    

    // useEffect(() => {
    //     setstockforprop(stockforprop)
    //     setupAndDown(upAndDown)
    // },[stockforprop,upAndDown])

    return (
        <>
        <div style={{width:"100%", height:"40px", marginTop:"24px", display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"60%", display:"flex",marginLeft:"5%", justifyContent:"left"}}>
   
                        <div style={{
                        position:"relative",
                        fontSize:"24px",
                        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight:"bold",
                        color:"#2A2B30",
                        lineHeight:"40px",
                        letterSpacing:"1px",
                        }}>市场涨跌分布</div>
                        <div style={{
                        position:"relative",
                        marginLeft:"5%",
                        paddingTop:"10px",
                        fontSize:"16px",
                        fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei U",
                        fontWeight:"400",
                        color:"#6E7184",
                        lineHeight:"28px",
                        letterSpacing:"1px",
                        }}>资金净流入</div>
                </div>



                <div style={{width:"25%",marginRight:"48px", display:"flex", justifyContent:"right"}}>
                            <div style={{
                            position:"relative",
                            paddingTop:"10px",
                            fontSize:"16px",
                            fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                            fontWeight:"400",
                            color:"#9C9EAC",
                            lineHeight:"28px",
                            }}>总计: {" "}</div>
                            <div style={{
                            position:"relative",
                            paddingTop:"11px",
                            marginLeft:"5px",
                            height:"13.43%",
                            fontSize:"16px",
                            fontFamily:" Futura",
                            fontWeight:"500",
                            color:"#000000",
                            lineHeight:"28px",
                            }}>{searchData? searchData.length : "无数据"}</div>
                            </div>

        
        </div>

        <div style={{marginTop:"24px", width:widthRatio *0.9,marginLeft:"5%", height:widthRatio *0.4761}}>
            <BarChartMarket width = {widthRatio * 0.9} dataprops = {stockforprop}/>
            <div style={{height:"42px"}}>
                {dataSource? (
                    <div className="plate-line">
                    <div
                      className="plate-line-wrapper"
                      style={{
                        width:
                          (dataSource.下跌家数 /
                            (dataSource.下跌家数 +
                              dataSource.上涨家数 +
                              dataSource.不涨不跌家数)) *
                            100 +
                          "%",
                        display: dataSource.下跌家数 == 0 ? "none" : "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div className="plate-line-down"></div>
                      <div
                        className="plate-linfmoneye-text"
                        style={{ textAlign: "start", color: "#16CE62", fontSize: "16px",
                        fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                        fontWeight: 400,
                        lineHeight:"28px"
                      }}
                      >
                        下跌: {dataSource.下跌家数}
                        {/* {fmoney(dataSource.下跌家数,0)} */}
                        
                      </div>
                    </div>
                    <div
                      className="plate-line-wrapper"
                      style={{
                        width:
                          (dataSource.不涨不跌家数 /
                            (dataSource.下跌家数 +
                              dataSource.上涨家数 +
                              dataSource.不涨不跌家数)) *
                            100 +
                          "%",
                        margin: "0px 4px",
                      }}
                    >
                      <div className="plate-line-center"></div>
                      <div
                        className="plate-line-text"
                        style={{ textAlign: "center", color: "#9C9EAC" }}
                      >
                        {/* {dataSource.不涨不跌家数} */}
                      </div>
                    </div>
                    <div
                      className="plate-line-wrapper"
                      style={{
                        width:
                          (dataSource.上涨家数 /
                            (dataSource.下跌家数 +
                              dataSource.上涨家数 +
                              dataSource.不涨不跌家数)) *
                            100 +
                          "%",
                        display: dataSource.上涨家数 == 0 ? "none" : "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div className="plate-line-up"></div>
                      <div
                        className="plate-line-text"
                        style={{ textAlign: "end", color: "#EC1421",fontSize: "16px",
                        fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
                        fontWeight: 400,
                        lineHeight:"28px" }}
                      >
                        上涨: {dataSource.上涨家数}
                      </div>
                    </div>
                  </div>

                ) : null}
            
            </div>
        </div>
        

        


        </>
    )
}