import './CommitRecord.css'
import React, { useState, useEffect, useRef } from "react";

import data from '../../../static/CommitRecord.json'

import {Image,OverlayTrigger,Tooltip} from "react-bootstrap";


export default function CommitRecord(){
	const tooltip = (
	  <Tooltip id="tooltip">优秀财经洞悉</Tooltip>
	);
	return(
		<div
			style={{
				background: "#FFFFFF",
				marginTop: "24px"
			}}>
			<div className="commit-record">
				{data.map((item, idx) => (
				    <div key={idx} className="commit-record-div">
						<div style={{padding: "24px 0 0 36px"}}>
							<OverlayTrigger placement="bottom" overlay={tooltip}>
								<Image src="/investNotes/Group 101.png" className="commit-record-medal"></Image>
							</OverlayTrigger>
							<div className="commit-record-title">{item.title}</div>
							<div style={{padding: "24px 0 36px 0"}}>
								{ item.files.map((file,idf)=>(
									<div key={idf} className="commit-record-centent">
										<div style={{paddingLeft: "12px"}}>
											<Image src={file.imgUrl} style={{width:"36px",height:"36px"}}></Image>
										</div>
										<div style={{paddingLeft:"8px"}}>
											<div className="commit-record-filename">{file.filename}</div>
											<div className="commit-record-filesize">{file.filesize}</div>
										</div>
									</div>
									))
								}
							</div>
						</div>
				    </div>
				))}
			</div>
		</div>
	)
	
}