import React from "react";
import { Logout } from "../LogOut";
import { Navbar } from "../Navbar";
import './index.css';

export const Header = () => {


  return (
    <div className="header">
      <h1>My Social Network</h1>
      <Navbar />
      <Logout/>
    </div>
  );
};
