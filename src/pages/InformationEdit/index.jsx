import React, { useState, useEffect, useRef, useContext } from "react";
import useWindowDimensions from "components/../utils/sizewindow";
import PageHeader from "components/screen/PageHeader";
import Notice from "components/webpage/chat/Notice";
import { getPlatformType } from "utils";
import HeaderCreate from "components/MainPage/header";
import { useHistory } from "react-router-dom";
import EditData from "components/screen/EditUserProfile";
import AuthContext from "context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "redux/reducers/users/usersSlices";

export default ({searchData}) => {
    let {apikey, user} = useContext(AuthContext)
    const { width, height } = useWindowDimensions();
    const [platformType, setPlatformType] =  useState(getPlatformType())
    const {data} = useSelector(state => state.userInfo)
    const [load, setload] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (load){
            console.log(user.user_id)
            dispatch(fetchUser(user.user_id))
            setload(false)
        }
    },[load,dispatch])
    
    return (
        <>
        {
            platformType == null ? <HeaderCreate/> : <PageHeader searchData = {searchData} platformType ={platformType} showrankingOnly = {apikey? null :true}/>
        }
      
           <EditData platformType ={platformType} userName = {user?.username} userget ={data? data: null}/>
        

        </>
    );
}