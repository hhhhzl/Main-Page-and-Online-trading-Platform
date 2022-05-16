import React from "react";
import * as d3 from "d3";
import { format } from "d3-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries, AlternatingFillAreaSeries } from "react-stockcharts/lib/series";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import { timeFormat } from "d3-time-format";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../static/Stockdata";
import useWindowDimensions from "../../utils/sizewindow";
import HoverTooltip from "react-stockcharts/lib/tooltip/HoverTooltip";

const canvasGradient = createVerticalLinearGradient([
    { stop: 0, color: hexToRGBA("#42E083", 0.2) },
	{ stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.8) },
]);

const dateFormat = timeFormat("%Y-%m-%d");
const numberFormat = format(".2f");

function tooltipContent(ys) {
  return ({ currentItem, xAccessor }) => {
    return {
      x: dateFormat(xAccessor(currentItem)),
      y: [
        {
          // label: "close",
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

class AreaSeriesForStockPrice extends React.Component {
  render() {
    const {
        width, 
        timeperiod, 
        start, 
        end,
        xScale,
        xAccessor,
        displayXAccessor,
        data,
        updown,
    } = this.props;

     
    const startdata = xAccessor(start);
    const enddata = xAccessor(end);

    
    const xExtents = [startdata, enddata];
    


    return (
      <ChartCanvas
        ratio={1}
        width={width}
        height={width * 0.381}
        margin={{ left: 0, right: 2, top: 33, bottom: 34}}
        type={"svg"}
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
							<stop offset="0%" stopColor={updown? "#42E083" : "#FF3541" }  stopOpacity={0} />
							<stop offset="99%" stopColor={updown? "#42E083" : "#FF3541" } stopOpacity={0.07} />
							<stop offset="100%"  stopColor={updown? "#42E083" : "#FF3541" } stopOpacity={0.16} />
						</linearGradient>
		</defs>

    <HoverTooltip
			yAccessor={(d) => d}
            tooltipContent={tooltipContent([])}
            fill={ "white"}
	        bgFill ={updown? "#42E083" : "#FF3541"}  
            bgwidth ={1}
            fontFill={"black"}
            opacity={0} 
            bgheight ={1}
			      fontSize={12}
            />


        

        
          


          <AreaSeries
            yAccessor={(d) => d.close}
            tooltipContent={tooltipContent([])}
            fill="url(#MyGradient)"
            strokeWidth={1}
            stroke = {updown? "#42E083" : "#FF3541"}
            canvasGradient={canvasGradient}
          />
          {/* <AlternatingFillAreaSeries 
          baseAt ={data[data.length -90].open} 
          strokeWidth={{top:1,bottom:1}} 
          yAccessor={(d) => d.open} 
          connectNulls ={true} 
          stroke ={{ top: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" , bottom: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" }}
          fill ={{ top: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" , bottom: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" }}
          interpolation={curveMonotoneX}
          fillOpacity ={{top:0.16, bottom:0.16}}
          />   */}
        </Chart>
      </ChartCanvas>
    );
  }
}



AreaSeriesForStockPrice.defaultProps = {
  type: "svg"
};
AreaSeriesForStockPrice = fitWidth(AreaSeriesForStockPrice);

export default AreaSeriesForStockPrice;
