import { ResponsiveLine } from "@nivo/line";
import { useThemeContext } from "../../contexts/themeContext";
import { ChartLineProps } from "./chartTypes";
import { useBalanceContext } from "../../contexts/balanceContext";

const AppLineChart = ({ dataChart }: ChartLineProps) => {
  const { themeMode } = useThemeContext();

  return (
    <div className="chart">
      <ResponsiveLine
        data={dataChart}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Balance",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        colors={themeMode === "dark" ? { scheme: "nivo" } : { scheme: "set1" }}
        lineWidth={2}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme={{
          grid: {
            line: {
              stroke: themeMode === "dark" ? "#444444" : "#000000",
              strokeWidth: 1,
            },
          },
          axis: {
            ticks: {
              text: { fill: themeMode === "dark" ? "#ffffff" : "#000000" },
            },
            legend: {
              text: { fill: themeMode === "dark" ? "#ffffff" : "#000000" },
            },
          },
          legends: {
            text: { fill: themeMode === "dark" ? "#ffffff" : "#000000" },
          },
        }}
      />
    </div>
  );
};

export default AppLineChart;
