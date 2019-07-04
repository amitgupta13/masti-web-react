import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";
import "./Header.css";

const Header = ({ logout, token }) => {
  const headerComponent = token ? (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="auth">
        <Link to="/signup" onClick={logout}>
          Logout
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="auth">
        <Link to="/signup">Sign Up</Link>
      </li>
      <li className="auth">
        <Link to="/signin">Sign In</Link>
      </li>
    </>
  );
  return (
    <div>
      <ul>{headerComponent}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
