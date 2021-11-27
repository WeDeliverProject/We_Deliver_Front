import React from "react";
import styled from "styled-components";
import Logo  from "../img/logo.png"
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Col } from "reactstrap";

const Wrapper = styled.div`
  text-align: center;
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
  display: grid;
  place-items: center;
  align-items: center;
  align-content: center;
  
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

const RegisterBtn = styled.button`
  width: 500px;
  height: 46px;
  background-color: #ff5959;
  border:0;
  font-size: 17px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`

const LabelText = styled.div`
  display: inline-block;
  margin-right: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  width: 150px;

  color: #3d3d3d;
  margin-top: 10px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const FormDiv = styled(FormGroup)`
  margin-bottom: 10px;
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

const Register = () => {
  return (
    <Wrapper>
      <Title>
        <img width="120px" src={Logo} alt="logo"></img>
        <div>배달만해</div>
      </Title>
      <Box>
        <Form>
            <FormDiv row>
              <LabelText>
                아이디
              </LabelText>
              <Col sm={2}><Input placeholder="아이디"/></Col>
            </FormDiv>
            <FormDiv row>
              <LabelText>
                비밀번호
              </LabelText>
              <Col sm={2}><Input type="password" placeholder="비밀번호"/></Col>
            </FormDiv>
            <FormDiv row>
              <LabelText>
                비밀번호 확인
              </LabelText>
              <Col sm={2}><Input type="password" placeholder="비밀번호 확인"/></Col>
            </FormDiv>
            <FormDiv row>
              <LabelText>닉네임</LabelText>
              <Col sm={2}><Input placeholder="닉네임"/></Col>
            </FormDiv>
          </Form>
          <LinkTo to = "/login">
            <RegisterBtn>회원가입</RegisterBtn>
          </LinkTo>
        </Box>
    </Wrapper>
  );
};

export default Register;
