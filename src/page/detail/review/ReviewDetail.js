import React from "react";
import styled from "styled-components";
import Logo from "../../../img/image 144.png";
import { Rating } from '@mui/material';

const Wrapper = styled.div`
  width: 900px;
  margin-top : 30px;
`;

const Count = styled.div`
  font-family: Roboto;
  font-size: 17px;
  font-weight: bold;
`

const Review = styled.div`
  display: flex;
  border: 1px solid #8DD6FF;
  margin-top: 20px;
  height: 300px;
  padding: 35px 35px 35px 35px;
`

const Img = styled.img`
  border-radius: 10px;
  width: 300px;
  height : 225px;
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 40px;
`

const DetailNickName = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`
const DetailContents = styled.div`
  margin: 10px 0 0 -1px;
  font-size: 17px;
  font-weight: medium;
  width: 450px;
  letter-spacing: -2px;
  line-height: 28px;
`
const Menu = styled.div`
  margin-top: auto;
  font-size: 14px;
  font-weight: bold;
  color: white;
  width: fit-content;
  background-color: #8DD6FF;
  border-radius: 20px;
  padding: 5px 20px 8px 20px;
  
`

const ReviewDetail = () => {
  return (
    <Wrapper>
        <Count>리뷰 2개</Count>
        <Review>
            <Img src={Logo}/>
            <Detail>
                <DetailNickName>
                    <div>jdyj님</div>   
                    <Rating name="read-only" value={5} style={{ color:"#FAFF00", margin:"3px 0 0 20px" }} readOnly />
                </DetailNickName>
                <DetailContents>
                    떡이 쫀득쫀득 한게 식감이 좋고 맛있어요 다음에 또 시켜 먹을게요! 먹는다구요`@@@@!!!!!!!!!!!!!!ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹㅇㄻㄴㅀㅇ어어어어어ㄴㄻㄴㅇㄹㄴ
                </DetailContents>
                <Menu>
                    [구성 1위] 떡치치 SET
                </Menu>
            </Detail>
        </Review>
        <Review>
            <Img src={Logo}/>
            <Detail>
                <DetailNickName>
                    <div>jdyj님</div>   
                    <Rating name="read-only" value={5} style={{ color:"#FAFF00", margin:"3px 0 0 20px" }} readOnly />
                </DetailNickName>
                <DetailContents>
                    떡이 쫀득쫀득 한게 식감이 좋고 맛있어요 다음에 또 시켜 먹을게요!
                </DetailContents>
                <Menu>
                    [구성 1위] 떡치치 SET
                </Menu>
            </Detail>
        </Review>
    </Wrapper>
  );
};

export default ReviewDetail;
