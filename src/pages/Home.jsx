import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [state] = useContext(AuthContext);

  if (!state.isHome) {
    return <Navigate to="/login" />;
  } else {
    return <Navigate to="/products" />;
  }
  return <div>Home</div>;
};

export default Home;
