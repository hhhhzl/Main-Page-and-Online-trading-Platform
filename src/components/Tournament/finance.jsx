import React from "react";
import Image from "react-bootstrap/Image";
import useWindowDimensions from "../../utils/sizewindow";
import "./finance.css"
// import "./footer.css";

const Finance = ({ profileImg, hobbyImgs }) => {
  const { width, height } = useWindowDimensions();	
  return (
	  <div style={{width:"1920px"}}>
		<div className="gray-bg">
			<div className="introduce-mark">
				<div className="top-image">
					<Image
					  src="/tournament/Group 110.png"
					  style={{ width: "36px", height: "36px" }}
					/>
				</div>
				<div className="center-content">
					“财经洞悉”作为投资比赛的附属活动，旨在鼓励大学生积极关注时政与财经新闻，同时为全球有志于金融投资的大学生提供知识的实践平台，培养其洞察能力与研究思维。
				</div>
				<div className="bottom-image">
				  <Image
					src="/tournament/Group 172.png"
					style={{width:"36px",height:"36px"}}
				  />
				</div>
			</div>
		</div>
		<div style={{width: "100%",background: "rgb(255 255 255)",opacity: 1}}> 
			<div>
				<div className="finance-title finance-title-top">
					财经洞悉
				</div>
				<div className="finance-title-top">
					<Image
						src="/tournament/Group 797.png"
						style={{width:"62.7%",height:"183px"}}
					/>
				</div>
				<div className="finance-title-top">
					<div style={{display: "flex"}}>
						<div className="finance-date-div-first">
							<div className="finance-title-span-first">周一</div>
							<div className="finance-title-span-two">第一周</div>
							<div className="finance-title-imgage">
								<Image 
									src="/tournament/Group 142.png"
									style={{width:"24px",height:"24px"}}></Image>
									<div style={{
										width: "503px",
										height:'1px',
										background: "#E5E8EE",
										marginTop:"-12px"
									}}></div>
									<div style={{
										height: "72px",
										borderLeft: "2px solid #f5f6f8",
										marginLeft: "251px",
									}}></div>
								<div className="finance-title-imgage-div-first">热点话题发布</div>
								<div className="finance-title-imgage-div-two">选手撰写独立分析</div>
							</div>
						</div>
						<div className="finance-date-div-first">
							<div className="finance-title-span-first">周日</div>
							<div className="finance-title-span-two">第二周</div>
							<div className="finance-title-imgage">
								<Image 
									src="/tournament/Group 142.png"
									style={{width:"24px",height:"24px"}}></Image>
								<div style={{
									width: "462px",
									height:'1px',
									background: "#E5E8EE",
									marginTop:"-12px"
								}}></div>
								<div style={{
									height: "72px",
									borderLeft: "2px solid #f5f6f8",
									marginLeft: "251px",
								}}></div>
								<div className="finance-title-imgage-div-first">分析提交截止</div>
								<div className="finance-title-imgage-div-two">
									<span>公布优秀分析报告</span> <br/>
									<span>线上分享会</span>
								</div>
							</div>
						</div>
					</div>
					<div className="finance-note">
						注：“财经洞悉”撰写质量不会给予评分，此板块不影响比赛分数。
					</div>
				</div>
			</div>
			<div>
				<div className="finance-title finance-title-top">
					财经洞悉 奖项
				</div>
				<div className="finance-title-top-two">
					<div className="finance-title-two">模范经纪人</div>
					<div className="finance-bottom-text finance-bottom-text-fist">在每一次财经新闻话题截止后，UFA组委会会阅览并筛选50个优秀的选手分析，并发布由UFA及中信证券官方签</div>
					<div className="finance-bottom-text finance-bottom-text-two">对于部分优秀分析，UFA会对选手做独家采访，并将其分析及选手采访刊登在UFA官网以及UFA公众号【UFA视野全球】。</div>
					<div className="finance-bottom-text finance-bottom-text-two">同时，UFA每周会将优秀选手向多个金融机构进行推荐。</div>
				</div>
			</div>
		</div>
	  </div>
  )
};

export default Finance;
