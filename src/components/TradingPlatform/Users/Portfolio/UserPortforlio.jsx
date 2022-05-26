import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PorforlioMoveGraph from "components/screen/PortforlioMoveGraph";
import WatchList from "components/screen/WatchList";
import KeyIndicators from "components/screen/KeyIndicatorSimple";
import PendingOrder from "components/screen/PendingOrder";
import LeadingIndustry from "components/screen/AllIndustry";
import PageHeader from "components/screen/PageHeader";

export default function UserPortfolio(props) {
    const { width, height } = useWindowDimensions();
    const listRef = useRef();

    // The size of the list
    // It will be updated later

    return (
        <>
            <PageHeader />
            <div style={{ marginTop: height * 0.075, width: "100%", display: "flex", justifyContent: "space-between" }}>

<<<<<<< HEAD
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
                <WatchList heightratio = {0.63} searchwidth={1200 * 0.3} />
            </div>
=======
                <div style={{ width: "auto", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
                <div style={{ width: "1200px", minWidth: "fix-content", display: "flex", justifyContent: "right" }}>
                </div>
                <div style={{ width: "auto", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
            </div>

            <div style={{ marginTop: 0, width: "100%", minHeight: "500px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
>>>>>>> 2171c4559c59fbc8d8d4054b607cd5f20e0c8a24


                <div style={{ width: "1200px", minHeight: "500px", minWidth: "fix-content", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "63.3%" }}>
                        <PorforlioMoveGraph widthratio={1200 * 0.633} />
                        <div style={{ marginTop: height * 0.0564 }}>
                            <PendingOrder heightProp={0.23} modalHeight={0.7} />
                        </div>
                    </div>

                    <div style={{ width: "30%" }}>
                        <WatchList heightratio={0.63} />
                    </div>

                </div>
                <div style={{ width: "auto", minHeight: "500px", maxWidth: "18.75%", backgroundColor: "blue" }}></div>
            </div>

        </>
    )
}