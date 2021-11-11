import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <HeaderBar>
      <img width="120px" src={Logo} alt="logo"></img>
      <LinkTo to="main">
        <LogoText>배달만해</LogoText>
      </LinkTo>
    </HeaderBar>
  );
};

export default Header;
