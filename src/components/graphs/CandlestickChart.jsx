
import React, { useEffect } from "react";
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
import { ema, macd, heikinAshi, sma, kagi, bollingerBand, rsi, atr } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { DrawingObjectSelector,TrendLine, FibonacciRetracement, Brush, EquidistantChannel, StandardDeviationChannel, GannFan, InteractiveYCoordinate } from "react-stockcharts/lib/interactive";
import { last, toObject } from "react-stockcharts/lib/utils";

import {
	saveInteractiveNodes,
	getInteractiveNodes,
} from "./interactiveutils";
import { EmojiFoodBeverageTwoTone } from "@material-ui/icons";
import RSISeries from "react-stockcharts/lib/series/RSISeries";
import RSITooltip from "react-stockcharts/lib/tooltip/RSITooltip";
import SingleValueTooltip from "react-stockcharts/lib/tooltip/SingleValueTooltip";
import VolumeProfileSeries from "react-stockcharts/lib/series/VolumeProfileSeries";

const macdAppearance = {
	stroke: {
		macd: "#FFAB04",
		signal: "#035BFE",
	},
	fill: {
		divergence: function fill(d) {
			return d.macd.divergence <= 0 ? "#42E083" : "#FF3541";
		  }
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


class CandlestickChart extends React.Component {
	constructor(props) {
		super(props);
		this.onKeyPressTrendLine = this.onKeyPressTrendLine.bind(this);
		


		this.onDrawCompleteChart1 = this.onDrawCompleteChart1.bind(this);
		this.handleSelectionTrendLine = this.handleSelectionTrendLine.bind(this);


		// this.onFibComplete1 = this.onFibComplete1.bind(this);
		// this.handleSelectionFibbo = this.handleSelectionFibbo.bind(this);
		// this.onKeyPressFibbno = this.onKeyPressFibbno.bind(this);
		
		
		

		this.saveInteractiveNodes = saveInteractiveNodes.bind(this);
		this.getInteractiveNodes = getInteractiveNodes.bind(this);

		this.saveCanvasNode = this.saveCanvasNode.bind(this);
        this.handleReset = this.handleReset.bind(this);




		this.state = {
			enableTrendLine: false,
			trends_1: [],		
		};
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
			console.log(interactives)
			return [
				`trends_${each.chartId}`,
				each.objects,
			];
		});
		console.log(state)
		this.setState(state);
	}

	// handleSelectionFibbo(interactives) {
	// 	const state = toObject(interactives, each => {
	// 		return [
	// 			`retracements_${each.chartId}`,
	// 			each.objects,
	// 		];
	// 	});
	// 	this.setState(state);
	// }

	onDrawCompleteChart1(trends_1) {
		console.log(trends_1)
		this.setState({
			enableTrendLine: false,
			trends_1
	});
	}

	// onFibComplete1(retracements_1) {
	// 	this.setState({
	// 		retracements_1,
	// 		enableFib: false
	// 	});
	// }



	onKeyPressTrendLine(e) {
		const keyCode = e.which;
		console.log(keyCode);
		switch (keyCode) {
		case 46: { // DEL
			const trends_1 = this.state.trends_1
				.filter(each => !each.selected);
			this.canvasNode.cancelDrag();
			this.setState({
				trends_1,
			});
			break;
		}
		case 27: { // ESC
			this.node_1.terminate();
			this.node_3.terminate();
			this.canvasNode.cancelDrag();
			this.setState({
				enableTrendLine: false
			});
			break;
		}
		case 69: { // E - Enable trendline
			this.setState({
				enableTrendLine: true,
				});
			console.log(this.state)
			break;
		}
		}
	}

	// onKeyPressFibbno(e) {
	// 	const keyCode = e.which;
	// 	switch (keyCode) {
	// 	case 46: { // DEL
	// 		const retracements_1 = this.state.retracements_1
	// 			.filter(each => !each.selected);
	// 		this.canvasNode.cancelDrag();
	// 		this.setState({
	// 			retracements_1,
	// 		});
	// 		break;
	// 	}
	// 	case 27: { // ESC
	// 		this.canvasNode.cancelDrag();
	// 		this.node_1.terminate();
	// 		this.node_3.terminate();
	// 		this.setState({
	// 			enableFib: false
	// 		});
	// 		break;
	// 	}
	// 	case 68:   // D - Draw Fib
	// 	case 69: { // E - Enable Fib
	// 		this.setState({
	// 			enableFib: true
	// 		});
	// 		break;
	// 	}
	// 	}
	// }



    handleReset() {
		this.setState({
			suffix: this.state.suffix + 1
		});
	}

	render() {
		/////////////////////////////////indicators//////////////////////////////////////

////////////////////////////////////EMA/////////////////////
		const ema10 = ema()
			.id(0)
			.options({ windowSize: 10 })
			.merge((d, c) => {d.ema10 = c;})
			.accessor(d => d.ema10)
			.stroke("red")

		const ema25 = ema()
			.id(1)
			.options({ windowSize: 25 })
			.merge((d, c) => { d.ema25 = c; })
			.accessor(d => d.ema25)
			.stroke("orange")
			

		const ema50 = ema()
			.id(2)
			.options({ windowSize: 50 })
			.merge((d, c) => { d.ema50 = c; })
			.accessor(d => d.ema50)
			.stroke("green")
////////////////////////////////////////////////////////////////////////////////////////BolligerBand


		const bb = bollingerBand()
		.merge((d, c) => {d.bb = c;})
		.accessor(d => d.bb);
		
////////////////////////////////////////////////////////////////////////////////////////////////MACD
		const macdCalculator = macd()
			.options({
				fast: 12,
				slow: 26,
				signal: 9,
			})
			.merge((d, c) => {d.macd = c;})
			.accessor(d => d.macd);

////////////////////////////////////////////////////////////////////////////////////////////////RSI
		const rsiCalculator = rsi()
			.options({ windowSize: 14 })
			.merge((d, c) => {d.rsi = c;})
			.accessor(d => d.rsi);

////////////////////////////////////////////////////////////////////////////////////////////////RSI
		const atr14 = atr()
			.options({ windowSize: 14 })
			.merge((d, c) => {d.atr14 = c;})
			.accessor(d => d.atr14);


////////////////////////////////////////////////////////////////////DIY////////////////////////////
		
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






		const { 
			width, 
			choice, 
			ma, 
			open, 
			volumeshow,
			screeheight,
			emashow,
			macdshow,
			bollingshow,
			graphnumber,
			rsishow,
			ATRshow,
		} = this.props;
        const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
        const parseDate = d3.timeParse(dateTimeFormat);

		var emafunc = []
		var accseetor = []
		  
		ma.map((elem, index) => {
			emafunc.push(drawEma(elem,index))
		})
		let emafuncreal = [ema10,ema50]
		emafuncreal.map((elem, index) => {
			accseetor.push(elem.accessor)
		})
		
		const calculatedtest = macdCalculator(
			ema10(ema25(ema50(bb(rsiCalculator(atr14(SampleData))))))
			)
		
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
		const chartheight = screeheight;
		const charshort = width / 1.7
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
			
			    {[ema10,ema50].map((elem) => {
					<LineSeries yAccessor={elem.accessor()} stroke={elem.stroke()}/>
				})}
				</>
			)
		}

		const CurrentCoordinate = () => {
			return (
				<>
				{[ema10,ema50].map((elem) => {
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
				type={"canvas"}
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
                mouseMoveEvent = {true}
                zoomEvent={false}
                clamp ={false}
			>
				<Chart id={1} height={graphnumber == 0? chartheight *0.96 : graphnumber == 1?  chartheight * 0.65 : graphnumber == 2? chartheight * 0.53 : chartheight * 0.5}
					yExtents={[d => [d.high, d.low],ema10.accessor(),ema25.accessor(),ema50.accessor(),bb.accessor() ]}
					padding={{ top: 10, bottom: 20 }}
    
				>
					<XAxis axisAt="bottom" orient="bottom" 
					showTicks={true} 
					showTickLabel ={true}
					showDomain ={false}
					ticks={graphnumber==0? 10 : 6}
					{...xGrid}
					/>
					<YAxis axisAt="right" orient="right" ticks={10}
					{...yGrid}

                     />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />

					<CandlestickSeries  {...candlesAppearance} />

					



{/* ////////////////////////////////////////////EMA/////////////////////////////////////////////////////// */}
					{emashow? <>

					<CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />
					<CurrentCoordinate yAccessor={ema10.accessor()} fill={ema10.stroke()} /> 
					<CurrentCoordinate yAccessor={ema25.accessor()} fill={ema25.stroke()} /> 
					<LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()}/>
					<LineSeries yAccessor={ema25.accessor()} stroke={ema25.stroke()}/>
					<LineSeries yAccessor={ema10.accessor()} stroke={ema10.stroke()}/> 

					<MovingAverageTooltip
						onClick={e => console.log(e)}
						origin={[0, 36]}
						options={[
							{
								yAccessor: ema10.accessor(),
								type: ema10.type(),
								stroke: ema10.stroke(),
								windowSize: ema10.options().windowSize,
							},
							{
								yAccessor: ema25.accessor(),
								type: ema25.type(),
								stroke: ema25.stroke(),
								windowSize: ema25.options().windowSize,
							},
							{
								yAccessor: ema50.accessor(),
								type: ema50.type(),
								stroke: ema50.stroke(),
								windowSize: ema50.options().windowSize,
							},
						]}
					/>
					</>:null
   				   }
{/* // ////////////////////////////////////////////////////////////////////////////////////////BollingerBand */}

                {bollingshow?
				 <>
					<BollingerSeries yAccessor={d => d.bb}
						stroke={bbStroke}
						fill={"#4682B4"} />
					<BollingerBandTooltip
					    fontFamily={"Microsoft YaHei UI-Bold, Microsoft YaHei UI"}
						fontSize={14}
						className="tool-tip"
						textFill={"#2A2B30"}
						labelFill={"#2A2B30"}
						origin={[0, emashow? 80 : 45]}
						yAccessor={d => d.bb}
						options={bb.options()} />
					</>
				:null}
					




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
                   

					

                    <ZoomButtons
						onReset={this.handleReset}
					/>
                    
					<TrendLine
						ref={this.saveInteractiveNodes("Trendline", 1)}
						enabled={this.state.enableTrendLine}
						type="XLINE"
						snap={false}
						snapTo={d => [d.high, d.low]}
						onStart={() => console.log("START")}
						onComplete={this.onDrawCompleteChart1}
						trends={this.state.trends_1}
					/>


					{/* <InteractiveChoice/> */}
                     
				</Chart>


                
					<Chart id={2} height={graphnumber == 0? chartheight * 0.25 : graphnumber == 1?  chartheight * 0.16 : graphnumber == 2? chartheight * 0.13  : chartheight * 0.115  }
					yExtents={volumeSeries}
					origin={(w, h) => [0,graphnumber== 0? h- chartheight *0.24 : graphnumber == 1? h - chartheight *0.47 : graphnumber == 2? h - chartheight *0.55 : h - chartheight *0.57 ]}
				    >

						
				{volumeshow? 
				<>
					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>

					<MouseCoordinateY
						at="left"
						orient="left"
						displayFormat={format(".4s")} />
					<BarSeries yAccessor={volumeSeries} stroke = {true} fill={d => d.close > d.open ? "#42E083" : "#FF3541"} opacity={0.5}/>
					</> : null}
				</Chart>

				           
			   <Chart id={3} height={graphnumber == 1? chartheight*0.3 : graphnumber == 2? chartheight*0.2 :  chartheight*0.13}
					yExtents={macdCalculator.accessor()}
					origin={(w, h) => [0, graphnumber == 1? h - chartheight*0.3 : graphnumber == 2? h - chartheight*0.4 : h - chartheight*0.44 ]} 
					padding={{ top: 10, bottom: 10 }}
				>
              {macdshow? <>
				<XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
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
						className="tool-tip"
					fontFamily={"Microsoft YaHei UI-Bold, Microsoft YaHei UI"}
					fontSize={14}
					textFill={"#2A2B30"}
					labelFill={"#2A2B30"}
						yAccessor={d => d.macd}
						options={macdCalculator.options()}
						appearance={macdAppearance}					
					/>
					</>:null}
				</Chart>

				<Chart id={4} height={graphnumber == 1? chartheight*0.3 : graphnumber == 2? chartheight*0.2 :  chartheight*0.13}
					yExtents={[0,100]}
					origin={(w, h) => [0, graphnumber == 1? h - chartheight*0.3 : graphnumber == 2? h - chartheight*0.2 : h - chartheight*0.3 ]} 
					padding={{ top: 10, bottom: 10 }}
				>

              {rsishow? <>
				<XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
				    <XAxis axisAt="bottom" orient="bottom"/>
					<YAxis axisAt="right"
						orient="right"
						tickValues={[30, 50, 70]}/>
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />

					<RSISeries yAccessor={d => d.rsi} />

					<RSITooltip origin={[0, 22]}
					fontFamily={"Microsoft YaHei UI-Bold, Microsoft YaHei UI"}
					fontSize={14}
					className="tool-tip"
					textFill={"#2A2B30"}
					labelFill={"#2A2B30"}
					yAccessor={d => d.rsi}
					options={rsiCalculator.options()} />
					</>:null}
				</Chart>

				<Chart id={8}
					yExtents={atr14.accessor()}
					height={graphnumber == 1? chartheight*0.3 : graphnumber == 2? chartheight*0.2 :  chartheight*0.13}
					origin={(w, h) => [0, graphnumber == 1? h - chartheight*0.3 : graphnumber == 2? h - chartheight*0.2 : h - chartheight*0.13 ]} 
				>

					{
						ATRshow? 
						<>

					<XAxis axisAt="bottom" orient="bottom" {...yGrid} />
					<YAxis axisAt="right" orient="right" ticks={2} {...yGrid}/>

					<MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")} />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />

					<LineSeries yAccessor={atr14.accessor()} stroke={atr14.stroke()}/>
					<SingleValueTooltip
						yAccessor={atr14.accessor()}
						yLabel={`ATR (${atr14.options().windowSize})`}
						yDisplayFormat={format(".2f")}
						fontFamily={"Microsoft YaHei UI-Bold, Microsoft YaHei UI"}
					    fontSize={14}
					    className="tool-tip"
					    textFill={"#2A2B30"}
					    labelFill={"#2A2B30"}
						/* valueStroke={atr14.stroke()} - optional prop */
						/* labelStroke="#4682B4" - optional prop */
						origin={[0, 22]}/>
						</>
						:
						null
					}
					
				</Chart>
			   


				


				<CrossHairCursor />

				<DrawingObjectSelector
					enabled={!this.state.eenableTrendLine}
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


CandlestickChart.defaultProps = {
	type: "svg",
};

const CandleStickChart = fitWidth(CandlestickChart);

export default CandleStickChart;
