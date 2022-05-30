import React, { useState }  from "react";
import { Image } from "react-bootstrap";
import {FormGroup,Button} from "react-bootstrap";
import './Personal.css'
import { useHistory } from "react-router";

export default function  PersonalHomepage(){
	let history = useHistory();
	const [username, setUsername] = useState("管理员");
	const [school, setSchool] = useState("密歇根大学");
	const [personalProfile,setPersonalProfile] = useState("实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历");
	const [company,setCompany] = useState("密歇根大学");
	const [experience,setExperience] = useState("设计师");
	return(
		<>
			<div className="personal-homepage">
				<div style={{padding: "60px"}}>
					<Image
					  src="/Lindsay.jpg"
					  style={{ width: "160px", height: "160px" }}
					/>
				</div>
				<div className="personal-username">{username}</div>
				<div className="personal-other-text">{school}</div>
				<div className="personal-other-text  top-48">{company} {experience}</div>
				<div className="personal-other-text">{company} {experience}</div>
				<div className="personal-other-text top-48" style={{display:"flex",justifyContent:"center"}}>
                    <div style={{width:"480px", textAlign:"center",}}>
					{personalProfile}
					</div>
						
				</div>
				<div style={{marginTop:"32px"}}>

		

					<Button 

						size="sm" 
						style={{width:"120px",height:"44px",borderRadius:"24px 24px 24px 24px",border:"1px solid #2A2B30",background:"white",color:"black"}}
						onClick = {() => history.push("/personalEdit")}
						>
							编辑资料
							</Button>
				</div>
			</div>
		</>
	)
}
