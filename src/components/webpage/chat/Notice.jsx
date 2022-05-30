import './Notice.css'
import data from '../../../static/Notice.json'
import React, { useState, useEffect, useRef } from "react";
import {Image,Button} from "react-bootstrap";
import useWindowDimensions from "../../../utils/sizewindow";

export default function Notice(){
	const { width, height } = useWindowDimensions();
	const [current,setCurrent] = useState(0);
	const [notice,setNotice] = useState(data[0]);
	const [noticeList,setNoticeList] = useState(data);
	const [show,setShow] = useState(1)
	
	const read = (index) =>{
		data[index].status=1;
		setNotice(data[index]);
		setNoticeList([...data]);
		setCurrent(index);
	};
	
	const changeShow= ()=>{
		console.log(show);
		setShow((show==1?2:1));
		console.log(show);
	}
	
	return(
		
		<div style={{margin:0,width:"100%",borderRadius: "4px 4px 4px 4px",position:"relative"}}>
			<div className="notice-title">全部通知</div>
			<div style={{marginTop:"24px",
				display:"flex",
				height:"770px",
				justifyContent:"center",
				boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.02), 0px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px 1px rgba(0, 0, 0, 0.02), 0px 8px 16px 1px rgba(0, 0, 0, 0.02), 0px 16px 32px 1px rgba(0, 0, 0, 0.02), 0px 32px 64px 1px rgba(0, 0, 0, 0.02)",}}>
				<div 
					style={{
						position: "absolute",
						left: "0",
						display:show==1?"none":"block",
						background: "white",
						zIndex: "99"
					}}
					className="notice-left">
					{
						data.map((item,index)=>(
							<div 
								key={index}
								className={current==index?"notice-left-div notice-left-dev-selected":"notice-left-div notice-left-dev-no-selected"} 
								onClick={() => read(index)}
							>
								<div style={{marginLeft:"16px"}}>
									<Image src={item.imgUrl} style={{width:"33px",height:"33px"}}></Image>
								</div>
								<div style={{marginLeft:"8px",width: "100%"}}>
									<div className="notice-left-headline">
										<div className="notice-left-title">{item.title}</div>
										<div className="notice-left-time">{item.time}</div>
									</div>
									<div className="notice-left-detail">
										<div className="notice-left-content">{item.content}</div>
										{item.status==0?(<div className="notice-left-unread"></div>):""} 
									</div>
								</div>
							</div>
						))	
					}
				</div>
				<div
					style={{
						position: "absolute",
						left: show==1?"0":"360px",
						top: "76px",
						zIndex:"100"
					}}
				>
					<Button onClick={()=> changeShow()}>{show==1?"展开":"关闭"}</Button>
				</div>
				
				<div className="notice-right">
					<div className="notice-right-div">
						<div style={{padding: "24px 0 0 36px"}}>
							<div className="notice-right-title">{notice.title}</div>
							<div className="notice-right-content">{notice.content}</div>
						</div>
						{
							notice.type==1?(
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
											color: "black"
										}}>拒绝</Button>
									<Button 
										style={{
											width: "120px",
											height: "48px",
											background: "linear-gradient(135deg, #2B8CFF 0%, #2346FF 100%)",
											boxShadow: "0px 1px 2px 1px rgba(35, 97, 255, 0.08), 0px 2px 4px 1px rgba(35, 97, 255, 0.08), 0px 4px 8px 1px rgba(35, 97, 255, 0.08), 0px 8px 16px 1px rgba(35, 97, 255, 0.08), 0px 16px 32px 1px rgba(35, 97, 255, 0.08)",
											borderRadius:"4px 4px 4px 4px",
											opacity: 1,	
										}}
									>接受邀请</Button>
								</div>
							):""
						}
					</div>
				</div>
			</div>
		</div>
		
	)
}