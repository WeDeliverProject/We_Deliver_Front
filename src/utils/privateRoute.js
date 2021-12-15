import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getDataFromStorage } from "./storage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    const token = getDataFromStorage();
    if (token === null) {
      alert("로그인 필요한 페이지입니다.");
      return false;
    }
    return true;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Navigate replace to="/main" />
      }
    />
  );
};

export default PrivateRoute;
