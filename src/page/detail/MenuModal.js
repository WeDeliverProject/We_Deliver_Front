import { RadioGroup } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { CTLoading, useMenu, useLoading } from "../../components";

import "../../AllCss.css";

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgb(25, 25, 25, 0.4);
`;

const ModalBlock = styled.div`
  width: 400px;
  background-color: #fff;
  height: 500px;
  border-radius: 15px;
  padding: 30px 20px 30px 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  font-weight: bold;
  background: none;
  border: none;
  font-size: 18px;
`;

// const Label = styled.label`
//   font-size: 18px;
//   font-family: "Nanum Gothic", sans-serif;
//   border-bottom: 1px solid #c4c4c4;
//   padding: 5px 0px 5px 0px;
// `;

const Content = styled.div`
  width: 150px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0px 20px 0px;

  .check {
    display: block;
    position: absolute;
    border: 5px solid #aaaaaa;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 30px;
    left: 20px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }
`;

const Label = styled.label`
  font-size: 18px;
  padding: 10px 0px 10px 0px;
  box-shadow: 1px 1px 2px #c4c4c4;
  padding-left: 10px;
`;

const Price = styled.span`
  font-size: 13px;
  color: grey;
`;

const Button = styled.button`
  background: #ff5959;
  color: white;
  border: none;
  width: 330px;
  height: 40px;
  font-size: 18px;
`;

const MenuModal = ({ title, open, close, info }) => {
  const [check, setCheck] = useState();
  return (
    <>
      {open && (
        <Block State={open}>
          <ModalBlock>
            <FlexWrapper>
              <h5>
                [{title}]{info.name}
              </h5>
              <CloseButton onClick={close}>X</CloseButton>
            </FlexWrapper>
            <Content>
              <img
                width="150px"
                height="150px"
                alt={info.img}
                src={`http://localhost:3000/${info.img}`}
              />
              <p>추가 옵션</p>
            </Content>
            <ul>
              {info.addition.map((item) => (
                <li>
                  <Label>
                    <input
                      type="radio"
                      value={item.name}
                      onChange={() => setCheck(item.name)}
                      checked={check === item.name}
                    />
                    {item.name}
                    <Price>(+{item.price.toLocaleString()}원)</Price>
                  </Label>
                </li>
              ))}
            </ul>

            <Button>추가하기</Button>
          </ModalBlock>
        </Block>
      )}
    </>
  );
};

export default MenuModal;
