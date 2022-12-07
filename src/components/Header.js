import React from "react";
import { Link } from "react-router-dom";
import GameLogo from "./../img/GameLogo.png";
import MenuPage from "./MenuPage";

function Header() {
  return (
    <React.Fragment>
      <img src={GameLogo} alt="Game Logo" width="15%" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;