import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
        <h1>Movie House</h1>
      <ul>
        <li>
          <a href="./Header.jsx">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
