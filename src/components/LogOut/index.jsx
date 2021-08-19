import React from "react";
import "./index.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export const Logout = () => {
  const history = useHistory();

  const logOut = () => {
    Cookies.remove("token");
    history.push("/");
  };
  
  return (
    <div className="logout">
      <button type="button" onClick={() => logOut()}>
        Log Out
      </button>
    </div>
  );
};
