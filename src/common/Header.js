import React from "react";
import styled from "styled-components";

import Logo from "../img/logo.png";

const HeaderBar = styled.div`
  width: 100%;
  height: 90px;
  background-color: #ff5959;
  display: flex;
`;

const LogoText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0 0 10px;
`;

const Header = () => {
  return (
    <HeaderBar>
      <img width="120px" src={Logo} alt="logo"></img>
      <LogoText>배달만해</LogoText>
    </HeaderBar>
  );
};

export default Header;
