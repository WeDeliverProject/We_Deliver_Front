import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "../../../img/image 144.png";
import { Rating } from "@mui/material";

import { useParams } from "react-router-dom";
import { CTLoading, useLoading } from "../../../components";
import { useReview } from "../../../components/Use";

const Wrapper = styled.div`
  width: 900px;
  margin-top: 30px;
`;

const Count = styled.div`
  font-family: Roboto;
  font-size: 17px;
  font-weight: bold;
`;

const Review = styled.div`
  display: flex;
  border: 1px solid #8dd6ff;
  margin-top: 20px;
  height: 300px;
  padding: 35px 35px 35px 35px;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 300px;
  height: 225px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 40px;
`;

const DetailNickName = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;
const DetailContents = styled.div`
  margin: 10px 0 0 -1px;
  font-size: 17px;
  font-weight: medium;
  width: 450px;
  letter-spacing: -2px;
  line-height: 28px;
`;
const Menu = styled.div`
  margin-top: auto;
  font-size: 14px;
  font-weight: bold;
  color: white;
  width: fit-content;
  background-color: #8dd6ff;
  border-radius: 20px;
  padding: 5px 20px 8px 20px;
`;

const ReviewDetail = ({results}) => {

  return (
    <Wrapper>
      <Count>리뷰 {results.count}개</Count>
      {results.results.map((item) => {
        return (
          <Review>
            <Img src={`http://localhost:3000/${item.img}`} />
            <Detail>
              <DetailNickName>
                <div>{item.nickname}님</div>
                <Rating
                  name="read-only"
                  value={item.star_rating}
                  style={{ color: "#FAFF00", margin: "3px 0 0 20px" }}
                  readOnly
                />
              </DetailNickName>
              <DetailContents>{item.content}</DetailContents>
              <Menu>[구성 1위] 떡치치 SET</Menu>
            </Detail>
          </Review>
        );
      })}
    </Wrapper>
  );
};

export default ReviewDetail;
