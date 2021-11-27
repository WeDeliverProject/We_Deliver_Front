import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  position: ${(props) => (props.scrolled === true ? "fixed" : "static")};
  top: ${(props) => (props.scrolled === true ? "10px" : "100px")};
  width: 200px;
  margin-left: ${(props) => (props.scrolled === true ? "940px" : "40px")};
`;

const Basket = styled.div`
  width: 200px;
  height: 500px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const Top = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  padding: 5px;
  border-bottom: 1px solid #c4c4c4;
`;

const Order = styled.button`
  width: 200px;
  height: 45px;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: 5px;
  border: 0;
  cursor: pointer;
`;

const JointOrder = styled.button`
  width: 200px;
  height: 45px;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: 5px;
  border: 0;
  cursor: pointer;
`;

const MenuBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 250) {
        setScrolled(true);
      } else if (scrolled && window.scrollY <= 250) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Box scrolled={scrolled}>
        <Basket>
          <Top>장바구니</Top>
        </Basket>
        <Order>주문하기</Order>
        <JointOrder>공동 주문하기</JointOrder>
      </Box>
    </>
  );
};

export default MenuBar;
