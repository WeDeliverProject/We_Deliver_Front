import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  const {category} = useParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/menu/${category}/${data._id}`)
  }

  return (
    <Box>
<<<<<<< HEAD
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
=======
      <Img src={`http://localhost:3000/${data.img}`} alt={data.name} onClick={clickHandler} />
      <Wrapper>
        <p>{data.min_order_amount.toLocaleString()}원 이상 주문</p>
        <p> {data.star}</p>
      </Wrapper>
      <Wrapper>
        <p>배달비 {data.delivery_fee.toLocaleString()}원~</p>
        <p>리뷰 {data.reviewCount}개</p>
      </Wrapper>
>>>>>>> develop
    </Box>
  );
};

export default Store;
