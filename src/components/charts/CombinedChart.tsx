import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

const combinedData = {
  barData: [
    { date: "2024-09-01", income: 1000, expense: 700 },
    { date: "2024-09-02", income: 1200, expense: 800 },
    // Add more data
  ],
  lineData: [
    {
      id: "Balance",
      data: [
        { x: "2024-09-01", y: 300 },
        { x: "2024-09-02", y: 400 },
        // Add more data
      ],
    },
  ],
};

const CombinedChart = () => (
  <div className="chart">
    {/* Bar Chart */}
    <ResponsiveBar
      data={combinedData.barData}
      keys={["income", "expense"]}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      axisBottom={{ tickRotation: -45 }}
    />
    {/* Line Chart */}
    {/* <ResponsiveLine
      data={combinedData.lineData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto" }}
      axisBottom={{ tickRotation: -45 }}
      colors={{ scheme: "set1" }}
    /> */}
  </div>
);

export default CombinedChart;
