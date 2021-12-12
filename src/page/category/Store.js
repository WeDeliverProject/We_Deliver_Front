import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import star from "../../img/star.png";
import ReactHoverObserver from "react-hover-observer";

const Box = styled(ReactHoverObserver)`
  width: 200px;
  height: 250px;
  padding: 20px 25px 0px 25px;
  border: 1px solid #c4c4c4;
  margin: 50px 15px 0px 15px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
`;

const PriceBox = styled.div`
  position: relative;
  font-size: 12px;
`;

const Label = ({ isHovering = false }) => (
  <div className="example__label">
    Is Hovering: {isHovering ? "true" : "false"}
  </div>
);

const Store = ({ data }) => {
  return (
    <Box>
      <Link to="/menu/Korean/StoreName">
        <Img src={`/${data.img}`} alt={data.name} />
      </Link>
      <PriceBox>
        <p>{data.name}</p>
        <p>18,000원 이상 주문</p>
        <Wrapper>
          <img width="10px" height="10px" src={star} alt="star" />
          <p> 4.85</p>
        </Wrapper>
        <Wrapper>
          <p>배달비 1500원~</p>
          <p>리뷰 400개</p>
        </Wrapper>
      </PriceBox>
      <Label />
    </Box>
  );
};

export default Store;
