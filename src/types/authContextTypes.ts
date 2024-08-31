import { UserType, Status } from ".";

type AuthContextAction =
  | { type: "setUser"; user: UserType }
  | { type: "failure"; error: string };

type AuthContextType = {
  user: UserType | null;
  status: Status;
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<AuthContextAction>;
};

export type { AuthContextAction, AuthContextType };
