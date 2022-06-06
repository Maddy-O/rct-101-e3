import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(AuthContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "Login",
    });
  };
  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <input
        data-cy="login-email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-cy="login-password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-cy="login-submit" onClick={handleOnClick}>
        LogIn
      </button>
    </div>
  );
};

export default Login;
