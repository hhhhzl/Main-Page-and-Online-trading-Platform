import React, { useState,useEffect } from "react";
import {FormGroup,FormLabel,FormControl,Button,Image, Modal} from "react-bootstrap";
import './Personal.css'
import { useHistory } from "react-router";

export default function EditData({platformType}){
	const [userState, setUserState] = useState({})
	const [username, setUsername] = useState("管理员");
	const [school, setSchool] = useState("密歇根大学");
	const [personalProfile,setPersonalProfile] = useState("实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历");
	const [experienceList,setExperienceList] = useState([
		{company:"密歇根大学",experience:"实习经历实习经历实习经历实习经历实习经历实习"}
	])
	const [successSendtoC, setsuccessSendtoC] = useState(false)
	const history= useHistory()
	
	const addExperience=()=>{
		let obj ={company:"密歇根大学",experience:"实习经历实习经历实习经历实习经历实习经历实习"};
		experienceList.push(obj);
		console.log(experienceList);
		setExperienceList([...experienceList]);
	}
	return(
		<>
		<Modal
        show={successSendtoC} 
        >
          <Modal.Header></Modal.Header>
          <Modal.Body style={{textAlign:"center"}}><div style={{fontSize: "14px",
                                    fontFamily: "Microsoft YaHei UI-Bold, Microsoft YaHei UI",
                                    fontWeight: "bold",
                                    color: "#2A2B30",
                                    lineHeight:"24px"}}>个人信息已修改成功</div></Modal.Body>
        <Modal.Footer style={{marginLeft:0}} >
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <Button className="modal-btn modal-btn-submit"  variant="primary" onClick ={() => history.push("/personal")}>
            确定
          </Button>
        </div>
         
          </Modal.Footer>
        </Modal>
		<div style={{backgroundColor: "#F5F6F8",display:"flex",justifyContent:"space-between"}}>
			<div style={{width:"48px",maxWidth:"18.75%"}}></div>
			<div  style={{
				        paddingTop:"112px",
                        width: "1200px",
                        minHeight: "700px",
                        minWidth: "fix-content",
                    }}>
				<div className="edit-title">编辑资料</div>
				<div className="edit-user-person" style={{backgroundColor:"#FFFFFF",marginTop:"24px"}}>
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
							 <Button style={{width:"26.668%",height:"48px"}} onClick = {() => setsuccessSendtoC(true)}>
								确定
							 </Button>
						</div>
					</div>
						  
				</div>
			</div>
			<div style={{width:"48px",maxWidth:"18.75%"}}></div>
			
		</div>
		</>
	)
}