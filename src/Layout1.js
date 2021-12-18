import React, { useState } from "react";
import Category from "./common/Category";
import Location from "./page/main/Location";
import Main from "./page/main/Main";

import styled from "styled-components";
import Footer from "./common/Footer";

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Layout1 = () => {
  const [next, setNext] = useState(false);

  const nextHandler = () => {
    const h = window.innerHeight;
    setNext(true);
    window.scrollTo(0, h);
  };
  return (
    <>
      <Location next={next} handler={nextHandler} />
      {next ? (
        <>
          <Category />
          <Box>
            <Main />
          </Box>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Layout1;
