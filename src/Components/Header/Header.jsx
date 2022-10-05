import React from 'react'
import Logo from './planet.png';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} width={50} height={50} alt="planet-logo" />
        <h1>Space Traveler&apos; s Hub</h1>
      </div>
      <div className="nav-links">
        <NavLink to="/rockets" className="nav-link">Rockets</NavLink>
        <NavLink to="/missions" className="nav-link">Missions</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </div>
    </div>
  );
}