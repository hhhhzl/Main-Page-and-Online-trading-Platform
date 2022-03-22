import React,{useState, useEffect} from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
    AlternatingFillAreaSeries,
    elderRay,
    ema,
    discontinuousTimeScaleProviderBuilder,
    Chart,
    ChartCanvas,
    CurrentCoordinate,
    BarSeries,
    CandlestickSeries,
    ElderRaySeries,
    LineSeries,
    MovingAverageTooltip,
    OHLCTooltip,
    SingleValueTooltip,
    lastVisibleItemBasedZoomAnchor,
    XAxis,
    YAxis,
    CrossHairCursor,
    EdgeIndicator,
    MouseCoordinateX,
    MouseCoordinateY,
    ZoomButtons,
    

} from "react-financial-charts";
import { initialData } from "../../../static/testdata";
import useWindowDimensions from "../../../utils/sizewindow";
  

export default function UserBalanceSeries({w,h}){
   const {height,width} = useWindowDimensions();
    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => new Date(d.date)
      );

      // get the width and height of user's window
      const heightx = height * h;
      const widthy = width * w;
      const margin = { left: widthy*0.05, right: widthy*0.1, top: 0, bottom: heightx*0.1 };
      // const Window_height = height;
      // const Window_width = width * 0.5;
      // const margin = { left: width*0.01, right: width*0.05, top: 0, bottom: height*0.1 };
    
      const ema12 = ema()
        .id(1)
        .options({ windowSize: 12 })
        .merge((d, c) => {
          d.ema12 = c;
        })
        .accessor((d) => d.ema12);
    
      const ema26 = ema()
        .id(2)
        .options({ windowSize: 26 })
        .merge((d, c) => {
          d.ema26 = c;
        })
        .accessor((d) => d.ema26);
    
      const elder = elderRay();
      const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        initialData
      );
      const pricesDisplayFormat = format(".2f");
      const max = xAccessor(data[data.length - 1]);
      const min = xAccessor(data[Math.max(0, data.length - 100)]);
      const xExtents = [min, max + 5];
    
      const gridHeight = heightx - margin.top - margin.bottom;
    
      const elderRayHeight = 100;
      const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
      const barChartHeight = gridHeight / 4;

      const chartHeight = gridHeight - elderRayHeight;

      const dateTimeFormat = "%d %b";
      const timeDisplayFormat = timeFormat(dateTimeFormat);
    
    
      const candleChartExtents = (data) => {
        return data.open;
      };
    
      const yEdgeIndicator = (data) => {
        return data.open;
      };
    
      const openCloseColor = (data) => {
        return data.close > data.open ? "#26a69a" : "#ef5350";
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
        xAccessor={xAccessor}
      >
        <Chart id={3} height={gridHeight} yExtents={candleChartExtents}>
          <XAxis showGridLines showTickLabel={true} />
          <YAxis showGridLines tickFormat={pricesDisplayFormat} />
          <AlternatingFillAreaSeries baseAt ={134.85} yAccessor={yEdgeIndicator} connectNulls ={true} strokeStyle ={{ top: '#26a69a', bottom: '#ef5350' }}/>  
        </Chart>
      </ChartCanvas>
      </div>
      </>
    )

}