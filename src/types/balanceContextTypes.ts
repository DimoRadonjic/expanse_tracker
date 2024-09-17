import { DataType } from ".";

type BalanceContextType = {
  data: DataType[];
  balance: number;
  incomes: DataType[];
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
