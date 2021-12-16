import React,{useState} from "react";
import styled from "styled-components";
import ReviewScore from "./ReviewScore";
import ReviewDetail from "./ReviewDetail";
import ReviewCreate from "./ReviewCreate";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 900px;

`;

const ReviewDiv = styled.div`
  text-align: right;
  padding-top: 10px;
`

const CreateReview = styled.button`
  margin-right: 10px;
  padding: 5px;
  background-color: #8dd6ff;
  border:0;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding-left:10px;
  padding-right:10px;
`

const CancelReview = styled.button`
  margin-right: 10px;
  padding: 5px;
  background-color: #8dd6ff;
  border:0;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding-left:10px;
  padding-right:10px;
`

const Space = styled.div`
  margin-top: 30px;
`

const Review = ({review, order}) => {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setToggle(!toggle);
  }

  return (
    <Wrapper> 
      {toggle === false ? 
        <>
         {order._id === undefined ? 
          <Space/> :
          <ReviewDiv>
            <CreateReview onClick={clickHandler}>리뷰 작성하기</CreateReview>
          </ReviewDiv> 
          }
          <ReviewScore results={review}/>
          <ReviewDetail results={review}/> 
        </> 
      :
        <ReviewCreate order={order} onToggle={setToggle}/> 
      }
    </Wrapper>
  );
};

export default Review;
