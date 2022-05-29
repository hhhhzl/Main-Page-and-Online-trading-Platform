import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import { useHistory } from "react-router-dom";
import PersonalHomepage from "components/screen/PersonalHomepage";

export default ({searchData}) => {
    const { width, height } = useWindowDimensions();
    const [platformType, setPlatformType] =  useState(getPlatformType())
    
    return (
        <>
        {
            platformType == null ? <HeaderCreate/> : <PageHeader searchData = {searchData} />
        }
            <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center"}}>
                <div style={{marginTop:platformType == null? "112px" :"48px",width:"1200px"}} >
                   <PersonalHomepage/>
                </div>
            </div>
        </>
    );
}