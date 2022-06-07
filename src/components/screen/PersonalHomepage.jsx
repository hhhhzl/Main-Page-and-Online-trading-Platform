import React, { useContext, useState }  from "react";
import { Image } from "react-bootstrap";
import {FormGroup,Button} from "react-bootstrap";
import './Personal.css'
import { useHistory } from "react-router";
import AuthContext from "context/AuthContext";

export default function  PersonalHomepage({
	userget,
}){
	let {user} = useContext(AuthContext)
	let history = useHistory();
	const [username, setUsername] = useState(user? user.username : null);
	const [name, setname] = useState(userget? userget.last_name : null);
	const [gender, setgender] = useState(userget? userget.gender : null);
	const [region, setregion] = useState(userget? userget.region : null);
	const [school, setSchool] = useState(userget? userget.institution : null);
	const [personalProfile,setPersonalProfile] = useState(userget.experience?.length> 0? userget.experience : [{company:"",position:"完善经历让其他小伙伴更了解你哟~~",detail:""}]);
	return(
		<>
			<div className="personal-homepage">
				<div style={{padding: "60px"}}>
					<Image
					  src={userget.avatar}
					  style={{ width: "160px", height: "160px" }}
					/>
				</div>
				<div className="personal-username">{username}</div>
				<div className="personal-other-text">{name}</div>
				<div className="personal-other-text">{gender}</div>
				<div className="personal-other-text  top-48">{region} {school}</div>
				
                    
						{personalProfile?.map((elem) =>{
							return (
								<>
								<div className="personal-other-text top-48" style={{display:"flex",justifyContent:"center"}}>
								<div style={{width:"480px", textAlign:"center",}}>
								{elem.company} {elem.position} {elem.detail}
								</div>
								</div>
								</>
							)
						})}
					{/* {personalProfile} */}
					
						
				
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
