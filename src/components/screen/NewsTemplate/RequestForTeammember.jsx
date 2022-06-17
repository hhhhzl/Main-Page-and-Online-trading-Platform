
import { apiGetUser } from 'api/main_platform/users'
import React, { Component, useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { fetchUser } from 'redux/reducers/users/usersSlices'
import { apiDisactiveMessgae, apiGetCompetitionRequests, apiGetTeamAccount } from 'api/main_platform/competitions'
import { fetchNews } from 'redux/reducers/News/newsSlice'
import AuthContext from 'context/AuthContext'

export default function RequestForTeamMember({id, type, messagage_id}){
    const [load,setload] = useState(false)
    const [sumbit, setsumbit] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const [teamname, setteamname] = useState(null)
    const { status } = useSelector((state) => state.userInfo);
    const [agree, setagree] = useState(false)
    const {team, user} = useContext(AuthContext)


    const disagreeJoin = async (item) =>{
        try{
            const response = await apiDisactiveMessgae(item)
            if (response.data.msg == "OK."){
                setagree(true)
            }
        }catch(e){
            console.error('cancel join', e)
        }
    }

    useEffect(() => {
        if (agree){
             dispatch(fetchNews({team:null, user:user.user_id}))
             setagree(false)
        }
    },[agree])

    useEffect(()=>{
        if (!load){
            GetTeam(id)
            setload(true)
        }
    },[load])

    const GetTeam = async (id) =>{
        try{
            const request = await apiGetTeamAccount(id)
            const team_info = request.data.data
            setteamname(team_info.metadata.name)
        }catch(e){

        }
    }




    return(
        <>
        <div>
             您的报名信息已收录！您的团队加入申请已经发送团队 <strong>{teamname}</strong>。<span style={{color:"red"}}>请注意：</span>您尚未完成报名！请您联系您的队长通过您的团队申请，完成组队，即报名成功！
                  
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
                onClick = {() => disagreeJoin(messagage_id)} 
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
                    >撤销请求</div>
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
                <Button 
                disabled={true} 
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
                    >请求已被拒绝</div>
                </Button>
                </>
                :
                type == "W"?
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
                    >请求已撤销</div>
                </Button>
                </>
                :
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
                    >请求已过期，请重新申请</div>
                </Button>
                </>
            }
            
        </div>
        </>
    )
}