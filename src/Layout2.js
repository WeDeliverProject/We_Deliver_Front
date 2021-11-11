import React from "react";
import styled from "styled-components";

import Back from "./img/tteok.png";
import Category from "./common/Category";
import Korean from "./page/category/Korean";

import { Routes, Route } from "react-router-dom";

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  opacity: 0.5;
`;

const Layout2 = () => {
  return (
    <>
      <Img src={Back} alt="배경" />
      <Category />
      <Box>
        <Korean />
      </Box>
    </>
  );
};

export default Layout2;
