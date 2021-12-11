import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Layout1 from "./Layout1";
import Login from "./page/login/Login";
import Restaurant from "./page/detail/Resturant"

import { Routes, Route, Navigate } from "react-router-dom";
import Layout2 from "./Layout2";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Layout1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu/Korean" element={<Layout2 />}/>
        <Route path="/" element={<Navigate replace to="/main" />} />
      </Routes>
    </>
  );
};

export default App;
