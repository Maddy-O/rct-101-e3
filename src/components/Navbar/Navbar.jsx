import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [log, setLog] = useState(false);
  const { count } = useContext(CartContext);
  const [state, dispatch] = useContext(AuthContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "Logout",
    });
  };

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        Home
      </Link>
      <span data-cy="navbar-cart-items-count">Cart : {count}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnClick}>
        {state.isAuth ? (
          <Link to="/">{state.isAuth ? "LogOut" : "LogIn"}</Link>
        ) : (
          <Link to="/login">{state.isAuth ? "LogOut" : "LogIn"}</Link>
        )}
      </button>
    </div>
  );
};

export default Navbar;
