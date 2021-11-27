import React, { useState } from "react";
import styled from "styled-components";

import Img from "../../img/food.jpg";
import MenuModal from "./MenuModal";

const Wrapper = styled.div`
  width: 800px;
`;

const Title = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  padding: 35px 0 35px 0;
`;

const Item = styled.div`
  width: 350px;
  height: 100px;
  border: 1px solid #c4c4c4;
  display: flex;
  padding: 10px;
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 20px;
`;

const Hot = () => {
  const [Modal, setModalOpen] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Title>인기 메뉴</Title>
      <Item onClick={ModalOpen}>
        <ItemImg src={Img} alt="임시 이미지" />
        <div>
          <p>[판매 1위] 떡순튀 SET</p>
          <p>15,000원</p>
        </div>
      </Item>
      <MenuModal open={Modal} close={ModalClose} />
    </>
  );
};

const Main = () => {
  return (
    <>
      <Title>메인 메뉴</Title>
    </>
  );
};

const Set = () => {
  return (
    <>
      <Title>세트 메뉴</Title>
    </>
  );
};

const Menu = () => {
  return (
    <Wrapper>
      <Hot />
      <Main />
      <Set />
    </Wrapper>
  );
};

export default Menu;
