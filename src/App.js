import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Layout1 from "./Layout1";
import Login from "./page/login/Login";
import Restaurant from "./page/detail/Resturant";
import Footer from "./common/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import Layout2 from "./Layout2";
import Order from "./page/order/Order";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Layout1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderList" element={<Order />} />
        <Route path="/menu/:category" element={<Layout2 />} />
        <Route path="/menu/:category/:restaurantId" element={<Restaurant />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
      </Routes>
    </>
  );
};

export default App;
