import { useNavigate } from "react-router-dom";
import style from "../../styles/loginRegister.module.scss";
import React, { useEffect, useReducer } from "react";
import {
  RegisterFormType,
  RegisterFormAction,
  UserType,
  RegisterUserType,
} from "../../types";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useAuthContext } from "../../contexts/authContext";

const Register = () => {
  const navigate = useNavigate();

  const { dispatch: dispatchContext, status, user } = useAuthContext();

  const initialState: RegisterFormType = {
    username: "",
    email: "",
    password: "",
    retypePassword: "",
    error: "",
  };

  function reducer(
    state: RegisterFormType,
    action: RegisterFormAction
  ): RegisterFormType {
    switch (action.type) {
      case "request":
        return { ...state, error: undefined };
      case "setUser": {
        dispatchContext({ type: "setUser", user: action.user });
        notify("success");
        return {
          ...state,
          username: action.user.username,
          email: action.user.email,
          error: "",
        };
      }
      case "failure":
        notify("failure");
        return { ...state, error: action.error };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const getDataFromForm = (target: EventTarget & HTMLFormElement) => {
    const formData = new FormData(target);
    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    return data;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = getDataFromForm(e.currentTarget) as RegisterUserType;
    dispatch({ type: "setUser", user: userData });
  };

  const notify = (notifyStatus: string) => {
    if (notifyStatus === "success") {
      toast.success("Successfully registered", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    } else {
      toast.error("Failed to register, check the inputs again :D", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    }
  };

  return (
    <div className={style.registerLogin}>
      <h1 className={style.title}>Register</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formContent}>
          <div className={style.input}>
            <label htmlFor="username">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email-input"
              placeholder="email"
            />
          </div>
          <div className={style.input}>
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              name="username"
              id="username-input"
              placeholder="username"
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
          <div className={style.input}>
            <label htmlFor="re-type-password">Re-type Password</label>
            <input
              required
              type="text"
              name="re-type-password"
              id="re-type-password-input"
              placeholder="re-type password"
            />
          </div>
          <div className={style.formButtonsPart}>
            <div className={style.buttons + " " + style.registerButtons}>
              <button>Register</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("login");
                }}
              >
                Go Back To Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
