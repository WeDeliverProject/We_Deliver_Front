import React from "react";
import styled from "styled-components";
import ReviewScore from "./ReviewScore";
import ReviewDetail from "./ReviewDetail";

const Wrapper = styled.div`
  width: 900px;
`;

const Review = () => {

  

  return (
    <Wrapper>
      <ReviewScore/>
      <ReviewDetail/>
    </Wrapper>
  );
};

export default Review;
