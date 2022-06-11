import * as d3 from "d3";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import React from "react";
import { Chart, ChartCanvas } from "react-stockcharts";
import { fitWidth } from "react-stockcharts/lib/helper";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { AreaSeries } from "react-stockcharts/lib/series";
import HoverTooltip from "react-stockcharts/lib/tooltip/HoverTooltip";
import {
  createVerticalLinearGradient,
  hexToRGBA, last
} from "react-stockcharts/lib/utils";
import { IntitialPData } from "../../constants/initialStateForPortfolio";

const canvasGradient = createVerticalLinearGradient([
    { stop: 0, color: hexToRGBA("#b5d0ff", 0) },
	{ stop: 0.9, color: hexToRGBA("#6fa4fc", 0.07) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.16) },
]);

const dateFormat = timeFormat("%Y-%m-%d");
const numberFormat = format(".2f");

function tooltipContent(ys) {
  return ({ currentItem, xAccessor }) => {
    return {
      x: dateFormat(xAccessor(currentItem)),
      y: [
        {
          label: "昨收",
          value: currentItem.close && numberFormat(currentItem.close)
        }
      ]
        .concat(
          ys.map((each) => ({
            // label: each.label,
            value: each.value(currentItem),
            stroke: each.stroke
          }))
        )
        .filter((line) => line.value)
    };
  };
}

class LineSeriesForPorfolio extends React.Component {
  render() {
    const {width, timeperiod, url} = this.props;
    const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
    const parseDate = d3.timeParse(dateTimeFormat);
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => parseDate(d.date)
      );
    const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
           IntitialPData
      );
    
    const pricesDisplayFormat = format(".2f");
    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - timeperiod)]);
    const xExtents = [start, end];
    
    const candleChartExtents = (data) => {
      return data.close;
    };
    
    const yEdgeIndicator = (data) => {
      return data.close;


    };


    return (
      <ChartCanvas
        ratio={1}
        width={width}
        height={width * 0.381}
        margin={{ left: 0, right: 0, top: 33, bottom:34}}
        type={"canvas"}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        mouseMoveEvent={true}
        panEvent={false}
        zoomEvent={false}
        clamp={false}
      >
        <Chart id={0} yExtents={d => d.close}>
        <defs>
						<linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
							<stop offset="0%" stopColor="#2B8CFF" stopOpacity={0} />
							{/* <stop offset="99.999%" stopColor="#2361FF" stopOpacity={0.03} /> */}
							<stop offset="100%"  stopColor="#2B8CFF " stopOpacity={0.16} />
						</linearGradient>
		</defs>


    {url != "/team"? 
    <HoverTooltip
						yAccessor={(d) => d}
            tooltipContent={tooltipContent([])}
            fill={ "white"}
	          bgFill ={timeperiod > 7? "#2361FF" : "#ADD8E6"}  
            bgwidth ={1}
            fontFill={"black"}
            opacity={0} 
            bgheight ={1}
						fontSize={12}
            /> : null }
   

          <AreaSeries
            yAccessor={(d) => d.close}
            fill="url(#MyGradient)"
            strokeWidth={1}
            stroke = {"#2346FF"}
            // canvasGradient={canvasGradient}
          />
        </Chart>
      </ChartCanvas>
    );
  }
}



LineSeriesForPorfolio.defaultProps = {
  type: "canvas"
};
LineSeriesForPorfolio = fitWidth(LineSeriesForPorfolio);

export default LineSeriesForPorfolio;
