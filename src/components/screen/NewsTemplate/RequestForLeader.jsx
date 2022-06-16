
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

export default function RequestForLeader({id, type, messagage_id}){
    const [load,setload] = useState(false)
    const [username, setusername] = useState(null)
    const [sumbit, setsumbit] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const { status } = useSelector((state) => state.userInfo);
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
        if (agree){
             dispatch(fetchNews({team:team.metadata.id, user:user.user_id}))
             getteamnumber()
             setagree(false)
        }
    },[agree])

    useEffect(() => {
        if (disagree){
             dispatch(fetchNews({team:team.metadata.id,user:user.user_id}))
             setdisagree(false)
        }
    },[disagree])


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
                style={{marginRight:"20px"}}>
                    同意
                </Button>
                
                <Button 
                onClick = {() => disagreeJoin(messagage_id)} 
                style={{marginRight:"20px"}}>
                    拒绝
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
                    已拒绝
                </Button>
                </>
                :
                type == "W"? 
                <>
                <Button disabled={true} style={{marginRight:"20px"}}>
                    用户已撤销
                </Button>
                </>
                :
                <Button disabled={true} style={{marginRight:"20px"}}>
                    已过期
                </Button>
            }
            
        </div>
        </>
    )
}