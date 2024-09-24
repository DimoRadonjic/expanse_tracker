export interface ChartLineProps {
  dataChart: ChartLineType;
}

export type ChartLineType = Array<{ id: string; data: ChartLineDataArr }>;

export type ChartLineDataArr = Array<ChartLineData>;

export type ChartLineData = {
  x: string;
  y: number;
};

const dataTestLine = [
  {
    id: "Balance",
    data: [
      { x: "2024-09-01", y: 300 },
      { x: "2024-09-02", y: 400 },
      { x: "2024-09-03", y: 350 },
    ],
  },
];

export interface ChartBarProps {
  dataChart: ChartBarDataArr;
}

export type ChartBarDataArr = Array<ChartBarData>;

export type ChartBarData = {
  date: string;
  income: number;
  expense: number;
};

const datatestBar = [
  { date: "2024-09-01", income: 1000, expense: 700 },
  { date: "2024-09-02", income: 1200, expense: 800 },
  { date: "2024-09-03", income: 900, expense: 500 },
];
