import "./Notice.css";
import data from "../../../static/Notice.json";
import React, { useState, useEffect, useRef } from "react";
import { Image, Button, Collapse } from "react-bootstrap";
import useWindowDimensions from "../../../utils/sizewindow";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchNews } from "redux/reducers/News/newsSlice";
import LoginSuccess from "components/screen/NewsTemplate/LoginSucess";
import JoinTeam from "components/screen/NewsTemplate/JoinTeam";
import CreateTeam from "components/screen/NewsTemplate/CreateTeam";

export default function Notice() {
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch()
  
  const {news} = useSelector((state) => state.news)
  const [notice, setNotice] = useState(news? news[0] : null);
  const [current, setCurrent] = useState(news? news[0].id : 0);
  const [noticeList, setNoticeList] = useState(data);
  const [show, setShow] = useState(1);
  const [showAll, setShowAll] = useState(true);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const read = (index) => {
    console.log(index)
    const singlemessge = news.filter(elem => elem.id == index)
    console.log(singlemessge[0])
    setNotice(singlemessge[0]);
    setNoticeList([...news]);
    setCurrent(index);
  };

  const changeShow = () => {
    console.log(show);
    setShow(show == 1 ? 2 : 1);
    console.log(show);
  };

  useEffect(()=>{
    dispatch(fetchNews())
  },[dispatch])

  useEffect(() =>{
    if(news){
      setNotice(news[0])
      setCurrent(news[0].id)
    }
  },[news])

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
                current == item.id
                  ? "notice-left-div notice-left-dev-selected"
                  : "notice-left-div notice-left-dev-no-selected"
              }
              onClick={() => read(item.id)}
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
                      {item.created_at}
                    </div>
                  </div>
                  <div className="notice-left-detail">
                    <div className="notice-left-content">{item.content == "欢迎您加入UFA全球青年汇。"? (<>{"恭喜您！此封邮件确认您已成功注册UFA官网账号:"}...</>) : item.content}</div>
                    {item.status == 0 ? (
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
              <div className="notice-right-content">{notice?.content == "欢迎您加入UFA全球青年汇。"?
               (<><LoginSuccess/></>) 
               : 
               notice?.content.slice(0,5) == "您加入队伍"?
                (<><JoinTeam name = {notice?.content.split("\"")[1]}/></>) 
                :
               notice?.content}</div>
            </div>
            {notice?.type == 1 ? (
              <div className="notice-right-buttonGroups">
                <Button
                  style={{
                    marginRight: "12px",
                    width: "120px",
                    height: "48px",
                    background: "#F5F6F8",
                    border: "0",
                    borderRadius: "4px 4px 4px 4px",
                    opacity: 1,
                    color: "black",
                  }}
                >
                  拒绝
                </Button>
                <Button
                  style={{
                    width: "120px",
                    height: "48px",
                    background:
                      "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
                    boxShadow:
                      "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
                    borderRadius: "4px 4px 4px 4px",
                    opacity: 1,
                  }}
                >
                  接受邀请
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
