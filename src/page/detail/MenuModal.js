import React, { useEffect } from "react";
import styled from "styled-components";
import { CTLoading, useMenu, useLoading } from "../../components";

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
  width: 600px;
  background-color: #fff;
  height: 600px;
  border-radius: 15px;
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

const MenuModal = ({ open, close, data }) => {

  return (
    <>
      {open && (
        <Block State={open}>
          <ModalBlock>
            <p onClick={close}>X</p>
          </ModalBlock>
        </Block>
      )}
    </>
  );
};

export default MenuModal;
