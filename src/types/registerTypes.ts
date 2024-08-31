import { RegisterUserType } from ".";

type RegisterFormType = {
  username: string;
  email: string;
  password: string;
  retypePassword: string;
  error: string | undefined;
};

type RegisterFormAction =
  | { type: "request" }
  | { type: "setUser"; user: RegisterUserType }
  | { type: "failure"; error: string };

export type { RegisterFormAction, RegisterFormType };
