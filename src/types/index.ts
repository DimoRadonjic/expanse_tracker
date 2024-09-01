import { AuthContextAction, AuthContextType } from "./authContextTypes";
import {
  BalanceContextAction,
  BalanceContextType,
} from "./balanceContextTypes";
import { RegisterFormAction, RegisterFormType } from "./registerTypes";

type UserType = {
  email: string;
  username: string;
};

type RegisterUserType = UserType & {
  password: string;
  retypePassword: string;
};

type LoginUserType = {
  username?: string;
  email?: string;
  password: string;
};

type Status = "checking" | "authenticated" | "no-authenticated";

type DataType = {
  amount: number;
  category: string;
  date: string;
  type: "income" | "expense";
  id: string;
};

export type {
  AuthContextAction,
  AuthContextType,
  BalanceContextAction,
  BalanceContextType,
  DataType,
  RegisterFormAction,
  RegisterFormType,
  Status,
  UserType,
  RegisterUserType,
  LoginUserType,
};
