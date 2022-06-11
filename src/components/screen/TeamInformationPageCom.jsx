import { apiGetUser } from "api/main_platform/users";
import React, {useEffect, useState} from "react"
import {Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "redux/reducers/users/usersSlices";
import PorforlioMoveGraph from "./PortforlioMoveGraph";

export default function TeamInformationPage({load, team, widthratio}) {
    // const [show, setShow] = useState(true);
    // const handleClose = () => setShow(false);
    const [members, setmembers] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const [loadmember, setloadmember] = useState(false)
    const [submit, setsubmit] = useState(false)
    const { status } = useSelector((state) => state.userInfo);
  

    useEffect(()=>{
        if (!loadmember){
            getMember()
            setloadmember(true)
        }   
    },[loadmember])

    useEffect(() =>{
        if(submit && status == "fulfilled"){
            history.push("/personal")
            setsubmit(false)
        }
    },[submit,status])

    const getMember = async () =>{
        try{
            const member = team.members
        
                const newPeopleArray = await Promise.all(member.map(async function(user) {
                    const responseUser = await apiGetUser(user.user);
                    const Userdata = responseUser.data.data;
                    return Userdata;
                }));
                setmembers(newPeopleArray)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
              <Card style={{margin:0,border:0,maxHeight:"800px"}} > 
                  <Card.Body style={{padding:0}}>
          <div style={{
        marginTop:"-10px",
        marginBottom:"24px",
        height:"40px",
        fontSize:"24px",
        fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI;",
        fontWeight:"bold",
        color:"#2A2B30",
        lineHeight:"56px",
        letterSpacing:"1px",
        }}>{team? team.metadata.name : "Loading..."}</div>
        <div>
            {load && <PorforlioMoveGraph widthratio={widthratio}/>}
        </div>

        <div style={{height:"224px", display:"flex",justifyContent:"left",padding:"36px 0% 0% 0%"}}>

        {members?.map((elem) => {
            return (
        <div style ={{width:"123px",textAlign:"center",}}>
        <Image
        onClick={()=>{
            dispatch(fetchUser(elem.id))
            setsubmit(true)
        }}
        src={elem.avatar}
        roundedCircle
        style={{
          position: "relative",
          width: "96px",
          height: "96px",
        }}
      />
      <div style={{
          marginTop:"8px",
          height:"24px",
          fontSize:"16px",
          fontFamily:"Microsoft YaHei UI-Bold, Microsoft YaHei UI",
          fontWeight:"bold",
          color:"#2A2B30",
          lineHeight:"24px",
        }}>{elem.username}</div>
        
        <div style={{marginTop:"0px",
        height:"24px",
        fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
        fontWeight:"400",
        color:"#6E7184",
        lineHeight:"24px",
        }}>{elem.institution}</div>

<div style={{marginTop:"0px",
        height:"24px",
        fontSize:"14px",
        fontFamily:"Microsoft YaHei UI-Regular, Microsoft YaHei UI",
        fontWeight:"bold",
        color:"#6E7184",
        lineHeight:"24px",
        }}>{elem.id == team.metadata.leader? "队长" :null}</div>



</div>
            )

        })}

        </div>
        </Card.Body>
        </Card>        
        </>

    )

}

