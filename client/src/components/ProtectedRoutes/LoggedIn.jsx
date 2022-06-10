import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const LoggedIn = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/browse" />;
  }

  return children;
};

export default LoggedIn;
