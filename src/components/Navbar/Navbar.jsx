import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { count } = useContext(CartContext);
  const [state, dispatch] = useContext(AuthContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "Logout",
    });
  };

  return (
    <div data-cy="navbar" className="navbar">
      <Link data-cy="navbar-home-link" to="/" className="navbarLink">
        Home
      </Link>
      <span data-cy="navbar-cart-items-count">Cart : {count}</span>
      <button
        data-cy="navbar-login-logout-button"
        onClick={handleOnClick}
        className="navbarButton"
      >
        {state.isAuth ? (
          <Link to="/" className="navbarButtonLink">
            {state.isAuth ? "LogOut" : "LogIn"}
          </Link>
        ) : (
          <Link to="/login" className="navbarButtonLink">
            {state.isAuth ? "LogOut" : "LogIn"}
          </Link>
        )}
      </button>
    </div>
  );
};

export default Navbar;
