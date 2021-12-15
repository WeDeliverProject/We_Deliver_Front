import React from "react";
import styled from "styled-components";

import ReviewImg from "../../img/food.jpg";

const Title = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 25px;
  line-height: 23px;
  padding: 150px 0 50px 0;
`;

const Box = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Img = styled.img`
  width: 350px;
  height: 200px;
  cursor: pointer;
  margin-right: 25px;
`;

const TextBox = styled.div`
  width: 300px;
  height: 200px;
`;

const Name = styled.p`
  font-weight: bold;
`;

const ReviewLink = styled.div`
  width: 400px;
  height: 700px;
  background-color: #ff5959;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 30px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const ReviewBox = () => {

  return (
    <div>
      <Box>
        <Img src={ReviewImg} alt="1등" />
        <TextBox>
          <Name>트XXX</Name>
          <p>할아버지 생신 기념으로 가족끼리 시켜먹었어요 ^~^</p>
        </TextBox>
      </Box>
      <Box>
        <Img src={ReviewImg} alt="2등" />
        <TextBox>
          <Name>트XXX</Name>
          <p>할아버지 생신 기념으로 가족끼리 시켜먹었어요 ^~^</p>
        </TextBox>
      </Box>
      <Box>
        <Img src={ReviewImg} alt="3등" />
        <TextBox>
          <Name>트XXX</Name>
          <p>할아버지 생신 기념으로 가족끼리 시켜먹었어요 ^~^</p>
        </TextBox>
      </Box>
    </div>
  );
};

const Review = () => {
  return (
    <>
      <Title>오늘의 리뷰</Title>
      <Wrapper>
        <ReviewBox />
        <ReviewLink>
          <ReviewText>리뷰 작성하러가기</ReviewText>
        </ReviewLink>
      </Wrapper>
    </>
  );
};

export default Review;
