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
        <Img src={`http://localhost:3000/${data.img}`} alt={data.name} />
      </Link>
      <Wrapper>
        <p>{data.min_order_amount}원 이상 주문</p>
        <p> {data.star}</p>
      </Wrapper>
      <Wrapper>
        <p>배달비 {data.delivery_fee}원~</p>
        <p>리뷰 {data.reviewCount}개</p>
      </Wrapper>
    </Box>
  );
};

export default Store;
