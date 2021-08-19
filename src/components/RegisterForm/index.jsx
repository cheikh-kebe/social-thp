import React, { useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../../actions/registerAction";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const RegisterForm = () => {
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(register.username);
  const [email, setEmail] = useState(register.email);
  const [password, setPassword] = useState(register.password);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const history = useHistory();

  const value = {
    username: username,
    email: email,
    password: password,
  };

  console.log(value);

  const fetchRegister = () => {
    return (dispatch) => {
      dispatch(registerRequest());
      fetch("http://localhost:1337/auth/local/register", {
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
            Cookies.set("token", response.jwt, { secure: true });
            history.push("/");
          }
        });
    };
  };

  return (
    <div className="registerForm">
      <form>
        <input
          type="text"
          value={username}
          onChange={onUsernameChanged}
          placeholder="Username"
        />
        <input
          type="text"
          value={email}
          onChange={onEmailChanged}
          placeholder="Email"
        />
        <input
          type="text"
          value={password}
          onChange={onPasswordChanged}
          placeholder="Password"
        />
        <button type="submit" onClick={() => dispatch(fetchRegister())}>
          Enregistrer
        </button>
      </form>
    </div>
  );
};
