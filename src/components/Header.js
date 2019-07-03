import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="auth">
          <Link to="/logout">Logout</Link>
        </li>
        <li className="auth">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="auth">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
