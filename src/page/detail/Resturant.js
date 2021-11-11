import React from "react";
import styled from "styled-components";

import Main from "./Main";

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Restaurant = () => {
  return (
    <Box>
      <Main />
    </Box>
  );
};

export default Restaurant;
