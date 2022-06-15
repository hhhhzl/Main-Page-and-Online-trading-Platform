
import { apiGetUser } from 'api/main_platform/users'
import React, { Component, useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { fetchUser } from 'redux/reducers/users/usersSlices'
import { apiGetCompetitionRequests, apiGetTeamAccount } from 'api/main_platform/competitions'
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


    const disagreeJoin = async (id) =>{
        try{
            const response = await apiGetCompetitionRequests(id)
            if (response.data.msg == "OK."){
                setagree(true)
            }
        }catch(e){
            console.log()
        }
    }

    useEffect(() => {
        if (agree){
             dispatch(fetchNews(null,user.user_id))
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
                style={{marginRight:"20px"}}>
                    撤销
                </Button>
                </>
                :
                type == "A"?
                <>
                <Button disabled={true} style={{marginRight:"20px"}}>
                    已通过
                </Button>
                </>
                :
                type == "D"?
                <>
                <Button disabled={true} style={{marginRight:"20px"}}>
                    已被拒绝
                </Button>
                </>
                :
                type == "W"?
                <>
                <Button disabled={true} style={{marginRight:"20px"}}>
                    已撤销
                </Button>
                </>
                :
                <>
                <Button disabled={true} style={{marginRight:"20px"}}>
                    已过期，请重新申请
                </Button>
                </>
            }
            
        </div>
        </>
    )
}