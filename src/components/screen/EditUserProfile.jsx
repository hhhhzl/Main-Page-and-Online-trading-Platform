import React, { useState,useEffect, useContext } from "react";
import {FormGroup,FormLabel,FormControl,Button,Image, Modal} from "react-bootstrap";
import './Personal.css'
import { useHistory } from "react-router";
import TeamRegisterModel from './modal/TeamRegisterModel'
import AuthContext from "context/AuthContext";
import { fetchUser, updateUser } from "redux/reducers/users/usersSlices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUserSelf, updateUserSelf } from "redux/reducers/users/userSelf";

export default function EditData({
	platformType,
	userName,
	userget
}){
	const [userState, setUserState] = useState({})
	let {user} = useContext(AuthContext)
	const {status} =  useSelector((state) => state.userInfo);
	const [lastname, setlastname] = useState(userget? userget.last_name: "");
	const [institution, setinstitution] = useState(userget? userget.institution : "");
	const [personalProfile,setPersonalProfile] = useState(userget? userget.profile : "");
	const [experienceList,setExperienceList] = useState(userget.experience?.length> 0? userget.experience : [
		{company:"",position:"",detail:""}
	])
	const [successSendtoC, setsuccessSendtoC] = useState(false)
	const history= useHistory()
	const dispatch = useDispatch();
	const [submit,setsubmit] = useState(false)

	const addExperience=()=>{
		let obj = {company:"",position:"",detail:""};
		setExperienceList([...experienceList,obj]);
	}
	const handleDelete = (idx) => {
		console.log(idx)
	  experienceList.splice(idx,1);
	  let experience = [...experienceList]
	  console.log(experienceList);
	  setExperienceList([...experienceList]);
	  setUserState({...userState, ...{ experience }});
	};

	const uploadFile = React.createRef();
	const [showModal, setShowModal] = useState(false);
	const [imgSrc, setImgSrc] = useState('')
	const [headPortrait,setHeadPortrait] = useState(userget? userget.avatar :'/Lindsay.jpg')

	const hideModal = () => {
	  setShowModal(false);
	  setImgSrc('');
	};

	const openModel = ()=>{
		setShowModal(true)
	}

	const chooseFile = () => {
	  uploadFile.current.click();
	};

	function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
	  if (e.target.files && e.target.files.length > 0) {
	    const reader = new FileReader()
	    reader.addEventListener('load', () =>
	      setImgSrc(reader.result.toString() || ''),
	    )
	    reader.readAsDataURL(e.target.files[0])
		setShowModal(true)
		e.target.value = "";
	  }
	}
	const getBase64 = (url) => {
		setShowModal(false)
		setHeadPortrait(url);
		setUserState({...userState,...{avatar:url}})
	}

	useEffect(() =>{
		if(submit && status == "fulfilled"){
			history.push("/personal")
			setsubmit(false)
		}
	},[submit,status])


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
            <Button className="modal-btn modal-btn-submit"  variant="primary"
			 onClick ={() => {
				 dispatch(fetchUser(user.user_id))
				 setsubmit(true)
				 dispatch(fetchUserSelf(user.user_id))
			 }}>
            确定
          </Button>
        </div>

          </Modal.Footer>
        </Modal>

		<TeamRegisterModel showModal={showModal} hideModal={hideModal} getBase64={getBase64} imgSrc={imgSrc}></TeamRegisterModel>


		<div style={{top:0, paddingTop:"112px",backgroundColor: "#F5F6F8",display:"flex",justifyContent:"space-between"}}>
			<div style={{width:"48px",maxWidth:"18.75%"}}></div>
			<div  style={{
                        width: "1200px",
                        minHeight: "700px",
                        minWidth: "fix-content",
                    }}>
				<div className="edit-title">编辑个人资料</div>
				<div className="edit-user-person" style={{backgroundColor:"#FFFFFF",marginTop:"24px"}}>
					<div style={{
						display:"flex",
						flexDirection:"column",
						justifyContent:"center",
						textAlign:"center"
					}}>
						<div style={{margin: "60px 0 24px"}}>
							<Image src={headPortrait} roundedCircle style={{position: "relative", width: "160px",height: "160px"}}/>
						</div>
						<div>
							<Button
								onClick={chooseFile}
								style={{width:"120px",height:"40px",backgroundColor: "#F5F6F8",border:0,color:"black"}}
							>修改头像</Button>
							<input
								hidden
								ref={uploadFile}
								type="file"
								accept="image/*"
								onChange={onSelectFile} />
						</div>
					</div>
					<div style={{margin:" 35px 4%"}}>
						<div className="information">基本信息</div>
						<div style={{marginTop:"35px",display: "flex"}}>
							<FormGroup style={{width: "44%"}}>
							  <FormLabel className="edit-form-label">姓名</FormLabel>
							  <FormControl
								type="text"
								value={lastname}
								style={{width:"100%",height:"48px"}}
								placeholder="请输入文字"
								onChange={(e) => {
								  const last_name = e.target.value;
								  const first_name = e.target.value;
								  setlastname(e.target.value)
								  setUserState({...userState, ...{ last_name }, ...{ first_name }});
								}}
							  />
							</FormGroup>
							<FormGroup style={{width: "44%",marginLeft:"4%"}}>
							  <FormLabel className="edit-form-label">学校</FormLabel>
							  <FormControl
								type="text"
								value={institution}
								style={{width:"100%",height:"48px"}}
								placeholder="请输入文字"
								onChange={(e) => {
								  const institution = e.target.value;
								  setinstitution(e.target.value)
								  setUserState({...userState, ...{ institution }});
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
								placeholder="完善个人简历获取更多他人关注哟~~"
								onChange={(e) => {
								  const profile = e.target.value;
								  setPersonalProfile(e.target.value)
								  setUserState({...userState, ...{ profile }});
								}}
							  />
							</FormGroup>
						</div>
					</div>
					<div style={{margin:" 60px 4%"}}>
						<div className="information">实习经历</div>
						{
							experienceList.map((item,idx)=>(
								<div key={idx} style={{marginTop:"35px",display: "flex"}}>
									<FormGroup style={{width: "44%"}}>
									  <FormLabel className="edit-form-label">实习公司</FormLabel>
									  <FormControl
										type="text"
										value={item.company}
										style={{width:"100%",height:"48px"}}
										placeholder="请输入实习经历"
										onChange={(e) => {
											console.log(experienceList)
										  experienceList[idx].company = e.target.value;
										  setExperienceList(experienceList);
										  const experience = experienceList
										  setUserState({...userState, ...{ experience }});
										}}
									  />
									</FormGroup>

									<FormGroup style={{width: "44%",marginLeft:"4%"}}>
									  <FormLabel className="edit-form-label">实习职位</FormLabel>
									  <div style={{display:"flex",alignItems: "center"}}>
										  <FormControl
											type="text"
											value={experienceList[idx].position}
											style={{width:"85%",height:"48px"}}
											placeholder="请输入实习经历"
											onChange={(e) => {
											  experienceList[idx].position = e.target.value;
											  setExperienceList(experienceList);
											  const experience = experienceList
											  setUserState({...userState, ...{ experience }});
											}}
										  />
										  {/*<Button */}
											{/*variant="danger"*/}
											{/*disabled ={experienceList.length==1}*/}
											{/*onClick={() => handleDelete(idx)}*/}
											{/*style={{marginLeft:"12px"}}>删除</Button>*/}
										  <Image
											  show={experienceList.length!=1}
											  onClick={() => handleDelete(idx)}
											  src="/Frame-delete.png"
											  style={{
											  	width: "22px", height: "22px",display:experienceList.length == 1?"none":'block'
											  }}
										  />
									  </div>

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
							 <Button disabled={Object.keys(userState).length == 0? true :false} style={{width:"26.668%",height:"48px"}} 
							 onClick = {() => {
								 
								 console.log(userState,254)
								 dispatch(
									 updateUserSelf({
									 data: userState
									}))
								setsuccessSendtoC(true)
								dispatch(fetchUserSelf(user.user_id))
								}
							}>
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
