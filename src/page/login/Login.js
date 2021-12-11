import React, { useState } from "react";
import Logo from "../../img/logo.png";
import styled from "styled-components";
import { saveDataToStorage } from "../../utils/storage";
import { useMember } from "../../components";
import { httpClient } from "../../remote";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  div {
    color: #ff5959;
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 0 10px;
  }
`;

const Box = styled.div`
  text-align: center;
`;

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
  border: 0;
  font-size: 17px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`;

const RegisterBtn = styled.button`
  width: 500px;
  height: 46px;
  background-color: #e5e5e5;
  border: 0;
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

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
  const navigate = useNavigate();
  const { loginApi } = useMember();

  const [data, setData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    const body = {
      userId: data.id,
      password: data.password,
    };

    try {
      const response = await loginApi(body);
      const accessToken = response.data.accessToken;
      httpClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      if (response.data) {
        saveDataToStorage(response.data);
      }
      alert("로그인 성공")
      navigate("/main");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Wrapper>
      <Title>
        <img width="120px" src={Logo} alt="logo"></img>
        <div>배달만해</div>
      </Title>
      <Box>
        <div>
          <Input
            onChange={handleChange}
            name="id"
            value={data.id}
            placeholder="아이디"
          />
        </div>
        <div>
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            value={data.password}
            placeholder="비밀번호"
          />
        </div>
        <div>
          <LoginBtn onClick={onSubmitHandler}>로그인</LoginBtn>
        </div>
        <LinkTo to="/register">
          <RegisterBtn>회원가입</RegisterBtn>
        </LinkTo>
      </Box>
    </Wrapper>
  );
};

export default Login;
