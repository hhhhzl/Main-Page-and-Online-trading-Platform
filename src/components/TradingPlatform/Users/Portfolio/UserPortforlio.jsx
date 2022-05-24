import React,{useState, useEffect, useRef} from "react";
import PageHeader from "../../../screen/PageHeader";
import useWindowDimensions from "../../../../utils/sizewindow";
import PorforlioMoveGraph from "../../../screen/PortforlioMoveGraph";
import WatchList from "../../../screen/WatchList";
import KeyIndicators from "../../../screen/KeyIndicatorSimple";
import PendingOrder from "../../../screen/PendingOrder";
import LeadingIndustry from "../../../screen/AllIndustry";


export default function UserPortfolio(props) {
    const {width,height} = useWindowDimensions();
    const listRef = useRef();

    // The size of the list
    // It will be updated later

    return (
        <>
        <PageHeader/>
        <div  style={{marginTop:height*0.075,width:"100%",display:"flex",justifyContent:"space-between"}}>

            <div style={{width:"auto",maxWidth:"18.75%",backgroundColor:"blue"}}></div>
        <div style={{width:"1200px",minWidth:"fix-content",display:"flex",justifyContent:"right"}}>
        </div>
        <div style={{width:"auto",maxWidth:"18.75%",backgroundColor:"blue"}}></div>
        </div>





        <div  style={{marginTop:0,width:"100%",minHeight:"500px",display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"auto",minHeight:"500px",maxWidth:"18.75%",backgroundColor:"blue"}}></div>


        <div style={{width:"1200px",minHeight:"500px",minWidth:"fix-content",display:"flex",justifyContent:"space-between"}}>
            <div style={{width:"63.3%"}}>
                <PorforlioMoveGraph  widthratio ={1200 * 0.633}/>
                <div style={{marginTop:height*0.0564}}>
                  <PendingOrder heightProp={0.23} modalHeight={0.7}/>
                </div>   
            </div>

            <div style={{width:"30%"}}>
                <WatchList heightratio = {0.63} />
            </div>

        </div>
        <div style={{width:"auto",minHeight:"500px",maxWidth:"18.75%",backgroundColor:"blue"}}></div>
        </div>

        </>
    )
}