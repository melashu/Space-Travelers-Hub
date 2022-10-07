import React from 'react'
import Logo from './planet.png';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} width={50} height={50} alt="planet-logo" />
        <h1>Space Traveler&apos; s Hub</h1>
      </div>
      <div className="nav-links">
      </div>
    </div>
  );
}