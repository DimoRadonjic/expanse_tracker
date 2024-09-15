import { useLocation, useNavigate } from "react-router-dom";
import { styleNav } from "../../styles";
import { useBalanceContext } from "../../contexts/balanceContext";
import { useAuthContext } from "../../contexts/authContext";
import { useThemeContext } from "../../contexts/themeContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { balance } = useBalanceContext();
  const { dispatch, status } = useAuthContext();
  const { themeMode, dispatch: themeDispatch } = useThemeContext();

  const currentPage = location.pathname;

  const handleClickMode = () => {
    themeDispatch({ type: "change" });
  };

  const lightBulbTheme =
    themeMode === "light"
      ? styleNav.fluentEmojiFlatLightBulbLight
      : styleNav.fluentEmojiFlatLightBulb;

  return (
    <nav className={styleNav.navbar}>
      <ul>
        <li>
          <h1>Financial Tracker</h1>
        </li>
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
                className={styleNav.button}
                onClick={() => navigate("/charts")}
              >
                Charts
              </button>
            </li>

            <li>
              <button
                className={styleNav.button + " " + styleNav.logoutButton}
                onClick={() => {
                  navigate("/");
                }}
              >
                Records
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
        <div>
          <span onClick={handleClickMode} className={lightBulbTheme}></span>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
