import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import styled from "styled-components";
import Menu from "./Menu";
import Review from "./Review";
import Info from "./Info";

const Wrapper = styled.div`
  width: 800px;
  padding-left: 2px;
  margin-top: 3px;
`;

const Title = styled.div`
  width: 234px;
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  line-height: 23px;
  color: #3d3d3d;
`;

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Wrapper>
      <Nav tabs>
        <NavItem>
          <NavLink
            style={
              activeTab === "1"
                ? { border: "none", borderBottom: "5px solid #FF5959" }
                : { border: "none" }
            }
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <Title>메뉴</Title>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={
              activeTab === "2"
                ? { border: "none", borderBottom: "5px solid #FF5959" }
                : { border: "none" }
            }
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <Title>리뷰</Title>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={
              activeTab === "3"
                ? { border: "none", borderBottom: "5px solid #FF5959" }
                : { border: "none" }
            }
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <Title>정보</Title>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Menu />
        </TabPane>
        <TabPane tabId="2">
          <Review />
        </TabPane>
        <TabPane tabId="3">
          <Info />
        </TabPane>
      </TabContent>
    </Wrapper>
  );
};

export default TabBar;