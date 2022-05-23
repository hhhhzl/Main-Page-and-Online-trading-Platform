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
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { discontinuousTimeScaleProviderBuilder } from "react-stockcharts/lib/scale";
import { SampleData } from "../../static/Stockdata";
import useWindowDimensions from "../../utils/sizewindow";
import HoverTooltip from "react-stockcharts/lib/tooltip/HoverTooltip";

const canvasGradient = createVerticalLinearGradient([
    { stop: 0, color: hexToRGBA("#b5d0ff", 0.2) },
	{ stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.8) },
]);


class LineSeriesPorfolioranking extends React.Component {
  render() {
    const {width, timeperiod} = this.props;
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
    const end = xAccessor(data[Math.max(0, data.length - timeperiod)]);
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
        height={width * 0.381}
        margin={{ left: 0, right: 0, top: 0, bottom:0}}
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
        <Chart id={0} yExtents={d => d.open}>
        <defs>
						<linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
							<stop offset="0%" stopColor="#2B8CFF" stopOpacity={0} />
							<stop offset="99%" stopColor="#2361FF" stopOpacity={0.07} />
							<stop offset="100%"  stopColor="#2B8CFF " stopOpacity={0.16} />
						</linearGradient>
		</defs>
        

          <AreaSeries
            yAccessor={(d) => d.open}
            fill="url(#MyGradient)"
            strokeWidth={1}
            stroke = {"#2346FF"}
            canvasGradient={canvasGradient}
          />
        </Chart>
      </ChartCanvas>
    );
  }
}



LineSeriesPorfolioranking.defaultProps = {
  type: "svg"
};

const LineSeriesPorfolioRanking = fitWidth(LineSeriesPorfolioranking);

export default LineSeriesPorfolioRanking;
