import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { BalanceContextAction, BalanceContextType } from "../types";

const initialState: BalanceContextType = {
  data: [],
  balance: 0,
  categories: [],
  incomes: [],
  expenses: [],
  isLoading: false,
  transactionMessage: "",
  dispatch: function (): void {},
};

function reducer(
  state: BalanceContextType,
  action: BalanceContextAction
): BalanceContextType {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true, error: undefined };
    case "success": {
      const incomes = action.results.filter((item) => item.type === "income");
      const expenses = action.results.filter((item) => item.type === "expense");
      const balance =
        incomes.reduce((sum, item) => sum + item.amount, 0) -
        expenses.reduce((sum, item) => sum + item.amount, 0);
      return {
        ...state,
        isLoading: false,
        data: action.results,
        incomes,
        expenses,
        balance,
      };
    }
    case "failure":
      return { ...state, isLoading: false, error: action.error };
    case "add_transaction": {
      const payloadType = action.payload.type;
      const isAmountValid = action.payload.amount > 0;

      if (!isAmountValid) {
        return {
          ...state,
          error: "Failed transaction: Amount must be greater than zero.",
        };
      }

      if (payloadType === "income") {
        const income = action.payload.amount;
        const balance = state.balance + income;
        return {
          ...state,
          data: [...state.data, action.payload],
          incomes: [...state.incomes, action.payload],
          balance,
          transactionMessage: "Transaction successful: Income added!",
        };
      } else {
        const expense = action.payload.amount;
        const balance = state.balance - expense;
        return {
          ...state,
          data: [...state.data, action.payload],
          expenses: [...state.expenses, action.payload],
          balance,
          transactionMessage: "Transaction successful: Expense added!",
        };
      }
    }

    default:
      return state;
  }
}

const BalanceContext = createContext<BalanceContextType>(initialState);

export function BalanceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "request" });

    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(({ transactions }) => {
        dispatch({ type: "success", results: transactions });
      })
      .catch((error) => {
        dispatch({ type: "failure", error: error.message });
      });
  }, []);

  return (
    <BalanceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalanceContext() {
  const context = useContext(BalanceContext);

  if (context === undefined) {
    throw new Error("useBalanceContext must be used within a BalanceProvider");
  }

  return context;
}

export default { BalanceContext, BalanceProvider, useBalanceContext };
