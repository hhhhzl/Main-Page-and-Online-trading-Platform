import React from "react";
import * as d3 from "d3";
import { format } from "d3-format";
import { curveMonotoneX } from "d3-shape";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../../static/Stockdata";
import useWindowDimensions from "../../../utils/sizewindow";

const canvasGradient = createVerticalLinearGradient([
  { stop: 0, color: hexToRGBA("#b5d0ff", 0.2) },
  { stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
  { stop: 1, color: hexToRGBA("#4286f4", 0.8) }
]);

class AreaChart extends React.Component {
  
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
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
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
        height={width/1.8}
        margin={{ left: 50, right: 0, top: 10, bottom: 30 }}
        type={"hybrid"}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >
        <Chart id={0} yExtents={(d) => d.open}>
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#b5d0ff" stopOpacity={0.2} />
              <stop offset="70%" stopColor="#6fa4fc" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#4286f4" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" />
          <AreaSeries
            yAccessor={(d) => d.open}
            fill="url(#MyGradient)"
            strokeWidth={2}
            interpolation={curveMonotoneX}
            canvasGradient={canvasGradient}
          />
        </Chart>
      </ChartCanvas>
    );
  }
}



AreaChart.defaultProps = {
  type: "svg"
};
AreaChart = fitWidth(AreaChart);

export default AreaChart;
