import React, {useState} from 'react';
import NavBarTest from '../../navBar';
import { Bookmark } from "@material-ui/icons";
import SideMenuUsers from '../sideMenuUsers';
import useWindowDimensions from "../../../../utils/sizewindow";
import { Col, Row, Card, CardGroup, Collapse, Button, Form , Accordion} from "react-bootstrap";
import '../../eplatform.css'
import MarketTopGains from '../../../screen/MarketTopGainStocks';
import MarketStockSearch from '../../../screen/MarketStockSearch';
import AreaChart from '../../../graphs/areaChart';
import MarketOverview from '../../../screen/MarketOverView';
import { flexbox } from '@material-ui/system';
import LeadingIndustry from '../../../screen/LeadingIndustry';

export default function UserMarket() {
    const {width,height} = useWindowDimensions();
    const [extend, setExtend] = useState(true)

    const extendbar = () => {
        setExtend(!extend)
      }
    return (
        
    <> 
    {width>700? <>
        <div style={{width:"100%",minWidth:"920px",minHeight:"300px",display:"flex",justifyContent:"space-between"}}>
        <div style={{width:"50%", height:height*0.6}}>
            <MarketOverview widthRatio = {width>920? width/2 : 920/2}/>
        </div>
        <div style={{width:"1px",height:height*0.6,backgroundColor:"#E5E8EE"}}></div>
        <div style={{width:"50%",height:height*0.6}}>
            <MarketOverview widthRatio = {width>920? width/2 : 920/2}/>
        </div> 
    </div>
    </> : <>
        <div style={{width:"100%", height:height*0.6, minHeight:"300px"}}>
            <MarketOverview widthRatio = {width}/>
        </div>
        <div style={{width:"100%",height:height*0.6}}>
            <MarketOverview widthRatio = {width}/>
        </div> 
    
    </>}
   

    <div style ={{marginTop:height*0.056,margin:"48px"}}>
        <LeadingIndustry/>

    </div>

    </>

    )
}