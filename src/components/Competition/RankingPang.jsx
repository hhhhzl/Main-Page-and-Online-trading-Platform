import { useState } from "react";
import { Image } from "react-bootstrap";
import './RankingPang.css'
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Collapse } from "react-bootstrap";

import data from "../../static/subjectivityRanking.json";
import data1 from "../../static/quantitativeRanking.json";
import AreaTableForWatchListBlue from '../graphs/AreaTableForWatchListBlue';
import PorforlioMoveGraph from "../screen/PortforlioMoveGraph";
import LineSeriesForPorfolio from "../graphs/LineSeriesForPorfolio";
import LineSeriesPorfolioRanking from "../graphs/LineSeriesPorfolioRank";
import TeamModelIntro from "../screen/modal/teamModelIntro";

export default function RankingPang() {
	const [current, setCurrent] = useState(0);
	const changeCurrent = (index) => {
		setCurrent(index);
	};

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);




	const columns = [
		{
			dataField: "团队",
			text: "团队",
			style: {
				width: "20%"
			},
			formatter: (value, row, rowIndex) => {
				return (
					<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<div
							style={{
								fontSize: "18px",
								fontFamily: "Futura",
								fontWeight: "500",
								color: "#2A2B30",
								lineHeight: "24px",
								paddingRight: "40px"
							}}>{rowIndex + 1}
						</div>
						<div>
							<Image src={value[0]} style={{ width: "36px", height: "36px" }}></Image>
						</div>
						<div
							style={{
								fontSize: "14px",
								fontFamily: "Microsoft YaHei UI-Regular, Microsoft YaHei UI",
								fontWeight: "400",
								color: "#2A2B30",
								lineHeight: "24px",
								marginLeft: "6px"
							}}
						>
							{value[1]}
						</div>
					</div>
				);
			},
		},
		{
			dataField: "资产曲线图",
			text: "资产曲线图",
			style: {
				width: "20%"
			},
			formatter: (value, row) => {
				return (
					<div style={{ textAlign: "center",display:"flex", justifyContent: "center"}}>
						<LineSeriesPorfolioRanking width={100} timeperiod={90} />
					</div>
				);
			},
		},
		{
			dataField: "综合收益率",
			text: "综合收益率",
			sort: true,
			style: {
				width: "20%"
			},
			formatter: (value, row) => {
				return (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								fontSize: "14px",
								fontFamily: "MicrosoftYaHeiUI",
								fontWeight: "bold",
								color: "#2A2B30",
								textAlign: "center"
							}}>
							{value}
						</div>
						<div
							style={{
								width: "0",
								height: "0",
								border: "6px solid transparent",
								borderBottomColor: "rgb(66, 224, 131)",
								marginLeft: "6px"
							}}
						>
						</div>
					</div>
				);
			},
		},
		{
			dataField: "夏普比率",
			text: "夏普比率",
			sort: true,
			style: {
				width: "20%"
			},
			formatter: (value, row) => {
				return (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								fontSize: "14px",
								fontFamily: "MicrosoftYaHeiUI",
								fontWeight: "bold",
								color: "#2A2B30",
								textAlign: "center"
							}}>
							{value}
						</div>
						<div
							style={{
								width: "0",
								height: "0",
								border: "6px solid transparent",
								borderTopColor: "#FF3541",
								marginLeft: "6px",
								marginTop: "8px"
							}}
						>
						</div>
					</div>
				);
			},
		},
		{
			dataField: "综合分数",
			text: "综合分数",
			sort: true,
			style: {
				width: "20%"
			},
			formatter: (value, row) => {
				return (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								fontSize: "14px",
								fontFamily: "MicrosoftYaHeiUI",
								fontWeight: "bold",
								color: "#2A2B30",
								textAlign: "center"
							}}>
							{value}
						</div>
						<div
							style={{
								width: "0",
								height: "0",
								border: "6px solid transparent",
								borderBottomColor: "rgb(66, 224, 131)",
								marginLeft: "6px"
							}}
						>
						</div>
					</div>
				);
			},
		}
	]


	const rowEvents = {
		onClick: (e, row, rowIndex) => {
			setShow(true)

		},
	};

	return (
		<>
			{show ? <TeamModelIntro show={show} handleClose={handleClose} /> : null}


			<div style={{ width: "100%" }}>
				<div className="ranking-pang-tabs" style={{ backgroundColor: "#F5F6F8" }}>
					<div
						onClick={() => changeCurrent(0)}
						className={current == 0 ? "active-font" : "normal-font"}
					>主观排行榜</div>
					<div
						onClick={() => changeCurrent(1)}
						className={current == 1 ? "active-font" : "normal-font"}
						style={{ marginLeft: "24px" }}
					>量化排行榜</div>
				</div>
				<div className="ranking-pang-table-div" style={{height:"max-content",minHeight:"700px",marginBottom:"84px"}}>
					{	current == 0 ? (
							<div>
								<div className="ranking-pang-table" style={{overflowX: "auto"}}>
									<BootstrapTable
										style="table"
										bordered={false}
										hover
										condensed
										keyField="id"
										data={data}
										columns={columns}
										rowEvents={rowEvents}
									/>
								</div>
							</div>
						) : (
							<div>
								<div className="ranking-pang-table">
									<BootstrapTable
										style="table"
										bordered={false}
										hover
										condensedkeyField="id"
										data={data1}
										columns={columns}
									/>
								</div>
							</div>
						)
					}


				</div>
			</div>
		</>
	)
}