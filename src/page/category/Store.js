import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 335px;
  padding: 10px;
  border: 1px solid #c4c4c4;
`;

const Img = styled.img`
  width: 230px;
  height: 230px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Store = ({ data }) => {
  return (
    <Box>
      <Link to="/menu/Korean/StoreName">
        <Img src={data.img} alt={data.name} />
      </Link>
      <Wrapper>
        <p>18,000원 이상 주문</p>
        <p> 4.85</p>
      </Wrapper>
      <Wrapper>
        <p>배달비 1500원~</p>
        <p>리뷰 400개</p>
      </Wrapper>
    </Box>
  );
};

export default Store;
