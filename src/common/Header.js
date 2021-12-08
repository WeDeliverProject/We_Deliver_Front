import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../img/logo.png";

const HeaderBar = styled.div`
  width: 100%;
  height: 90px;
  background-color: #ff5959;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
`;

const SignIn = styled.button`
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 30px;
  background-color: transparent;
  border: 0;
`;

const Register = styled.button`
  font-weight: bold;
  margin-top: 30px;
  margin-right: 30px;
  background-color: transparent;
  border: 0;
`;

const LogoText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0 0 10px;
  cursor: pointer;
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

const Header = () => {
  //const [user, setUser] = useState(false)
  return (
    <HeaderBar>
      <Title>
        <img width="120px" src={Logo} alt="logo"></img>
        <LinkTo to="main">
          <LogoText>배달만해</LogoText>
        </LinkTo>
      </Title>
      <Title>
        <LinkTo to="login">
          <SignIn>로그인</SignIn>
        </LinkTo>
        <LinkTo to="register">
          <Register>회원가입</Register>
        </LinkTo>
      </Title>
    </HeaderBar>
  );
};

export default Header;
