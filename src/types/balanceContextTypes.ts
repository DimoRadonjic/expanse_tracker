import { DataType } from ".";
import {
  ChartBarDataArr,
  ChartLineDataArr,
  ChartLineType,
} from "../components/charts/chartTypes";

type BalanceContextType = {
  data: DataType[];
  balance: number;
  incomes: DataType[];
  incomeLineData: ChartLineType;
  expenseLineData: ChartLineType;
  combinedBarData: ChartBarDataArr;
  expenses: DataType[];
  categories: string[];
  isLoading: boolean;
  transactionMessage: string;
  error?: string;
  dispatch: React.Dispatch<BalanceContextAction>;
};

type BalanceContextAction =
  | { type: "request" }
  | { type: "success"; results: DataType[] }
  | { type: "failure"; error: string }
  | { type: "add_transaction"; payload: DataType };

export type { BalanceContextType, BalanceContextAction };
