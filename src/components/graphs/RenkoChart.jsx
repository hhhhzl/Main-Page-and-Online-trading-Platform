
import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { curveMonotoneX } from "d3-shape";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import "./chart.css"

import { ChartCanvas, Chart,ZoomButtons } from "react-stockcharts";
import {
	BarSeries,
	CandlestickSeries,
    BollingerSeries,
	LineSeries,
	MACDSeries,
    KagiSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	CrossHairCursor,
	EdgeIndicator,
	CurrentCoordinate,
	MouseCoordinateX,
	MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";
import { SampleData } from "../../static/Stockdata";

import { discontinuousTimeScaleProvider, discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import {
	OHLCTooltip,
	MovingAverageTooltip,
	MACDTooltip,
    BollingerBandTooltip
} from "react-stockcharts/lib/tooltip";
import { ema, macd, heikinAshi, sma, kagi, bollingerBand, renko } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { DrawingObjectSelector,TrendLine, FibonacciRetracement, Brush, EquidistantChannel, StandardDeviationChannel, GannFan, InteractiveYCoordinate } from "react-stockcharts/lib/interactive";
import { last, toObject } from "react-stockcharts/lib/utils";

import {
	saveInteractiveNodes,
	getInteractiveNodes,
} from "./interactiveutils";
import { EmojiFoodBeverageTwoTone } from "@material-ui/icons";
import RenkoSeries from "react-stockcharts/lib/series/RenkoSeries";

const macdAppearance = {
	stroke: {
		macd: "orange",
		signal: "blue",
	},
	fill: {
		divergence: "#4682B4"
	},
};

const candlesAppearance = {
    wickStroke: function fill(d) {
        return d.close > d.open ? "#42E083" : "#FF3541";
      },
    fill: function fill(d) {
      return d.close > d.open ? "#42E083" : "#FF3541";
    },
    stroke: function fill(d) {
        return d.close > d.open ? "#42E083" : "#FF3541";
      },
    candleStrokeWidth: 1,
    widthRatio: 0.8,
    opacity: 1,
  }


  const bbStroke = {
	top: "#964B00",
	middle: "#000000",
	bottom: "#964B00",
};


class RenkoChart extends React.Component {
	constructor(props) {
		super(props);
		this.onKeyPressTrendLine = this.onKeyPressTrendLine.bind(this);
		this.onKeyPressFibbno = this.onKeyPressFibbno.bind(this);


		this.onDrawCompleteChart1 = this.onDrawCompleteChart1.bind(this);


		this.onFibComplete1 = this.onFibComplete1.bind(this);
		
		this.handleSelectionTrendLine = this.handleSelectionTrendLine.bind(this);
		this.handleSelectionFibbo = this.handleSelectionFibbo.bind(this);

		this.saveInteractiveNodes = saveInteractiveNodes.bind(this);
		this.getInteractiveNodes = getInteractiveNodes.bind(this);

		this.saveCanvasNode = this.saveCanvasNode.bind(this);
        this.handleReset = this.handleReset.bind(this);

		this.state = {
			Trendline:{
				enableTrendLine: false,
				trends_1: [{ start: [], end: [], appearance: { stroke: "green" }, type: "XLINE" }],
			}
			
		};

		// this.state = {
		// 	enableFib: true,
		// 	retracements_1: [],
		// };
	}

	saveCanvasNode(node) {
		this.canvasNode = node;
	}
	componentDidMount() {
		document.addEventListener("keyup", this.onKeyPressTrendLine);
	}
	componentWillUnmount() {
		document.removeEventListener("keyup", this.onKeyPressTrendLine);
        
	}


	handleSelectionTrendLine(interactives) {
		const state = toObject(interactives, each => {
			return [
				`trends_${each.chartId}`,
				each.objects,
			];
		});
		this.setState({Trendline: state});
	}

	handleSelectionFibbo(interactives) {
		const state = toObject(interactives, each => {
			return [
				`retracements_${each.chartId}`,
				each.objects,
			];
		});
		this.setState(state);
	}

	onDrawCompleteChart1(trends_1) {
		this.setState({
			Trendline:
			{
			enableTrendLine: false,
			trends_1
		}
	});
	}

	onFibComplete1(retracements_1) {
		this.setState({
			retracements_1,
			enableFib: false
		});
	}



	onKeyPressTrendLine(e) {
		const keyCode = e.which;
		console.log(keyCode);
		switch (keyCode) {
		case 46: { // DEL

			const trends_1 = this.state.Trendline.trends_1
				.filter(each => !each.selected);

			this.canvasNode.cancelDrag();
			this.setState({Trendline: {
				trends_1,
			}}
				);
			break;
		}
		case 27: { // ESC
			this.node_1.terminate();
			this.node_3.terminate();
			this.canvasNode.cancelDrag();
			this.setState(
				{Trendline:
				{
				enableTrendLine: false
			}});
			break;
		}
		case 68:   // D - Draw trendline
		case 69: { // E - Enable trendline
			this.setState({
				Trendline:
				{
				enableTrendLine: true,
				
			}});
			break;
		}
		}
	}

	onKeyPressFibbno(e) {
		const keyCode = e.which;
		switch (keyCode) {
		case 46: { // DEL
			const retracements_1 = this.state.retracements_1
				.filter(each => !each.selected);


			this.canvasNode.cancelDrag();
			this.setState({
				retracements_1,
			});
			break;
		}
		case 27: { // ESC
			this.canvasNode.cancelDrag();
			this.node_1.terminate();
			this.node_3.terminate();
			this.setState({
				enableFib: false
			});
			break;
		}
		case 68:   // D - Draw Fib
		case 69: { // E - Enable Fib
			this.setState({
				enableFib: true
			});
			break;
		}
		}
	}



    handleReset() {
		this.setState({
			suffix: this.state.suffix + 1
		});
	}




	render() {
		/////////////////////////////////indicators//////////////////////////////////////

		const renkoCalculator = renko();
        const bb = bollingerBand()
			.merge((d, c) => {d.bb = c;})
			.accessor(d => d.bb);


		const ema50 = ema()
			.id(0)
			.options({ windowSize: 50 })
			.merge((d, c) => { d.ema50 = c; })
			.accessor(d => d.ema50);

		const ema60 = ema()
			.id(2)
			.options({ windowSize: 60 })
			.merge((d, c) => { d.ema60 = c; })
			.accessor(d => d.ema60);

		const ema12 = ema()
			.id(1)
			.options({ windowSize: 12 })
			.merge((d, c) => {d.ema12 = c;})
			.accessor(d => d.ema12);

		const macdCalculator = macd()
			.options({
				fast: 12,
				slow: 26,
				signal: 9,
			})
			.merge((d, c) => {d.macd = c;})
			.accessor(d => d.macd);
		
		const drawEma = (number,id) =>{
			const emafunc = ema()
				.id(id)
				.options({ windowSize: number })
				.merge((d, c) => { d.drawEma = c; })
				.accessor(d => d.drawEma);
			return emafunc
		}

		const dataprepareMa = (data,emafunc) =>{
			if (emafunc.length == 1){
				return emafunc[0](data)
			}else {
				return emafunc[0](dataprepareMa(data,emafunc.slice(1,)))

			}
			    

		}

		const dataprepareMa2 = (data,emafunc) =>{
			var results;
			results = emafunc[0](data)
			emafunc.slice(1).map((elem) =>{
				results = elem(results)
			})
			console.log(results,308)
			    

		}

		

        //////////////////////////////////////////////////////////////////////////////////////////////






		const { width, choice, ma} = this.props;
        const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
        const parseDate = d3.timeParse(dateTimeFormat);

		var emafunc = []
		var accseetor = []
		  
		ma.map((elem, index) => {
			emafunc.push(drawEma(elem,index))
		})
		console.log(emafunc,321)
		let emafuncreal = [ema12,ema50]
		emafuncreal.map((elem, index) => {
			accseetor.push(elem.accessor)
		})
		console.log(emafunc,333)
		console.log( emafunc.map((elem) => elem.accessor()))
		
		const calculatedtest = macdCalculator(dataprepareMa(renkoCalculator(SampleData),emafuncreal))
		

		// const calculatedData = ema50(ema12(SampleData));
		// console.log(calculatedData)
		console.log(calculatedtest)
		const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
            (d) => parseDate(d.date)
            );
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(calculatedtest);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 200)]);
		const xExtents = [start, end];


		const chartwidth = width;
		const chartheight = width/2.16;
		const margin = { left: width * 0.025, right: width * 0.054, top: 10, bottom: 33 }

		const gridHeight = chartheight - margin.top - margin.bottom;
		const gridWidth = width - margin.left - margin.right;

		const showGrid = true;
		const yGrid = showGrid ? { 
			innerTickSize: -1 * gridWidth,
			tickStrokeDasharray: 'ShortDot',
            tickStrokeOpacity: 0.1,
            tickStrokeWidth: 1

		 } : {};
		const xGrid = showGrid ? { 
			innerTickSize: -1 * gridHeight,
			tickStrokeDasharray: 'ShortDot',
            tickStrokeOpacity: 0.1,
            tickStrokeWidth: 1
		 } : {};


        const volumeSeries = (data) => {
            return parseFloat(data.volume);

          };

		  const avergelineseries = () => {
			return (
				<>
			
			    {/* {[ema12,ema50].map((elem) => {
					<LineSeries yAccessor={elem.accessor()} stroke={elem.stroke()}/>
				})} */}
                <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()}/>
                <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>
				</>
			)
		}

		const CurrentCoordinate = () => {
			return (
				<>
				{[ema12,ema50].map((elem) => {
					<CurrentCoordinate yAccessor={elem.accessor()} fill={elem.stroke()} />
				})}
				</>
			)
		}

		  

