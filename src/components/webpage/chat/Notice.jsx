import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import CreateTeam from "components/screen/NewsTemplate/CreateTeam";
import JoinTeam from "components/screen/NewsTemplate/JoinTeam";
import LoginSuccess from "components/screen/NewsTemplate/LoginSucess";
import RequestForLeader from "components/screen/NewsTemplate/RequestForLeader";
import RequestForTeamMember from "components/screen/NewsTemplate/RequestForTeammember";
import AuthContext from "context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Button, Collapse, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, updateNews } from "redux/reducers/News/newsSlice";
import { showTimePipe } from "utils";
import data from "../../../static/Notice.json";
import useWindowDimensions from "../../../utils/sizewindow";

import "./Notice.css";

export default function Notice() {
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch()
  const {team, user} = useContext(AuthContext)
  
  const {news} = useSelector((state) => state.news)
  const [notice, setNotice] = useState(news?.length>0? news[0] : null);
  const [current, setCurrent] = useState(1);
  const [noticeList, setNoticeList] = useState(data);
  const [show, setShow] = useState(1);
  const [showAll, setShowAll] = useState(true);
  const [load, setload] = useState(false)
  const [load1, setload1] = useState(false)
  const [load2, setload2] = useState(false)

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const read = (index) => {
    const singlemessge = news.filter(elem => elem.message_id == index)
    setNotice(singlemessge[0]);
    setNoticeList([...news]);
    setCurrent(index);
  };

  const changeShow = () => {
    console.log(show);
    setShow(show == 1 ? 2 : 1);
    console.log(show);
  };

  const markasRead = (item) =>{
    if (item.content && item.is_read == false){
       dispatch(updateNews(item.id))
       dispatch(fetchNews({team: team?.metadata, user_id:user.user_id}))
       
    }
    setCurrent(item.message_id)
    setNotice(item)
  }

  useEffect(()=>{
    if (user && team && !load1){
      dispatch(fetchNews({team: team?.metadata, user_id:user.user_id}))
      setload1(true)
    }
  },[dispatch, team, user, load1])

  useEffect(()=>{
    if (user && !team && !load2){
      dispatch(fetchNews({team: null, user_id:user.user_id}))
      setload2(true)
    }
  },[dispatch, team, user, load2])


  useEffect(() =>{
    if (!load && news?.length>0){
        setNotice(news[0])
        setCurrent(news[0].message_id)
         setload(true)
    } 
  },[news, load])

  useEffect(()=>{
    if(user && !load1){
    dispatch(fetchNews({team: null, user_id:user.user_id}))
    setload1(true)
  }
  },[dispatch, user, load1])

  return (
    <div
      style={{
        margin: 0,
        width: "100%",
        borderRadius: "4px 4px 4px 4px",
        // position: "relative",
      }}
    >
      <div className="notice-title">全部通知</div>
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          height: "770px",
          boxShadow:
            "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div
          className="notice-left"
          style={{
            width: width > 1200 ? "" : showAll ? "160px" : "65px",
            overflow: width > 1200 ? "" : "hidden",
          }}
        >
          <Collapse in={width < 1200}>
            <div
              onClick={handleShowAll}
              style={{ textAlign: "end", marginBottom: "10px" }}
            >
              {showAll ? (
                <ArrowBackIos></ArrowBackIos>
              ) : (
                <ArrowForwardIos></ArrowForwardIos>
              )}
            </div>
          </Collapse>




          <div>
          <div style={{ maxHeight:"750px", overflow:"auto" }}>
          {news?.map((item, index) => (
            <div
              key={index}
              className={
                current == item.message_id
                  ? "notice-left-div notice-left-dev-selected"
                  : "notice-left-div notice-left-dev-no-selected"
              }
              onClick={() => {
                read(item.message_id)
                markasRead(item)
              }}
            >
              <div style={{ marginLeft: "16px" }}>
                <Image
                  src={item.message_type? "/UFA-LOGO-1.png" :"/Group 1073.png"}
                  style={{ width: "33px", height: "33px" }}
                ></Image>
              </div>

              <Collapse in={showAll || width > 1200}>
                <div style={{ marginLeft: "8px", width: "100%"}}>
                  <div className="notice-left-headline">
                    <div className="notice-left-title">{item? item.message_type? "UFA官方信息" : "团队信息" : null}</div>
                    <div
                      style={{ display: width > 1200 ? "" : "none" }}
                      className="notice-left-time"
                    >
                      {showTimePipe(item.created_at)}
                    </div>
                  </div>
                  <div className="notice-left-detail" > 
                    <div className="notice-left-content">{
                    item.content? 
                    item.content == "欢迎您加入UFA全球青年汇。"? 
                    (<>{"恭喜您！此封邮件确认您已成功注册UFA官网账号; 请注意：您尚未完成UFA第二届"}...</>) : 
                    item.content.slice(0,6) == "您已成功创建"?
                    
                     <>恭喜您！您的团队{item.content.split("\"")[1]}已创建成功，此封邮件确认您以队长身份:...</>
                    :
                    item.content.slice(0,6) == "您已加入队伍"?
                    (<>恭喜您！您的申请已经得到 <strong>{item.content.split("\"")[1]}</strong> 队长的确认，您将以队员</>)
                    :
                    item.account? "您收到一条团队信息" : null : null
                    }</div>
                    {!item.is_read ? (
                      <div className="notice-left-unread"></div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Collapse>
            </div>
          ))}
          </div>
          </div>

        </div>





        <div
          className="notice-right"
          style={{
            width: width > 1200 ? "" : "100%",
          }}
        >
          <div
            className="notice-right-div"
            style={{ margin: width > 700 ? "" : "60px 20px" }}
          >
            <div style={{ padding: "24px 0 0 36px" }}>
              <div className="notice-right-title">{notice?.message_type? "UFA官方信息" : "团队消息"}</div>
              <div className="notice-right-content">{
              notice?.content? notice?.content == "欢迎您加入UFA全球青年汇。"?
               (<><LoginSuccess/></>) 
               : 
               notice?.content?.slice(0,6) == "您已加入队伍"?
                (<><JoinTeam name = {notice?.content.split("\"")[1]}/></>) 
                :
                notice?.content?.slice(0,6) == "您已成功创建"?
                (<><CreateTeam name = {notice?.content.split("\"")[1]}/></>) 
                :
               notice?.content
               :
               notice?.account? 
               team?.metadata.leader == user.user_id? 
               (<><RequestForLeader id = {notice.requester} type = {notice.status} messagage_id={notice.id} /></>)
               :
               (<><RequestForTeamMember id = {notice.account}  type = {notice.status} messagage_id = {notice.id}/></>)
               :
               null
              }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
