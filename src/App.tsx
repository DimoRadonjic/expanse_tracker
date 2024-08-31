import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Main, Navbar, TransactionForm } from "./components";
import { styleApp } from "./styles";
import { BalanceProvider } from "./contexts/balanceContext";

function App() {
  return (
    <div className={styleApp.app}>
      <BalanceProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="add-transaction" element={<TransactionForm />} />
          </Routes>
        </Router>
      </BalanceProvider>
    </div>
  );
}

export default App;
