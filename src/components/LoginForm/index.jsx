import React, { useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { registerFailure, registerSuccess, registerRequest } from "../../actions/registerAction";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(register.email);
  const [password, setPassword] = useState(register.password);

  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const history = useHistory();

  const value = {
    identifier: email,
    password: password,
  };

  const fetchSignin = () => {
    return (dispatch) => {
      dispatch(registerRequest());
      fetch("http://localhost:1337/auth/local", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "error") {
            dispatch(registerFailure(response.message));
          } else {
            dispatch(registerSuccess(response.user));
            console.log(response);
            Cookies.set("token", response.jwt, { secure: true });
            history.push("/");
          }
        });
    };
  };
  return (
    <div className="loginForm">
      <input
        type="text"
        value={email}
        onChange={onEmailChanged}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChanged}
        placeholder="Mot de passe"
      />
      <button type="submit" onClick={() => dispatch(fetchSignin())}>
        Valider
      </button>
    </div>
  );
};
