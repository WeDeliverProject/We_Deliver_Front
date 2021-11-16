import React from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import TabBar from "./TabBar";
import Logo from "../../img/image 80.png";

const Title = styled.div`
  width: 900px;
  height: 220px;
  border: 1px solid #c4c4c4;
  display: flex;
  margin-top: 80px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  padding: 10px;
  margin-left: 100px;
`;

const Name = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  margin-top: 40px;
`;

const Star = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Info = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;

const Main = () => {
  return (
    <>
      <MenuBar />
      <Title>
        <Img src={Logo} />
        <div>
          <Name>떡볶이 참 잘하는 집</Name>
          <Star>별점</Star>
          <Info>최소주문금액</Info>
          <Info>배달비</Info>
          <Info>결제 </Info>
        </div>
      </Title>
      <TabBar />
    </>
  );
};

export default Main;
