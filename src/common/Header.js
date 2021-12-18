import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../img/logo.png";
import medal from "../img/image 12.png";
import { getDataFromStorage } from "../utils/storage";

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

const Title2 = styled.div`
  display: flex;
  margin-top: 30px;
  margin-right: 30px;
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

const NickName = styled.div`
  font-weight: bold;
`

const Nim = styled.div`
  font-weight: bold;
  color: #C4C4C4;
`

const Img = styled.img`
  width: 30px;
  height: 30px;
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

const Header = () => {
  const [user, setUser] = useState(false)
  const token = getDataFromStorage(); 

  useEffect(() => {   
    if(token === null) {
      setUser(false);
    } else {
      setUser({
        nickname: token.nickname
      })
    }
  }, [])

  return (
    <HeaderBar>
      <Title>
        <img width="120px" src={Logo} alt="logo"></img>
        <LinkTo to="main">
          <LogoText>배달만해</LogoText>
        </LinkTo>
      </Title>
      {user === false ?
        <Title>
          <LinkTo to="login">
            <SignIn>로그인</SignIn>
          </LinkTo>
          <LinkTo to="register">
            <Register>회원가입</Register>
          </LinkTo>
        </Title>
        : 
        <Title2>
          <Img src={medal} />
          <NickName>{user.nickname}</NickName>
          <Nim>님</Nim>
        </Title2>
      }
    </HeaderBar>
  );
};

export default Header;
