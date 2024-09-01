import { useNavigate } from "react-router-dom";
import { styleNav } from "../../styles";
import { useBalanceContext } from "../../contexts/balanceContext";
import { useAuthContext } from "../../contexts/authContext";

function Navbar() {
  const navigate = useNavigate();
  const { balance } = useBalanceContext();
  const { dispatch, status } = useAuthContext();

  return (
    <nav className={styleNav.navbar}>
      <ul>
        <li>Financial Tracker</li>
        {status === "authenticated" && (
          <>
            <li>
              <button
                className={styleNav.button}
                onClick={() => navigate("/add-transaction")}
              >
                Add Transaction
              </button>
            </li>
            <li>
              <button
                className={styleNav.button + " " + styleNav.logoutButton}
                onClick={() => {
                  navigate("/login");
                  dispatch({ type: "logout" });
                }}
              >
                Log out
              </button>
            </li>
            <li className={styleNav.balanceText}>Balance : {balance} € </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
