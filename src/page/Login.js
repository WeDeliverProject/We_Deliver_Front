import React from "react";
import Logo  from "../img/logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  

  div {
    color: #FF5959;
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 0 10px;
  }
`

const Box = styled.div`
    text-align: center;
`

const Input = styled.input`
  width: 500px;
  height: 46px;
  border: 1px solid gray;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: white;
  margin: 0 auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 5px;
`;

const LoginBtn = styled.button`
    width: 500px;
    height: 46px;
    background-color: #ff5959;
    border:0;
    font-size: 17px;
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
`

const RegisterBtn = styled.button`
    width: 500px;
    height: 46px;
    background-color: #E5E5E5;
    border:0;
    font-size: 17px;
    font-weight: bold;
    color: black;
`

const LinkTo = styled(Link)`
  text-decoration: "none";

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
`;

const Login = () => {
  return (
    <Wrapper>
        <Title>
            <img width="120px" src={Logo} alt="logo"></img>
            <div>배달만해</div>
        </Title>
        <Box>
            <div><Input placeholder="아이디" /></div>
            <div><Input placeholder="비밀번호"/></div>
            <div><LoginBtn>로그인</LoginBtn></div>
            <LinkTo to="/register">
                <RegisterBtn>회원가입</RegisterBtn>
            </LinkTo>
        </Box>       
    </Wrapper>
  );
};

export default Login;
