import React from "react";
import styled from "styled-components";
import ReviewScore from "./ReviewScore";
import ReviewDetail from "./ReviewDetail";

const Wrapper = styled.div`
  width: 900px;
`;

const Review = ({data}) => {

  return (
    <Wrapper>
      <ReviewScore results={data}/>
      <ReviewDetail results={data}/>
    </Wrapper>
  );
};

export default Review;
