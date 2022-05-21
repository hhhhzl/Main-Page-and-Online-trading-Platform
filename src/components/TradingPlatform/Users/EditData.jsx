import React, { useState,useEffect } from "react";
import {FormGroup,FormLabel,FormControl,Button,Image} from "react-bootstrap";
import './Personal.css'

export default function EditData(){
	const [userState, setUserState] = useState({})
	const [username, setUsername] = useState("管理员");
	const [school, setSchool] = useState("密歇根大学");
	const [personalProfile,setPersonalProfile] = useState("实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历");
	const [experienceList,setExperienceList] = useState([
		{company:"密歇根大学",experience:"实习经历实习经历实习经历实习经历实习经历实习"}
	])
	
	const addExperience=()=>{
		let obj ={company:"密歇根大学",experience:"实习经历实习经历实习经历实习经历实习经历实习"};
		experienceList.push(obj);
		console.log(experienceList);
		setExperienceList([...experienceList]);
	}
	return(
		<div style={{backgroundColor: "#F5F6F8"}}>
			<div style={{marginLeft:"18.75%"}}>
				<div className="edit-title">编辑资料</div>
				<div className="edit-user-person" style={{width:"76.924%",backgroundColor:"#FFFFFF",marginTop:"24px"}}>
					<div style={{textAlign:"center"}}>
						<div style={{padding: "60px 0 51px"}}>
							<Image
							  src="/Lindsay.jpg"
							  style={{ width: "160px", height: "160px" }}
							/>
						</div>
						<div>
							<Button style={{width:"120px",height:"40px",backgroundColor: "#F5F6F8",border:0,color:"black"}}>修改头像</Button>
						</div>
					</div>
					<div style={{margin:" 35px 4%"}}>
						<div className="information">基本信息</div>
						<div style={{marginTop:"35px",display: "flex"}}>
							<FormGroup style={{width: "44%"}}>
							  <FormLabel className="edit-form-label">用户名</FormLabel>
							  <FormControl
								type="text"
								value={username}
								style={{width:"100%",height:"48px"}}
								placeholder="请输入文字"
								onChange={(e) => {
								  const username = e.target.value;
								  setUsername(e.target.value)
								  setUserState({...userState, ...{ username }});
								}}
							  />
							</FormGroup>
							<FormGroup style={{width: "44%",marginLeft:"4%"}}>
							  <FormLabel className="edit-form-label">学校</FormLabel>
							  <FormControl
								type="text"
								value={school}
								style={{width:"100%",height:"48px"}}
								placeholder="请输入文字"
								onChange={(e) => {
								  const school = e.target.value;
								  setSchool(e.target.value)
								  setUserState({...userState, ...{ school }});
								}}
							  />
							</FormGroup>
						</div>
						<div style={{marginTop:"36px"}}>
							<FormGroup controlId="formControlsTextarea" style={{width: "92%"}}>
							  <FormLabel className="edit-form-label">个人简介</FormLabel>
							  <textarea
								className="form-control"
								value={personalProfile}
								style={{width:"100%",height:"96px"}}
								placeholder="请输入文字"
								onChange={(e) => {
								  const personalProfile = e.target.value;
								  setPersonalProfile(e.target.value)
								  setUserState({...userState, ...{ personalProfile }});
								}}
							  />
							</FormGroup>
						</div>
					</div>
					<div style={{margin:" 60px 4%"}}>
						<div className="information">学习经历</div>
						{
							experienceList.map((item,idx)=>(
								<div key={idx} style={{marginTop:"35px",display: "flex"}}>
									<FormGroup style={{width: "44%"}}>
									  <FormLabel className="edit-form-label">实习公司</FormLabel>
									  <FormControl
										type="text"
										value={item.company}
										style={{width:"100%",height:"48px"}}
										placeholder="请输入文字"
										onChange={(e) => {
										  experienceList[idx].company = e.target.value;
										  setExperienceList(experienceList);
										  setUserState({...userState, ...{ setExperienceList }});
										}}
									  />
									</FormGroup>
									<FormGroup style={{width: "44%",marginLeft:"4%"}}>
									  <FormLabel className="edit-form-label">实习职位</FormLabel>
									  <FormControl
										type="text"
										value={experienceList[idx].experience}
										style={{width:"100%",height:"48px"}}
										placeholder="请输入文字"
										onChange={(e) => {
										  experienceList[idx].experience = e.target.value;
										  setExperienceList(experienceList);
										  setUserState({...userState, ...{ setExperienceList }});
										}}
									  />
									</FormGroup>
								</div>
							))
						}
						<FormGroup style={{marginTop:"36px"}}>
							<Button 
								onClick={addExperience}
								style={{width:"26.668%",height:"48px",backgroundColor: "#F5F6F8",border:0,color:"black"}}>
								<Image
								  src="/homeCutout/Group 864.png"
								  style={{ width: "16px", height: "16px" }}
								/>
								新增一条 实习经历
							</Button>
						</FormGroup>
					</div>
					<div style={{marginTop:"60px",textAlign:"center"}}>
						<div style={{textAlign:"center",padding:"60px"}}>
							 <Button style={{width:"26.668%",height:"48px"}}>
								确定
							 </Button>
						</div>
					</div>
						  
				</div>
			</div>
			
		</div>
	)
}