import { UserType, Status, LoginUserType } from ".";

type AuthContextAction =
  | { type: "setUser"; user: UserType | LoginUserType }
  | { type: "failure"; error: string }
  | { type: "logout" };

type AuthContextType = {
  user: UserType | LoginUserType | null;
  status: Status;
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<AuthContextAction>;
};

export type { AuthContextAction, AuthContextType };
