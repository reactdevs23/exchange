import OHLCTooltip from "./OHLCTooltip";

import React, { useState } from "react";
import classes from "./Chart.module.css";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CandlestickSeries,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
} from "react-financial-charts";
// import { useMarketData } from "./useMarketData";

const axisStyles = {
  strokeStyle: "transparent", // Color.GRAY
  strokeWidth: 2,
  tickLabelFill: "rgba(118, 122, 137, 1)", // Color.LIGHT_GRAY
  tickStrokeStyle: "#383E55",
  gridLinesStrokeStyle: "rgba(56, 62, 85, 0.5)", // Color.GRAY w Opacity
};

const coordinateStyles = {
  fill: "#383E55",
  textFill: "white",
  gridLinesStrokeDasharray: "solid",
};

const zoomButtonStyles = {
  fill: "#383E55",
  fillOpacity: 0.75,
  strokeWidth: 0,
  textFill: "#9EAAC7",
};

const crossHairStyles = {
  strokeStyle: "#9EAAC7",
};

// Default green/red colors for candlesticks
const openCloseColor = (d) => (d.close > d.open ? "#26a69a" : "#ef5350");

// yExtentsCalculator: used from updating price series
// https://github.com/react-financial/react-financial-charts/blob/main/packages/stories/src/features/updating/BasicLineSeries.tsx#L55
const yExtentsCalculator = ({ plotData }) => {
  let min;
  let max;
  for (const { low, high } of plotData) {
    if (min === undefined) min = low;
    if (max === undefined) max = high;
    if (low !== undefined && min > low) min = low;
    if (high !== undefined && max < high) max = high;
  }
  if (min === undefined) min = 0;
  if (max === undefined) max = 0;

  const padding = (max - min) * 0.1;
  return [min - padding, max + padding * 2];
};

const FinancialChart = ({
  dateTimeFormat,
  height,
  margin,
  priceDisplayFormat,
  ratio,
  width,
  initialData,
}) => {
  const [resetCount, setResetCount] = useState(0);
  // Sample data format with candlestick properties
  // Sample data format with candlestick properties
  const dummyData = [];

  // Generate initial data

  dummyData.push(...initialData);

  // Y-axis values ranging from 61116.68 to 61134.61 (in decimal form)
  const minY = 61116.68;
  const maxY = 61134.61;

  // Generating Y-axis labels
  const numYAxisLabels = 12;
  const yStepSize = (maxY - minY) / (numYAxisLabels - 1);
  const yAxisLabels = Array.from({ length: numYAxisLabels }, (_, index) =>
    (minY + index * yStepSize).toFixed(2)
  );

  // Add more data points to reach a minimum length of 40
  while (dummyData.length < 40) {
    const lastDataPoint = dummyData[dummyData.length - 1];
    const newDataPoint = {
      date: new Date(lastDataPoint.date.getTime() + 60 * 1000), // Add one minute
      open: lastDataPoint.close,
      high: lastDataPoint.close + Math.random() * 10, // Increase the range for higher bars
      low: lastDataPoint.close - Math.random() * 10, // Increase the range for lower bars
      close: lastDataPoint.close + (Math.random() - 0.5) * 10, // Random close value
      volume: Math.floor(Math.random() * 200) + 100, // Random volume
    };
    dummyData.push(newDataPoint);
  }

  // Should be at least 40 data points

  // Use yExtentsCalculator to calculate Y-axis extents
  const yExtentsCalculator = ({ plotData }) => {
    let min;
    let max;
    for (const { low, high } of plotData) {
      if (min === undefined) min = low;
      if (max === undefined) max = high;
      if (low !== undefined && min > low) min = low;
      if (high !== undefined && max < high) max = high;
    }
    if (min === undefined) min = 0;
    if (max === undefined) max = 0;

    const padding = (max - min) * 0.1;
    return [min - padding, max + padding * 2];
  };

  const timeDisplayFormat = timeFormat(dateTimeFormat);
  const xScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor((d) => d.date);
  const { data, xScale, xAccessor, displayXAccessor } =
    xScaleProvider(dummyData);

  const min = xAccessor(data[Math.max(0, data.length - parseInt(width / 5))]);
  const max = xAccessor(data[data.length - 1]);
  const xExtents = [min, max + 1];

  // Continue with the rest of your code

  // ChartCanvas is drawn from top to bottom
  return (
    <div className={classes.chartContainer}>
      <ChartCanvas
        height={height}
        ratio={ratio}
        width={width}
        margin={margin}
        seriesName={`Chart ${resetCount}`}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        zoomAnchor={lastVisibleItemBasedZoomAnchor}
        disableZoom={true}
        className={classes.chartContainer}
      >
        {" "}
        {/* Price Chart */}
        <Chart id={2} yExtentsCalculator={yExtentsCalculator}>
          <XAxis {...axisStyles} showGridLines />

          <MouseCoordinateX
            displayFormat={timeDisplayFormat}
            //   {...coordinateStyles}
          />
          <YAxis
            {...axisStyles}
            showGridLines
            tickFormat={format(".2f")}
            // tickValues={yAxisLabels}
          />
          <MouseCoordinateY
            rectWidth={margin.right}
            displayFormat={priceDisplayFormat}
            {...coordinateStyles}
          />

          {/* YAxis close price highlight */}
          <EdgeIndicator
            itemType="last"
            rectWidth={margin.right}
            fill={"rgba(91, 223, 139, 1)"}
            stroke={"rgba(33, 33, 33, 1)"}
            lineStroke={openCloseColor}
            displayFormat={priceDisplayFormat}
            yAccessor={(d) => d.close}
          />

          <CandlestickSeries
            fill={(d) =>
              d.close > d.open
                ? "rgba(91, 223, 139, 1)"
                : "rgba(243, 69, 84, 1)"
            }
            stroke={(d) =>
              d.close > d.open
                ? "rgba(91, 223, 139, 1)"
                : "rgba(243, 69, 84, 1)"
            }
          />
          <OHLCTooltip
            origin={[8, 12]}
            textFill={openCloseColor}
            className="react-no-select"
          />
          <ZoomButtons
            onReset={() => setResetCount(resetCount + 1)}
            {...zoomButtonStyles}
          />
        </Chart>
        <CrossHairCursor {...crossHairStyles} />
      </ChartCanvas>
    </div>
  );
};

FinancialChart.propTypes = {
  dateTimeFormat: PropTypes.string,
  height: PropTypes.number,
  margin: PropTypes.object,
  priceDisplayFormat: PropTypes.func,
  ratio: PropTypes.number,
  width: PropTypes.number,
};

FinancialChart.defaultProps = {
  dateTimeFormat: "%d %b '%y \xa0 %H:%M",
  height: 0,
  margin: { left: 0, right: 48, top: 0, bottom: 24 },
  priceDisplayFormat: format(".2f"),
  ratio: 0,
  width: 0,
};

export const CandleStickChart = withSize({ style: { minHeight: 470 } })(
  withDeviceRatio()(FinancialChart)
);
