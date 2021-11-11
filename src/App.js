import React from "react";
import Header from "./common/Header";

import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Restaurant from "./page/detail/Resturant";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Layout1 />} />
        <Route path="/menu/Korean" element={<Layout2 />} />
        <Route path="/menu/Korean/StoreName" element={<Restaurant />} />
      </Routes>
    </>
  );
};

export default App;
