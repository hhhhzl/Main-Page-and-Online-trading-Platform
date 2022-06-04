import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import { useHistory } from "react-router-dom";
import EditData from "components/screen/EditUserProfile";
import AuthContext from "context/AuthContext";

export default ({searchData}) => {
    let {apikey} = useContext(AuthContext)
    const { width, height } = useWindowDimensions();
    const [platformType, setPlatformType] =  useState(getPlatformType())
    
    return (
        <>
        {
            platformType == null ? <HeaderCreate/> : <PageHeader searchData = {searchData} platformType ={platformType} showrankingOnly = {apikey? null :true}/>
        }
      
           <EditData platformType ={platformType}/>
        

        </>
    );
}