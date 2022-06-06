import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [log, setLog] = useState(false);

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        Home
      </Link>
      <span data-cy="navbar-cart-items-count">Cart : </span>
      <button
        data-cy="navbar-login-logout-button"
        onClick={() => {
          setLog(!log);
        }}
      >
        {log ? (
          <Link to="/">{log ? "LogOut" : "LogIn"}</Link>
        ) : (
          <Link to="/login">{log ? "LogOut" : "LogIn"}</Link>
        )}
      </button>
    </div>
  );
};

export default Navbar;
