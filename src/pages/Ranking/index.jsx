import RankingPang from "components/Competition/RankingPang";
import PageHeader from "components/screen/PageHeader";
import AuthContext from "context/AuthContext";
import { useContext, useState } from "react";
import { getPlatformType } from "utils";
import useWindowDimensions from "utils/sizewindow";

export default ({searchData}) => {
    const { width, height } = useWindowDimensions();
    let {apikey} = useContext(AuthContext)
    const [platformType, setPlatformType] =  useState(getPlatformType())
    return (
        <>
            <PageHeader searchData = {searchData} platformType = {platformType} showrankingOnly = {apikey? null :true}/>
            <div style={{width:"100%",height:height,top: 0,
                    paddingTop:"64px",display:"flex",justifyContent:"space-between", background:"#F5F6F8"}}>
            <div style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}></div>
                <div style={{width:"1200px"}} >
                   <RankingPang />
                </div>
                <div style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}></div>
            </div>
            
        </>
    )
}