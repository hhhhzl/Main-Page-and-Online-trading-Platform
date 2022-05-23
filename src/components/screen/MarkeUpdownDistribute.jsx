import reaat, {useEffect, useState} from 'react'
import { Card, Collapse, Button, Row, Nav, Col, Badge, InputGroup, Form, Image } from 'react-bootstrap'
import './screen.css';
import AreaChartForMarketView from '../graphs/AreaChartForMarketView';
import BarChartMarket from '../graphs/BarChartMarket';


export default function MarketUpdownDistribute({widthRatio}) {

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
                            fontFamily:" Futura-Medium, Futura",
                            fontWeight:"500",
                            color:"#000000",
                            lineHeight:"28px",
                            }}>8,035</div>
                            </div>

        
        </div>

        <div style={{marginTop:"24px", width:widthRatio *0.9,marginLeft:"5%", height:widthRatio *0.4761}}>
            <BarChartMarket width = {widthRatio * 0.9}/>
            <div style={{height:"42px", backgroundColor:"red"}}>
                预留涨跌
            </div>
        </div>
        

        


        </>
    )
}