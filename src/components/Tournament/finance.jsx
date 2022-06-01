import React, {useEffect,useState} from "react";
import Image from "react-bootstrap/Image";
import useWindowDimensions from "../../utils/sizewindow";
import "./finance.css"
// import "./footer.css";

const Finance = ({ profileImg, hobbyImgs }) => {
  const { width, height } = useWindowDimensions();
  const [bodyscrollrdTop, setbodyscrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setbodyscrollTop(document.documentElement.scrollTop || document.body.scrollTop)
      console.log("屏幕向下距离",bodyscrollrdTop)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);

  }, [bodyscrollrdTop]);
  return (
	  <>
	  <div style={{position:"fixed",zIndex:10,width:"1px",height:width/2.97,background:`linear-gradient(to top, #E5E8EE ${(bodyscrollrdTop/(width/2.97)*100).toString() + '%'}, rgba(255, 255, 255, 0.5) ${(bodyscrollrdTop/(width/2.97)*100).toString() + '%'})`, top:"64px",left:width/2-1}}></div>
	  <div>
		<div className="gray-bg">
		<div style={{position:"relative",width:width,height:"48px",background:"#F5F6F8"}}></div>
		<div className="line-container">

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
			<div style={{position:"relative",width:width,height:"48px",background:"#F5F6F8"}}></div>
		</div>

		<div style={{background: "#FFFFFF"}}>
		<div style={{position:"relative",width:width,height:"96px",background:"#FFFFFF"}}></div>
			<div className="insight-into">
					<div className="finance-title">
						财经洞悉
					</div>
					<div style={{marginTop:"80px",position: "relative"}}>
						<Image
							src="/tournament/Group 797@2x.png"
							style={{width:" 100%",height:"100%"}}
						/>
						<a href="/eplatform" >
							<Image
								src="/tournament/赛事账户.png"
								style={{position: "absolute",left:"44.7%",top:"70%",width:"8%"}}
							/>
						</a>
					</div>
					<div className="finance-note" >
						（“财经洞悉”撰写质量不会给予评分，此板块不影响比赛分数）
					</div>
					<div style={{marginTop:"140px"}}>
						<div
							style={{
								display: "flex",
								justifyContent:"center",
								flexDirection:width < 791 ?"column":"inherit"
							}}>
							<div className="finance-date-div-first">
								<div className="finance-title-span-first">周一</div>
								<div className="finance-title-span-two">第一周</div>
								<div className="finance-title-imgage">
									<div>
										<Image
											src="/tournament/Group 142.png"
											style={{width:"24px",height:"24px"}}></Image>
										<div style={{
											height:'1px',
											background: "#E5E8EE",
											marginTop:"-12px"
										}}></div>
										<div style={{
											height: "48px",
											borderRight: "2px solid #f5f6f8",
											width:"50%"
										}}></div>
									</div>

									<div className="finance-title-imgage-div-first">热点话题发布</div>
									<div className="finance-title-imgage-div-two">选手撰写独立分析</div>
								</div>
							</div>
							<div className="finance-date-div-first"
								 style={{
									 marginTop:width < 791 ?"20px":"0"
								 }}
							>
								<div className="finance-title-span-first">周日</div>
								<div className="finance-title-span-two">第二周</div>
								<div className="finance-title-imgage">
									<Image
										src="/tournament/Group 142.png"
										style={{width:"24px",height:"24px"}}></Image>
									<div style={{
										height:'1px',
										background: "#E5E8EE",
										marginTop:"-12px"
									}}></div>
									<div style={{
										height: "48px",
										borderRight: "2px solid #f5f6f8",
										width:"50%"
									}}></div>
									<div className="finance-title-imgage-div-first">分析提交截止</div>
									<div className="finance-title-imgage-div-two">
										<span>公布优秀分析报告</span> <br/>
										<span>线上分享会</span>
									</div>
								</div>
							</div>
						</div>
					</div>


			</div>
			<div style={{position:"relative",width:width,height:"48px",background:"#FFFFFF"}}></div>
		</div>





		<div style={{position:"relative",width:width,height:"96px",background:"#F5F6F8"}}></div>
		<div style={{background: "#F5F6F8"}}>
			<div
				style={{
					position:"relative",
					width: "62.5%",
					margin: "0 18.75% 0 18.75%",
					background: "#F5F6F8",
					zIndex:25,

				}}
			>
				<div className="finance-title" style={{paddingTop:"24px"}}>
					财经洞悉 奖项
				</div>
				<div>
					<div className="finance-title-two" style={{paddingTop:"80px"}}>模范经纪人</div>
					<div className="finance-bottom-text" style={{paddingTop:"30px"}}>在每一次财经新闻话题截止后，UFA组委会会阅览并筛选50个优秀的选手分析，并发布由UFA及中信证券官方签</div>
					<div className="finance-bottom-text" style={{paddingTop:"20px"}}>对于部分优秀分析，UFA会对选手做独家采访，并将其分析及选手采访刊登在UFA官网以及UFA公众号【UFA视野全球】。</div>
					<div className="finance-bottom-text" style={{paddingTop:"20px"}}>同时，UFA每周会将优秀选手向多个金融机构进行推荐。</div>
				</div>

				<div className="awards-card-wrapper" style={{marginTop:"20px",justifyContent: "center"}}>
				  <div
					className= {width < 559 ? "awards-card-container-small":"awards-card-container"}
				  >
				    <div className="awards-card">
				      <div className="ranking awards-center">模范经纪人</div>
				      <div className="awards-pic awards-center">
				        <Image
				          src="/homeCutout/10086.png"
				          style={{ width: "220px", height: "220px" }}
				        />
				      </div>

				      <div className="award-content awards-center">
				        <div>团队获得5000元人民币</div>
				        <div>每位团员获得官方制定的冠军证书 </div>
				        <div>中信证券实习机会</div>
				      </div>
				    </div>
				  </div>

				</div>

				<div className= {width >766?"tips-end":"tips-center"} style={{paddingBottom:"120px"}}>
				  注：所有奖项由UFA与中信证券官方签署制定，旨在为参赛选手提供背景提升，学习成长的机会。
				</div>
			</div>

		</div>
	  </div>
	  </>
  )
};

export default Finance;
