import "./Navbar.css";
import { useTheme } from "../../common/ThemeContext";

import React from "react";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
