import { ResponsiveBar } from "@nivo/bar";
import { useThemeContext } from "../../contexts/themeContext";
import { ChartBarProps } from "./chartTypes";

const AppBarChart = ({ dataChart }: ChartBarProps) => {
  const { themeMode } = useThemeContext();

  const barColors =
    themeMode !== "dark"
      ? { income: "#add8e6", expense: "#1E90FF" }
      : { income: "#87bbfa", expense: "#00008b" };

  return (
    <div className="chart">
      <ResponsiveBar
        data={dataChart}
        keys={["income", "expense"]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="stacked"
        colors={({ id }) => barColors[id as keyof typeof barColors]}
        axisBottom={{
          tickRotation: 45,
          legend: "Date",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Amount",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [{ on: "hover", style: { itemOpacity: 1 } }],
          },
        ]}
        theme={{
          labels: {
            text: { fill: themeMode === "dark" ? "#ffffff" : "#000000" },
          },
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
          tooltip: {
            basic: { color: themeMode === "dark" ? "#000000" : "inherit" },
          },
        }}
      />
    </div>
  );
};

export default AppBarChart;
