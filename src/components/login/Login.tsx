import { useNavigate } from "react-router-dom";
import style from "../../styles/loginRegister.module.scss";
import React, { useState } from "react";
import { getDataFromForm } from "../util";
import { useAuthContext } from "../../contexts/authContext";
import { LoginUserType } from "../../types";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [inputType, setInputType] = useState("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getDataFromForm(e.currentTarget);
    if (data["email-username"].toString().includes("@")) {
      const email = data["email-username"].toString();
      const userData: LoginUserType = {
        email,
        password: data.password.toString(),
      };

      dispatch({ type: "setUser", user: userData });
    } else {
      const username = data["email-username"].toString();
      const userData: LoginUserType = {
        username,
        password: data.password.toString(),
      };

      dispatch({ type: "setUser", user: userData });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setInputType(e.target.value);
  };

  return (
    <div className={style.registerLogin}>
      <h2 className={style.title}>Login</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formContent}>
          <div className={style.input}>
            <select
              className={style.selectInput}
              name="input-type"
              id="input-type"
              onChange={(e) => handleChange(e)}
            >
              <option className={style.option} value="email">
                Email
              </option>
              <option className={style.option} value="text">
                Username
              </option>
            </select>
            <input
              required
              type={inputType}
              name="email-username"
              id="email-username-input"
              placeholder={
                inputType.toLocaleLowerCase() === "text"
                  ? "username"
                  : inputType.toLocaleLowerCase()
              }
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
          <div className={style.buttons}>
            <button className={style.loginButton}>Login</button>
            <div className={style.registerButton}>
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
