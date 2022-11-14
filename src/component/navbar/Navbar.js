import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/images/sol 1.png"

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
        style={{display:"flex",
      justifyContent:"center",
    alignItems:"center",
  gap:"5rem"}}
      >
        <ul className="navbar-ul">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Discover</a>
          </li>
          <li>
            <a href="/contact">Creator</a>
          </li>
          <li>
            <a href="/contact">Collectors</a>
          </li>
        </ul>
        <div className="btn">
          <button style={{backgroundColor:"#E2A23B",
          color:"black",
          padding:"10px",
          border:"none",
          borderRadius:"5px"}}>
            LaunchedApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
