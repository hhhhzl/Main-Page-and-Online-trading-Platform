import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import { useHistory } from "react-router-dom";
import AuthContext from "context/AuthContext";

export default ({searchData}) => {
    const { width, height } = useWindowDimensions();
    const {apikey} = useContext(AuthContext)
    const [platformType, setPlatformType] =  useState(getPlatformType())
    
    return (
        <>
        {
            platformType == null ? <HeaderCreate/> : <PageHeader searchData = {searchData} platformType = {platformType}  showrankingOnly ={apikey? null : true}/>
        }
            <div style={{width:"100%",height:"100%"}}>
                <div style={{marginTop:platformType == null? "112px" :"48px",marginLeft:width > 1500 ? "18.75%" : "5%",marginRight:width > 1500 ? "18.75%" : "5%"}} >
                   <Notice/>
                </div>
            </div>
        </>
    );
}