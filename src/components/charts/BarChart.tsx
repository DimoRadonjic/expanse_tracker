import { ResponsiveBar } from "@nivo/bar";

const data = [
  { date: "2024-09-01", income: 1000, expense: 700 },
  { date: "2024-09-02", income: 1200, expense: 800 },
  { date: "2024-09-03", income: 900, expense: 500 },
  // Add more data for daily/weekly/monthly views
];

const AppBarChart = () => (
  <div className="chart">
    <ResponsiveBar
      data={data}
      keys={["income", "expense"]}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: "nivo" }}
      axisBottom={{ tickRotation: -45 }} // Rotate labels for better readability
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Amount",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
    />
  </div>
);

export default AppBarChart;
