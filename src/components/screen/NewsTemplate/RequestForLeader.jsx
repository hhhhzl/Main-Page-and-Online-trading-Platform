
import { apiGetUser } from 'api/main_platform/users'
import React, { Component, useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { fetchUser } from 'redux/reducers/users/usersSlices'
import { apiApproveCompetitionRequest, apiDisactiveMessgae, apiGetCompetitionRequests, apiGetTeamAccount, apiSubmitTeamAccount } from 'api/main_platform/competitions'
import { fetchNews } from 'redux/reducers/News/newsSlice'
import AuthContext from 'context/AuthContext'

export default function RequestForLeader({
    id, 
    type,
    messagage_id,
    setload
}){
    const [loadafter, setloadafter] = useState(false)
    const [username, setusername] = useState(null)
    const [sumbit, setsumbit] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const { status } = useSelector((state) => state.userInfo);
    const { state } = useSelector((state) => state.news);
    const [agree, setagree] = useState(false)
    const [disagree, setdisagree] = useState(false)
    const {team, user} = useContext(AuthContext)

    const GetUser = async (item) =>{
        try{
            const request = await apiGetUser(item)
            const user_info = request.data.data
            setusername(user_info.username)
        }catch(e){

        }
    }
    useEffect(()=>{
        if (id){
            GetUser(id)
        } 
    },[id])

    useEffect(() =>{
        if(sumbit && status == "fulfilled"){
            history.push("/personal")
            setsumbit(false)
        }
    },[sumbit,status])

    const applicationState = async (item) =>{
        try{
            const response = await apiApproveCompetitionRequest(item)
            if (response.data.msg == "OK."){
                setagree(true)
            }
        }catch(e){
            console.log()
        }
    }

    const disagreeJoin = async (item) =>{
        try{
            const response = await apiDisactiveMessgae(item)
            if (response.data.msg == "OK."){
                setdisagree(true)
            }
        }catch(e){
            console.log()
        }
    }

    useEffect(() => {
        if (agree && team && user){
            console.log(team, user)
             dispatch(fetchNews({team:team.metadata, user_id:user.user_id}))
             setloadafter(true)
             getteamnumber()
             setagree(false)
        }
    },[agree, team, user])

    useEffect(() => {
        if (disagree && team && user){
             dispatch(fetchNews({team:team.metadata,user:user.user_id}))
             setloadafter(true)
             setdisagree(false)
        }
    },[disagree])

    // useEffect(() =>{
    //     if (state == "fulfilled" && loadafter){
    //         setload(false)
    //         setloadafter(false)
    //     }
    // },[loadafter,state])


    const getteamnumber = async () =>{
        try
        {
            const response = await apiGetTeamAccount(team.metadata.id)
            const teamnumber = response.data.data.metadata.members_count
            const teamStatus = response.data.data.metadata.finalized
            if (teamnumber == 4 && teamStatus == false){
                try{
                    const response = await apiSubmitTeamAccount(team.metadata.id)
                }catch(e){
                    console.error(e);
                }   
            }
        }catch(e){
            console.log(e)
        }
    }


    // useEffect(() =>{
    //     console.log(id)
    // })




    return(
        <>
        <div>
               <Link style ={{color:"black"}} onClick = {() => {
                   dispatch(fetchUser(id));
                  setsumbit(true)}}> <strong>{username}</strong></Link> 申请加入您的团队，等待您的通过... 请点击下方按钮同意或者拒绝对方加入团队。
        </div>
        <br/>
              UFA 组委会
        <br/>
        <br/>
        <div 
        
        style={{display:"flex",justifyContent:"right"}}>
            {
                type == "P"? 
                <>
                <Button 

                onClick = {() => applicationState(messagage_id)} 
                style={{
                    height: "48px",
                    background: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                    boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                    borderRadius: "4px 4px 4px 4px",
                    marginRight:"12px"}}>
                    <div
                    style={{
                        height: "24px",
                        fontSize: "14px",
                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        lineHeight: "24px",
                    }}
                    >接受请求</div>
                </Button>
                
                <Button 
                onClick = {() => disagreeJoin(messagage_id)} 
                style={{ 
                    height: "48px",
                    background: "#F5F6F8",
                    borderRadius: "4px 4px 4px 4px",
                    border:0,
                    marginRight:"36px"}}>
                    <div
                    style={{
                        height: "24px",
                        fontSize: "14px",
                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight: "bold",
                        color: "#2A2B30",
                        lineHeight: "24px",
                    }}
                    >拒绝请求</div>
                </Button>
                </>
                :
                type == "A"? 

                <>
                <Button disabled={true}
                 style={{
                    height: "48px",
                    background: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                    boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                    borderRadius: "4px 4px 4px 4px",
                    marginRight:"36px"}}>
                    <div
                    style={{
                        height: "24px",
                        fontSize: "14px",
                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        lineHeight: "24px",
                    }}
                    >请求已通过</div>
                </Button>
                </>
                :
                type == "D"? 
                <>
                <Button disabled={true} 
                style={{ 
                    height: "48px",
                    background: "#F5F6F8",
                    border:0,
                    borderRadius: "4px 4px 4px 4px",
                    marginRight:"36px"}}>
                    <div
                    style={{
                        height: "24px",
                        fontSize: "14px",
                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight: "bold",
                        color: "#2A2B30",
                        lineHeight: "24px",
                    }}
                    >请求已拒绝</div>
                </Button>
                </>
                :
                type == "W"? 
                <>
                <Button disabled={true} 
                style={{ 
                    height: "48px",
                    background: "#F5F6F8",
                    borderRadius: "4px 4px 4px 4px",
                    border:0,
                    marginRight:"36px"}}>
                    <div
                    style={{
                        height: "24px",
                        fontSize: "14px",
                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight: "bold",
                        color: "#2A2B30",
                        lineHeight: "24px",
                    }}
                    >用户已撤销</div>
                </Button>
                </>
                :
                <Button disabled={true} 
                style={{ 
                    height: "48px",
                    background: "#F5F6F8",
                    border:0,
                    borderRadius: "4px 4px 4px 4px",
                    marginRight:"36px"}}>
                    <div
                    style={{
                        height: "24px",
                        fontSize: "14px",
                        fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                        fontWeight: "bold",
                        color: "#2A2B30",
                        lineHeight: "24px",
                    }}
                    >请求已过期</div>
                </Button>
            }
            
        </div>
        </>
    )
}