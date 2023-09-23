
import { Box, Typography } from "@mui/material";

import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pngs/logo.png";
function Navbar() {
  return (
    <div className="nav-bar">
       <a
        className="nav-logo"
        
      >
      <img src={logo} alt="" />
      </a>
      <div className="menu-container">
        <div className="nav-menu">
          <a>Home</a>
          <a>About</a>
          <a>Course</a>
          <a>Location</a>
          <a>Contact</a>
        </div>
      </div>

     

      <Link to="auth">
        <button className="primary-button login">Login</button>
      </Link>

    </div>
  );
}

export default Navbar;
