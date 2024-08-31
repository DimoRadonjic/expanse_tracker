import { styleApp } from "./styles";
import { BalanceProvider } from "./contexts/balanceContext";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <div className={styleApp.app}>
      <AuthProvider>
        <BalanceProvider>
          <AppRouter></AppRouter>
        </BalanceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
