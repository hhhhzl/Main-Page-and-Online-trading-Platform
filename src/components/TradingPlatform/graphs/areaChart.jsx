import React,{useState, useEffect} from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
    AlternatingFillAreaSeries,
    discontinuousTimeScaleProviderBuilder,
    Chart,
    ChartCanvas,
    XAxis,
    YAxis,
    MouseCoordinateX,
    TrendLine,
    DrawingObjectSelector,
} from "react-financial-charts";
import { AreaSeries, AreaOnlySeries } from "@react-financial-charts/series";
import { initialData } from "../../../static/testdata";
import useWindowDimensions from "../../../utils/sizewindow";
  

export default function AreaChart({w,h}){
   const {height,width} = useWindowDimensions();
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => new Date(d.date)
      );

      // get the width and height of user's window
      const heightx = height * h;
      const widthy = width * w;
      const margin = { left: 0, right: widthy*0.1, top: 0, bottom: heightx*0.1 };
      // const Window_height = height;
      // const Window_width = width * 0.5;
      // const margin = { left: width*0.01, right: width*0.05, top: 0, bottom: height*0.1 };
      const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        initialData
      );
      const pricesDisplayFormat = format(".2f");
      const max = xAccessor(data[data.length - 1]);
      const min = xAccessor(data[Math.max(0, data.length - 100)]);
      const xExtents = [min, max + 5];
      const gridHeight = heightx - margin.top - margin.bottom;
      const dateTimeFormat = "%Y-%m-%d %H:%M:%S";
      const timeDisplayFormat = timeFormat(dateTimeFormat);
    
    
      const candleChartExtents = (data) => {
        return data.open;
      };
    
      const yEdgeIndicator = (data) => {
        return data.open;
      };
    
    return(
      <>
      <div className="assets-curve">      
        <ChartCanvas
        height={heightx}
        ratio={5}
        width={widthy}
        margin={margin}
        data={data}
        seriesName="Data"
        xScale={xScale}
        displayXAccessor={displayXAccessor}
        xAccessor={xAccessor}
      >
        <Chart id={3} height={gridHeight} yExtents={candleChartExtents}>
          
          
          <XAxis showGridLines={false} showDomain={false} showTickLabel={false} axisAt="bottom" orient="bottom" displayFormat={timeDisplayFormat} />
          <YAxis showGridLines={false} showDomain={false} showTicklabel={true}  tickFormat={pricesDisplayFormat} />
          <AreaSeries yAccessor={yEdgeIndicator} connectNulls ={true}/> 
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeDisplayFormat}
          />  
        </Chart>
      </ChartCanvas>
      </div>
      </>
    )

}