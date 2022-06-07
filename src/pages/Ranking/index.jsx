import RankingPang from "components/Competition/RankingPang";
import PageHeader from "components/screen/PageHeader";
import AuthContext from "context/AuthContext";
import { useContext, useState } from "react";
import { getPlatformType } from "utils";

export default ({searchData}) => {
    let {apikey} = useContext(AuthContext)
    const [platformType, setPlatformType] =  useState(getPlatformType())
    return (
        <>
            <PageHeader searchData = {searchData} platformType = {platformType} showrankingOnly = {apikey? null :true}/>
            <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center", background:"#F5F6F8"}}>
                <div style={{width:"1200px"}} >
                   <RankingPang />
                </div>
            </div>
            
        </>
    )
}