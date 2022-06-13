
import { apiGetUser } from 'api/main_platform/users'
import React, { Component, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { fetchUser } from 'redux/reducers/users/usersSlices'

export default function RequestForLeader({id, type}){
    const [load,setload] = useState(false)
    const [user, setuser] = useState(null)
    const [sumbit, setsumbit] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const { status } = useSelector((state) => state.userInfo);

    const GetUser = async (id) =>{
        try{
            const request = await apiGetUser(id)
            const user_info = request.data.data
            setuser(user_info.username)
        }catch(e){

        }
    }
    useEffect(()=>{
        if (!load){
            GetUser(id)
            setload(true)
        }

    })

    useEffect(() =>{
        if(sumbit && status == "fulfilled"){
            history.push("/personal")
            setsumbit(false)
        }
    },[sumbit,status])

    return(
        <>
        <div>
               <Link style ={{color:"black"}} onClick = {() => {
                   dispatch(fetchUser(id));
                  setsumbit(true)}}> <strong>{user}</strong></Link> 申请加入您的团队，等待您的通过... 请点击下方按钮同意或者拒绝对方加入团队。
        </div>
        <br/>
              UFA 组委会
        <br/>
        <br/>
        <div style={{display:"flex",justifyContent:"right"}}>
            {
                type == "P"? 
                <>
                <Button style={{marginRight:"20px"}}>
                    同意
                </Button>
                
                <Button style={{marginRight:"20px"}}>
                    拒绝
                </Button>
                </>
                :
                <>
                <Button disabled={true} style={{marginRight:"20px"}}>
                    已通过
                </Button>
                </>
            }
            
        </div>
        </>
    )
}