import React, { useState } from 'react'
import styled from "styled-components";
import {Rating} from '@mui/material';

const Wrapper = styled.div`
  border: 1px solid #8DD6FF;
  width: 800px;
  height: 650px;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const OrderTitle = styled.div`
  text-align: center;
  border-bottom: 1px solid #8DD6FF;
  padding: 10px;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Input = styled.textarea`
    margin-left: 50px;
    width: 500px;
    margin-top: 50px;
    resize: none;
`

const Content = styled.div`
    display: flex;
    height: 400px;
    padding-left: 50px;

    div{
        margin-left: 50px;
        margin-top: 50px;
        font-weight:bold;
        font-size: 20px;
    }
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

const Box = styled.div`
    margin-top: 8px;
    text-align: right;
`

const FileUpload = styled.div`
    margin-top: 20px;
    margin-left:-95px;
`

const ReviewCreate = ({order, onToggle}) => {

    const [data, setData] = useState({});
    
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value, 
        })
    }
    const count = order.menu.length;
    const menuName = order.menu[0].name + (count > 1 ? ` 외 ${count-1}개`: "");

    const okHandler = () => {

        onToggle(false);
    }

    const cancelHandler = () => {
        alert('내용은 저장되지 않습니다.');
        onToggle(false);
    }

    return (
        <>
            <Box>
                <CreateReview onClick={okHandler}>확인</CreateReview>
                <CancelReview onClick={cancelHandler}>취소</CancelReview>
            </Box>
            <Wrapper>
                <OrderTitle>
                    <Title>
                        {menuName}
                    </Title>
                    <div>
                        <Rating name="star_rating" onChange={changeHandler} value={data.value} defaultValue={0} size="large" style={{color : "#FAFF00"}} />
                    </div>
                </OrderTitle>
                <Content>
                    <div>
                        리뷰
                    </div>
                    <Input name="content" onChange={changeHandler} value={data.content} />
                </Content>
                <FileUpload>
                    <input type="file" name="file" id="imageFileOpenInput" accept="image/*"/>
                </FileUpload>
            </Wrapper>
        </>
    )
}

export default ReviewCreate
