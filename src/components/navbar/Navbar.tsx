import { useNavigate } from "react-router-dom";
import { styleNav } from "../../styles";
import { useBalanceContext } from "../../contexts/balanceContext";

function Navbar() {
  const navigate = useNavigate();
  const { balance } = useBalanceContext();

  return (
    <nav className={styleNav.navbar}>
      <ul>
        <li>Financial Tracker</li>
        <li>
          <button onClick={() => navigate("/add-transaction")}>
            Add Transaction
          </button>
        </li>
        <li>Balance : {balance}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
