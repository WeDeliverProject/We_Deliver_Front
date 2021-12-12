import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 335px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  margin-top: 50px;
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

  const {category} = useParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/menu/${category}/${data._id}`)
  }

  return (
    <Box>
      <Img src={`http://localhost:3000/${data.img}`} alt={data.name} onClick={clickHandler} />
      <Wrapper>
        <p>{data.min_order_amount.toLocaleString()}원 이상 주문</p>
        <p> {data.star}</p>
      </Wrapper>
      <Wrapper>
        <p>배달비 {data.delivery_fee.toLocaleString()}원~</p>
        <p>리뷰 {data.reviewCount}개</p>
      </Wrapper>
    </Box>
  );
};

export default Store;
