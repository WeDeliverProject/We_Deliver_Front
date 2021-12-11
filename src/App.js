import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Layout1 from "./Layout1";
import Login from "./page/login/Login";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Layout1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
      </Routes>
    </>
  );
};

export default App;
