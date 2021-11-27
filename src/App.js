import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Restaurant from "./page/detail/Resturant";

import { Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Login from "./page/Login";
import Register from "./page/Register";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/main" exact element={<Layout1 />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/menu/Korean" exact element={<Layout2 />} />
          <Route path="/menu/Korean/StoreName" exact element={<Restaurant />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
