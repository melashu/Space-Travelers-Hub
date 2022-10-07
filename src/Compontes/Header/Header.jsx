import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <header className="header">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="logo">
          <img src={logo} alt="" />
          <span className="comapny-title"> Space-Travelers-Hub</span>
        </div>
      </NavLink>
      <ul className="list">
        <li>
          {" "}
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dragons
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/mission"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mission
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
