import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">
          <img src={logo} alt="" />
          <span className="comapny-title"> Space-Travelers-Hub</span>
        </div>
      </Link>
      <ul className="list">
        <li>
          {' '}
          <NavLink
            to="/rocket"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rocket
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to="/mission"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mission
          </NavLink>
        </li>
        <li>
          {' '}
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
