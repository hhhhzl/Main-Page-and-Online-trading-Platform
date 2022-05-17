import React from "react";
import { Image } from "react-bootstrap";
import {FormGroup,Button} from "react-bootstrap";
import './Personal.css'

export default function  PersonalHomepage(){
	return(
		<div>
			<div className="personal-homepage">
				<div style={{padding: "60px"}}>
					<Image
					  src="/Lindsay.jpg"
					  style={{ width: "160px", height: "160px" }}
					/>
				</div>
				<div className="personal-username">用户名</div>
				<div className="personal-other-text">密歇根大学</div>
				<div className="personal-other-text  top-48">密歇根大学 UI设计师</div>
				<div className="personal-other-text">密歇根大学 UI设计师</div>
				<div className="personal-other-text top-48">
					<div  style={{width:"480px"}}>
						实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历实习经历
					</div>
				</div>
				<div style={{marginTop:"32px"}}>
					<Button className="edit-data-button" size="sm" style={{width:"120px",height:"44px",borderRadius:"24px 24px 24px 24px",border:"1px solid #2A2B30",background:"white"}}>编辑资料</Button>
				</div>
			</div>
		</div>
	)
}
