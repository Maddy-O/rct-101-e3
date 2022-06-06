import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initState = {
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Login": {
      return { ...state, isAuth: true };
    }
    case "Logout": {
      return { ...state, isAuth: false };
    }
    default: {
      return state;
    }
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
