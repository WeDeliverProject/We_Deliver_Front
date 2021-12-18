import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import star from "../../img/star.png";
import ReactHoverObserver from "react-hover-observer";

const Box = styled(ReactHoverObserver)`
  width: 200px;
  height: 280px;
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

const Name = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  width: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled.p`
  height: 12px;
  font-size: 12px;
  color: #495057;
  margin-bottom: 4px;
`;

const Label = ({ isHovering = false }) => (
  <div className="example__label">
    Is Hovering: {isHovering ? "true" : "false"}
  </div>
);

const Store = ({ data }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/menu/${category}/${data._id}`);
  };

  return (
    <Box>
      <Img src={`/${data.img}`} alt={data.name} onClick={clickHandler} />
      <Wrapper style={{ justifyContent: "space-between" }}>
        <Name>{data.name}</Name>
        <Wrapper>
          <img
            style={{ marginTop: "10px" }}
            width="15px"
            height="15px"
            src={star}
            alt="Star"
          />
          <p style={{ marginTop: "6px" }}> &nbsp; {data.star}점</p>
        </Wrapper>
      </Wrapper>
      <Text>{data.min_order_amount.toLocaleString()}원 이상 주문</Text>

      <Text>배달비 {data.delivery_fee.toLocaleString()}원~</Text>
      <Text>리뷰 {data.reviewCount}개</Text>
    </Box>
  );
};

export default Store;
