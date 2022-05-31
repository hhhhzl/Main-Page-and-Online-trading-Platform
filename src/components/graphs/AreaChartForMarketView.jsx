import React from "react";
import * as d3 from "d3";
import { format } from "d3-format";
import { curveMonotoneX } from "d3-shape";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { XAxis, YAxis } from "@react-financial-charts/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../static/Stockdata";
import useWindowDimensions from "../../utils/sizewindow";
import CrossHairCursor from "react-stockcharts/lib/coordinates/CrossHairCursor";

const canvasGradient = (upDown) => createVerticalLinearGradient([
  { stop: 0, color: hexToRGBA(upDown ? "#42E083" : "#FF3541", 0) },
  { stop: 0.99, color: hexToRGBA(upDown ? "#42E083" : "#FF3541", 0.16) },
  { stop: 1, color: hexToRGBA(upDown ? "#42E083" : "#FF3541", 0.3) }
]);

class AreaChartForMarketView extends React.Component {
  
  render() {
    const {width, upDown} = this.props;
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
    const end = xAccessor(data[Math.max(0, data.length - 50)]);
    const xExtents = [start, end];
    
    const candleChartExtents = (data) => {
      return data.open;
    };
    
    const yEdgeIndicator = (data) => {
      return data.open;
    };

    return (
      <ChartCanvas
        ratio={1}
        width={width}
        height={width/1.51153}
        margin={{ left: 0, right: width*0.143, top: width*0.046, bottom: 0}}
        type={"hybrid"}
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
        <Chart id={0} yExtents={(d) => d.close}>
          {/* <defs>
            <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#b5d0ff" stopOpacity={0} />
              <stop offset="50%" stopColor="#6fa4fc" stopOpacity={0.16} />
              <stop offset="100%" stopColor="#4286f4" stopOpacity={0.16} />
            </linearGradient>
          </defs> */}
          <XAxis 
          axisAt="bottom" 
          orient="bottom" 
          ticks={2} 
          showTicks = {false}
          showTickLabel = {true}  
          showDomain ={false}
           />
          <YAxis axisAt="right" orient="right" 
          tickLabelFill={"#9C9EAC"}
          showTickLabel = {true}
          showTicks={false}
          showDomain ={false}
          ticks ={5}
          fontSize={12}
          fontFamily ={"Futura-Medium, Futura"}
          fontWeight ={500}
          tickPadding = {width*0.0458}
          />
          <AreaSeries
            yAccessor={(d) => d.close}
            fill="url(#MyGradient)"
            stroke={ upDown ? "#42E083" : "#FF3541"}
            strokeWidth={1}
            interpolation={curveMonotoneX}
            canvasGradient={canvasGradient(upDown)}
          />
        </Chart>
      </ChartCanvas>
    );
  }
}



AreaChartForMarketView.defaultProps = {
  type: "svg"
};
AreaChartForMarketView = fitWidth(AreaChartForMarketView);

export default AreaChartForMarketView;