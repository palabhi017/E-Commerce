import React from "react";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";

const PrivateRoute = ({ children }:{children:React.ReactNode}): any => {
  const login = useAppSelector((state) => state.Auth.isAuth);

  if (!login) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
