import React from "react";
import * as d3 from "d3";
import { format } from "d3-format";
import { curveMonotoneX } from "d3-shape";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries, AlternatingFillAreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../static/Stockdata";
import useWindowDimensions from "../../utils/sizewindow";
import HoverTooltip from "react-stockcharts/lib/tooltip/HoverTooltip";

const canvasGradient = createVerticalLinearGradient([
  { stop: 0, color: hexToRGBA("#42E083", 0.16) },
  { stop: 0.7, color: hexToRGBA("#42E083", 0.16) },
  { stop: 1, color: hexToRGBA("#42E083", 0.16) }
]);

class AreaChartWatchList extends React.Component {
  render() {
    const {width} = this.props;
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
    const end = xAccessor(data[Math.max(0, data.length - 90)]);
    const xExtents = [start, end];
    
    const candleChartExtents = (data) => {
      return data.open;
    };
    
    const yEdgeIndicator = (data) => {
      return data.open;
    };

    return (
      <ChartCanvas
        ratio={10}
        width={width}
        height={width * 0.36}
        margin={{ left: 10, right: 9, top: 5, bottom: 6 }}
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
        <Chart id={0} yExtents={(d) => d.open}>
          
          {/* <AreaSeries
            yAccessor={(d) => d.open}
            baseAt ={137}
            fill="url(#MyGradient)"
            strokeWidth={1}
            stroke = {"#42E083"}
            interpolation={curveMonotoneX}
            canvasGradient={canvasGradient}
          /> */}
          <AlternatingFillAreaSeries 
          baseAt ={data[data.length -90].open} 
          strokeWidth={{top:1,bottom:1}} 
          yAccessor={(d) => d.open} 
          connectNulls ={true} 
    
          stroke ={{ top: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" , bottom: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" }}
          fill ={{ top: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" , bottom: data[0].open > data[data.length -90].open? '#42E083':"#FF3541" }}
          interpolation={curveMonotoneX}
          fillOpacity ={{top:0.16, bottom:0.16}}
          />  

            {/* <HoverTooltip
						yAccessor={(d) => d.open}
            tooltipContent={tooltipContent([])}
						fontSize={15}/> */}
        </Chart>
      </ChartCanvas>
    );
  }
}



AreaChartWatchList.defaultProps = {
  type: "svg"
};
AreaChartWatchList = fitWidth(AreaChartWatchList);

export default AreaChartWatchList;
