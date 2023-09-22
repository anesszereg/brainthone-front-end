
import { Box, Typography } from "@mui/material";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="menu-container">
        <div className="nav-menu">
          <a>Home</a>
          <a>About</a>
          <a>Course</a>
          <a>Location</a>
          <a>Contact</a>
        </div>
      </div>

      <a
        className="nav-logo"
        style={{ position: "absolute", top: "20px", left: "130px" }}
      >
        Logo
      </a>

      <Link to="auth">
        <button className="primary-button login">Login</button>
      </Link>

    </div>
  );
}

export default Navbar;
