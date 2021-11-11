import React from "react";
import Category from "./common/Category";
import Location from "./page/main/Location";
import Main from "./page/main/Main";

import styled from "styled-components";

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Layout1 = () => {
  return (
    <>
      <Location />
      <Category />
      <Box>
        <Main />
      </Box>
    </>
  );
};

export default Layout1;
