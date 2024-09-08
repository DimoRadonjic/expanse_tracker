import { styleApp } from "./styles";
import { BalanceProvider } from "./contexts/balanceContext";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./contexts/authContext";
import { useThemeContext } from "./contexts/themeContext";

function App() {
  const { themeMode } = useThemeContext();

  return (
    <div
      className={themeMode === "dark" ? styleApp.appDark : styleApp.appLight}
    >
      <AuthProvider>
        <BalanceProvider>
          <AppRouter></AppRouter>
        </BalanceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
