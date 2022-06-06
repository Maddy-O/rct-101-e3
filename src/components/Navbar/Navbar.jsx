import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, handleAuth } = useContext(AuthContext);

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        Home
      </Link>
      <span data-cy="navbar-cart-items-count">Cart : </span>
      <button data-cy="navbar-login-logout-button" onClick={handleAuth}>
        {isAuth ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};

export default Navbar;
