import { useNavigate } from "react-router-dom";
import style from "../../styles/loginRegister.module.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={style.registerLogin}>
      <h1 className={style.title}>Login</h1>
      <form className={style.form}>
        <div className={style.formContent}>
          <div className={style.input}>
            <label htmlFor="email-username">Email / Username</label>
            <input
              required
              type="text"
              name="email-username"
              id="email-username-input"
              placeholder="email / username"
            />
          </div>
          <div className={style.input}>
            <label htmlFor="password">Password</label>
            <input
              required
              type="text"
              name="password"
              id="password-input"
              placeholder="password"
            />
          </div>
          <div className={style.formButtonsPart}>
            <div className={style.buttons}>
              <button>Login</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
              >
                Register
              </button>
              <p>Do not have a account?</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
