import { createContext, useReducer, ReactNode, useContext } from "react";
import { AuthContextAction, AuthContextType } from "../types";

const storageStatus = localStorage.getItem("status");
const storageUser = localStorage.getItem("user");

const initialState: AuthContextType = {
  status: storageStatus ? JSON.parse(storageStatus) : "no-authenticated",
  user: storageUser ? JSON.parse(storageUser) : "",
  isLoading: false,
  dispatch: function (): void {},
};

function reducer(
  state: AuthContextType,
  action: AuthContextAction
): AuthContextType {
  switch (action.type) {
    case "setUser": {
      localStorage.setItem("user", JSON.stringify(action.user));
      localStorage.setItem("status", JSON.stringify("authenticated"));

      return {
        ...state,
        status: "authenticated",
        user: action.user,
      };
    }
    case "failure":
      return { ...state, status: "no-authenticated", error: action.error };

    case "logout":
      return { ...state, status: "no-authenticated", user: null };

    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType>(initialState);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
}

export default { AuthContext, AuthProvider, useAuthContext };
