import { createContext, useReducer, ReactNode, useContext } from "react";

type ThemeModes = "light" | "dark";

type ThemeStates = {
  themeMode: ThemeModes;
  dispatch: React.Dispatch<ThemeContextAction>;
};
const storageTheme = localStorage.getItem("theme");

const initialState: ThemeStates = {
  themeMode: storageTheme ? JSON.parse(storageTheme) : "light",
  dispatch: function (): void {},
};

type ThemeContextAction = { type: "change" };

function reducer(state: any, action: ThemeContextAction) {
  switch (action.type) {
    case "change":
      localStorage.setItem(
        "theme",
        JSON.stringify(state.themeMode === "light" ? "dark" : "light")
      );
      return {
        ...state,
        themeMode: state.themeMode === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
}

const ThemeContext = createContext(initialState);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within a BalanceProvider");
  }

  return context;
}

export default { ThemeContext, ThemeProvider, useThemeContext };
