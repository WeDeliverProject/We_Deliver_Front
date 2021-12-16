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

const ReviewBox = ({data}) => {

  console.log(data)
  return (
    <div>
      {data.results.map((item) => {
        return(
          <Box>
            <Img src={`http://localhost:3000/${item.img}`} alt="1등" />
            <TextBox>
              <Name>{item.nickname}</Name>
              <p>{item.content}</p>
            </TextBox>
          </Box>
        )
      })}
    </div>
  );
};

const Review = ({review}) => {
  return (
    <>
      <Title>오늘의 리뷰</Title>
      <Wrapper>
        <ReviewBox data={review} />
        <ReviewLink>
          <ReviewText>리뷰 작성하러가기</ReviewText>
        </ReviewLink>
      </Wrapper>
    </>
  );
};

export default Review;
