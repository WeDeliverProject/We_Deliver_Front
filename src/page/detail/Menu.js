import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CTLoading, useLoading } from "../../components";
import { useMenu } from "../../components/Use";

import MenuModal from "./MenuModal";

const Wrapper = styled.div`
  width: 800px;
`;

const Wrapper2 = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Box = styled.div`
  margin-bottom: 30px;
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
  width: 100px;
  height: 80px;
  margin-right: 20px;
`;

const Hot = ({ result }) => {
  const [Modal, setModalOpen] = useState(false);
  const [info, setInfo] = useState();

  const ModalOpen = (item) => {
    setInfo(item);
    console.log(item);
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Title>{result.category}</Title>
      <Wrapper2>
        {result.data.map((item) => {
          return (
            <Box>
              <Item onClick={() => ModalOpen(item)}>
                <ItemImg src={`http://localhost:3000/${item.img}`} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price.toLocaleString()}원</p>
                </div>
              </Item>
            </Box>
          );
        })}
        <MenuModal
          title={result.category}
          info={info}
          open={Modal}
          close={ModalClose}
        />
      </Wrapper2>
    </>
  );
};

const Menu = () => {
  const { loading, setLoading } = useLoading(true);

  const { restaurantId } = useParams();
  const { menuList, listAllMenu } = useMenu();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllMenu(restaurantId);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    console.log(menuList.results);
  }, []);

  return loading ? (
    <CTLoading />
  ) : (
    <Wrapper>
      {menuList.results.map((item) => {
        return <Hot result={item} />;
      })}
    </Wrapper>
  );
};

export default Menu;
