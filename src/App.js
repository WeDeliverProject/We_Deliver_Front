import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Register from "./page/login/Register";
import Login from "./page/login/Login";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Layout1 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu/Korean" element={<Layout2 />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
      </Routes>
    </>
  );
};

export default App;