/////////////////////////////////////////////画图////////////////////////////////////////////////////
		const TrendLineDraw = () => {
			return (
				<TrendLine
						ref={this.saveInteractiveNodes("Trendline", 1)}
						enabled={this.state.enableTrendLine}
						type="RAY"
						snap={false}
						snapTo={d => [d.high, d.low]}
						onStart={() => console.log("START")}
						onComplete={this.onDrawCompleteChart1}
						trends={this.state.trends_1}
				/>
			)
		}

		const Fibonacci = () =>{
			return (
				<FibonacciRetracement 
				ref={this.saveInteractiveNodes("FibonacciRetracement", 1)} 
				enabled={this.state.enableFib} 
				retracements={this.state.retracements_1} 
				onComplete={this.onFibComplete1}/>
			)
		}


	    
		let interactiveChoice = {
			"Trendline": TrendLineDraw,
			"FibonacciRetracement": Fibonacci,
			"EquidistantChannel": EquidistantChannel,
			"StandardDeviationChannel": StandardDeviationChannel,
			"GannFan": GannFan,
			"Brush": Brush,
		  };


	    let InteractiveChoice = interactiveChoice[choice]; 

		let avergeline = {
			"line": avergelineseries,
			"CurrentCoordinate":CurrentCoordinate,

		}

		let LineSeriesMAseries = avergeline['line']

		let CurrentC = avergeline["CurrentCoordinate"]

		return (
			<ChartCanvas ref={this.saveCanvasNode}
                ratio={1}
				height={chartheight}
				width={chartwidth}	
				margin={margin}
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
                mouseMoveEvent = {true}
                zoomEvent={false}
                clamp ={false}
			>
				<Chart id={1} height={chartheight * 0.64}
					yExtents={[d => [d.high, d.low], emafuncreal.map((elem) => elem.accessor())]}
					padding={{ top: 10, bottom: 20 }}
    
				>
					<XAxis axisAt="bottom" orient="bottom" 
					showTicks={true} 
					showTickLabel ={true}
					showDomain ={false}
					ticks={6}
					{...xGrid}
					/>
					<YAxis axisAt="right" orient="right" ticks={10}
					{...yGrid}

                     />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />
                        
                        <RenkoSeries fill={{
                            up: "#6BA583",
                            down: "#E60000",
                            partial: "#4682B4",
                        }} />

                    {/* <BollingerSeries yAccessor={d => d.bb}
						stroke={bbStroke}
						fill={bbFill} /> */}



			
					{/* <LineSeries yAccessor={ema50.accessor()} stroke={ema60.stroke()}/>
					<LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()}/>  */}



					<LineSeriesMAseries/>
					{/* <CurrentC/> */}

             
					<CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />
					<CurrentCoordinate yAccessor={ema12.accessor()} fill={ema12.stroke()} /> 

					<EdgeIndicator itemType="last" orient="right" edgeAt="right"
						yAccessor={d => d.close} fill={d => d.close > d.open ? "#26a69a" : "#ef5350"}/>

					<OHLCTooltip 
					className="tool-tip"
					fontFamily={"Microsoft YaHei UI-Bold, Microsoft YaHei UI"}
					fontSize={14}
					textFill={"#2A2B30"}
					labelFill={"#2A2B30"}
					displayTexts={{
						d: "日期 ",
						o: " · 开盘 ",
						h: " · 高 ",
						l: " · 低 ",
						c: " · 收 ",
						v: " · 量 ",
						na: "n/a"
					}}		
					origin={[0, 20]}/>
                   

					{/* <MovingAverageTooltip
						onClick={e => console.log(e)}
						origin={[0, 15]}
						options={[
							{
								yAccessor: ema26.accessor(),
								type: ema26.type(),
								stroke: ema26.stroke(),
								windowSize: ema26.options().windowSize,
							},
							{
								yAccessor: ema12.accessor(),
								type: ema12.type(),
								stroke: ema12.stroke(),
								windowSize: ema12.options().windowSize,
							},
						]}
					/> */}

                    <ZoomButtons
						onReset={this.handleReset}
					/>
                    
					<TrendLine
						ref={this.saveInteractiveNodes("Trendline", 1)}
						enabled={this.state.Trendline.enableTrendLine}
						type="XLINE"
						snap={false}
						snapTo={d => [d.high, d.low]}
						onStart={() => console.log("START")}
						onComplete={this.onDrawCompleteChart1}
						trends={this.state.Trendline.trends_1}
					/>


					{/* <InteractiveChoice/> */}
                     
				</Chart>




				<Chart id={2} height={chartheight *0.2}
					yExtents={volumeSeries}
					origin={(w, h) => [0, h - chartheight * 0.32 - 150]}
				>
					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>

					<MouseCoordinateY
						at="left"
						orient="left"
						displayFormat={format(".4s")} />
					<BarSeries yAccessor={volumeSeries} stroke = {true} fill={d => d.close > d.open ? "#42E083" : "#FF3541"} opacity={0.5}/>
				</Chart>
				





				<Chart id={3} height={chartheight*0.3}
					yExtents={macdCalculator.accessor()}
					origin={(w, h) => [0, h - chartheight*0.3]} padding={{ top: 10, bottom: 10 }}
				>
					<XAxis axisAt="bottom" orient="bottom"/>
					<YAxis axisAt="right" orient="right" ticks={2} />

					<MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")} />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />e
					<MACDSeries yAccessor={d => d.macd}
						{...macdAppearance} />
					<MACDTooltip
						origin={[0, 40]}
						yAccessor={d => d.macd}
						options={macdCalculator.options()}
						appearance={macdAppearance}
					/>
				</Chart>


				<CrossHairCursor />

				<DrawingObjectSelector
					enabled={!this.state.Trendline.eenableTrendLine}
					getInteractiveNodes={this.getInteractiveNodes}
					drawingObjectMap={{
						Trendline: "trends"
					}}
					onSelect={this.handleSelectionTrendLine}
				/>
			</ChartCanvas>
		);
	}
}


RenkoChart.defaultProps = {
	type: "svg",
};

const Renkochart = fitWidth(RenkoChart);

export default Renkochart;
