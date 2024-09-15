import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Balance",
    data: [
      { x: "2024-09-01", y: 300 },
      { x: "2024-09-02", y: 400 },
      { x: "2024-09-03", y: 350 },
      // Add more data points here
    ],
  },
];

const AppLineChart = () => (
  <div className="chart">
    <ResponsiveLine
      data={data}
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
        tickRotation: -45, // rotate labels for readability
        legend: "Date", // label for the X-axis
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Balance", // label for the Y-axis
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "set1" }} // color scheme
      lineWidth={2}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true} // adds better interaction for tooltips
    />
  </div>
);

export default AppLineChart;
