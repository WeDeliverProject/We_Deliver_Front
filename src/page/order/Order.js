import React from "react";
import styled from "styled-components";
import Footer from "../../common/Footer";
import OrderList from "./OrderList";

const Box = styled.div`
  width: 1000px;
  margin: 0 auto;
  height: 450px;
`;

const Order = () => {
  return (
    <>
      <Box>
        <OrderList />
      </Box>
      <Footer />
    </>
  );
};

export default Order;
