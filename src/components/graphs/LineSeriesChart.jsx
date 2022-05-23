import React from "react";
import * as d3 from "d3";
import { format } from "d3-format";
import { curveMonotoneX } from "d3-shape";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries, AlternatingFillAreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import { timeFormat } from "d3-time-format";
import {
	CrossHairCursor,
	EdgeIndicator,
	CurrentCoordinate,
	MouseCoordinateX,
	MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../static/Stockdata";
import useWindowDimensions from "../../utils/sizewindow";
import HoverTooltip from "react-stockcharts/lib/tooltip/HoverTooltip";
import OHLCTooltip from "react-stockcharts/lib/tooltip/OHLCTooltip";
import ZoomButtons from "react-stockcharts/lib/ZoomButtons";
import BarSeries from "react-stockcharts/lib/series/BarSeries";
import { macd } from "react-stockcharts/lib/indicator";
import MACDSeries from "react-stockcharts/lib/series/MACDSeries";
import MACDTooltip from "react-stockcharts/lib/tooltip/MACDTooltip";

const canvasGradient = createVerticalLinearGradient([
    { stop: 0, color: hexToRGBA("#b5d0ff", 0.2) },
	{ stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.8) },
]);

const macdAppearance = {
	stroke: {
		macd: "#FFAB04",
		signal: "#035BFE",
	},
	fill: {
		divergence: "#42E083"
	},
};


class LineSerieschart extends React.Component {
    constructor(props) {
		super(props);
        this.handleReset = this.handleReset.bind(this);

    }

    handleReset() {
		this.setState({
			suffix: this.state.suffix + 1
		});
	}
    
  render() {


    const macdCalculator = macd()
			.options({
				fast: 12,
				slow: 26,
				signal: 9,
			})
			.merge((d, c) => {d.macd = c;})
			.accessor(d => d.macd);


    const {width, choice, ma, open} = this.props;



    



    const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
    const parseDate = d3.timeParse(dateTimeFormat);
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => parseDate(d.date)
      );
    const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        SampleData
      );
    
    const pricesDisplayFormat = format(".2f");
    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 200)]);
    const xExtents = [start, end];

    const chartwidth = width;
		const chartheight = width/2.16;
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

    
    
    const candleChartExtents = (data) => {
      return data.open;
    };
    
    const yEdgeIndicator = (data) => {
      return data.open;


    };


    return (
      <ChartCanvas
        ratio={1}
        height={open? charshort : chartheight}
        width={chartwidth}	
        margin={margin}
        type={"svg"}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        mouseMoveEvent = {true}
        zoomEvent={false}
        clamp ={false}
      >
        <Chart id={0} height={chartheight * 0.64} yExtents={d => d.close}>
        {/* <defs>
						<linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
							<stop offset="0%" stopColor="#2B8CFF" stopOpacity={0} />
							<stop offset="99%" stopColor="#2361FF" stopOpacity={0.07} />
							<stop offset="100%"  stopColor="#2B8CFF " stopOpacity={0.16} />
						</linearGradient>
		</defs> */}

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
        

          <AreaSeries
            yAccessor={(d) => d.close}
            fill="url(#MyGradient)"
            strokeWidth={2}
            stroke = {"#42E083"}
            // canvasGradient={canvasGradient}
          />


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
        </Chart>

        <Chart id={2} height={chartheight *0.1}
					yExtents={volumeSeries}
					origin={(w, h) => [0, h - chartheight * 0.41]}
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
						className="tool-tip"
					fontFamily={"Microsoft YaHei UI-Bold, Microsoft YaHei UI"}
					fontSize={14}
					textFill={"#2A2B30"}
					labelFill={"#2A2B30"}
						yAccessor={d => d.macd}
						options={macdCalculator.options()}
						appearance={macdAppearance}
					/>
				</Chart>

      </ChartCanvas>
    );
  }
}



LineSerieschart.defaultProps = {
  type: "svg"
};

const LineSeriesChart = fitWidth(LineSerieschart);

export default LineSeriesChart;
