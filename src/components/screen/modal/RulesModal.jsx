
import { Modal,Image } from "react-bootstrap";
import "../../Tournament/rules.css";
export default function FinanceModal({showModal,hideModal,current}){
	return(
		<Modal
		  show={showModal}
		  onHide={hideModal}
		  centered
		  className="rules-model"
		>
			<div
				className="pop-up"
				style={{
					display:current==1?"flex":"none"
				}}>
				<Image src="/tournament/Group 771.png" style={{padding: "36px 48px"}}></Image>
			</div>
			
			<div
				className="pop-up"
				style={{
					display:current==2?"flex":"none",
					flexDirection:"column"
				}}
			>
				<div style={{padding: "36px 48px 12px 48px"}}>
					<span className="pop-up-text">量化投资赛道：</span>
					<span className="pop-up-content">
						评委将结合选手的因子挖掘、选股策略以及综合知识储备三个维度对投资 报告进行评分。
					</span>
				</div>
				<div style={{padding: "0 48px 12px 48px"}}>
					<span className="pop-up-text">主观多头赛道：</span>
					<span className="pop-up-content">
						评委将结合选手的研究能力、投资管理能力以及综合知识储备三个维度对 投资报告进行评分。
					</span>
				</div>
				<div  style={{padding: "0 48px 36px 48px"}} className="annotations">*投资报告的具体框架将在初赛结束时公布。</div>
			</div>
			
			<div
				className="pop-up"
				style={{
					display:current==3?"flex":"none",
					flexDirection:"column"
				}}
			>
				<div style={{padding: "36px 48px 12px 48px"}}>
					<span className="pop-up-text">量化投资赛道：</span>
					<span className="pop-up-content">
						专业能力包括因子挖掘和选股策略两个维度；综合能力包括知识储备、总 结与反思、答辩与展示三个维度。
					</span>
				</div>
				<div style={{padding: "0 48px 12px 48px"}}>
					<span className="pop-up-text">主观多头赛道：</span>
					<span className="pop-up-content">
						专业能力包括研究能力和投资管理能力两个维度；综合能力包括知识实 践、总结与反思、答辩与展示三个维度。
					</span>
				</div>
				<div style={{padding: "0 48px 36px 48px"}} className="annotations">*PPT的展示具体框架将在决赛前夕公布</div>
			</div>
		</Modal>
	)
}