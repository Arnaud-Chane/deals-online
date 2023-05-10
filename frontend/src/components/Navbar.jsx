import React from "react";
import LogoImg from "../assets/angular-logo-bold.svg";
import ProfileImg from "../assets/profile-circle-duotone.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar-container">
        <div className="nav-hamburger">
          <span />
          <span />
          <span />
        </div>
        <div className="nav-logo">
          <img src={LogoImg} className="nav-logo" alt="logo in nav" />
        </div>
        <form className="nav-searchbar">
          <input className="nav-input" placeholder="Search" />
        </form>
        <div className="nav-profile">
          <img src={ProfileImg} alt="profile icon" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
