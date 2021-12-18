import { RadioGroup } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Rating} from '@mui/material';
import { CTLoading, useMenu, useLoading, useOrder, useReview } from "../../components";

import "../../AllCss.css";
import { useParams } from "react-router-dom";
import { getDataFromStorage } from "../../utils/storage";

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgb(25, 25, 25, 0.4);
`;

const ModalBlock = styled.div`
  width: 400px;
  background-color: #fff;
  height: 500px;
  border-radius: 15px;
  padding: 30px 20px 30px 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

const CategoryName = styled.div`
  margin-top: 20px;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
    width: 100vw;
    text-align: center;
`

const CloseButton = styled.button`
  font-weight: bold;
  background: none;
  border: none;
  font-size: 18px;
  position: relative;
  top: -90px;
  left: 300px;
`;

// const Label = styled.label`
//   font-size: 18px;
//   font-family: "Nanum Gothic", sans-serif;
//   border-bottom: 1px solid #c4c4c4;
//   padding: 5px 0px 5px 0px;
// `;

const Content = styled.div`
  text-align: center;
  height:200px;
`;

const Input = styled.textarea`
    width: 330px;
    resize: none;
    background-color: #F1F1F1;
    height:140px;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Button = styled.button`
  background: #ff5959;
  color: white;
  border: none;
  width: 330px;
  height: 40px;
  font-size: 18px;
`;

const FileUpload = styled.div`
    margin-top: 10px;
`

const ReviewModal = ({ order, open, close}) => {

    const [data, setData] = useState({});
    const [image, setImage] = useState();

    const { createApi } = useReview();
    const token = getDataFromStorage();
    
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value, 
        })
    }
    const imageChange = (e) => {
        setImage(e.target.files[0]);
    };
    
    const count = order.menu.length;
    const menuName = order.menu[0].name + (count > 1 ? ` 외 ${count-1}개`: "");
    const okHandler = () => {
        if(data.star_rating && data.content && image) {
            const formData = new FormData();
            formData.append("star_rating", data.star_rating);
            formData.append("nickname", token.nickname);
            formData.append("content", data.content);
            formData.append("image", image);
            formData.append("restaurantId", order.restaurant_id);
            formData.append("orderId", order._id);
            formData.append("menu", menuName);

            try{
                createApi(formData);
                alert("리뷰가 등록되었습니다.");
                window.location.reload(false);
            } catch(err) {
                alert(err);
            } finally {
            }
        } else {
            alert("빈 칸을 채워주세요");
        }
    }

    const cancelHandler = () => {
        alert('내용은 저장되지 않습니다.');
    }

  return (
    <>
      {open && (
        <Block State={open}>
          <ModalBlock>
            <FlexWrapper>
                <Wrapper>
                    <Title>
                        {order.restaurantName}
                    </Title>
                    <div>
                        <Rating name="star_rating" onChange={changeHandler} value={data.value} defaultValue={0} size="large" style={{color : "#FAFF00"}} />
                    </div>
                </Wrapper>
            </FlexWrapper>
            <CloseButton onClick={close}>X</CloseButton>
            <Content>
                <Input placeholder="음식의 맛, 양 포장 상태 등 음식에 대한 솔직한 리뷰를 남겨주세요." name="content" onChange={changeHandler} value={data.content} />
                <FileUpload>
                    <input type="file" name="file" id="imageFileOpenInput" onChange={imageChange} accept="image/*"/>
                </FileUpload>
            </Content>
            <Button onClick={() => {okHandler()}}>작성하기</Button>
          </ModalBlock>
        </Block>
      )}
    </>
  );
};

export default ReviewModal;
