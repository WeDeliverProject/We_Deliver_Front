import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const item = [
  { id: 1, name: "한식", url: `/menu/korean` },
  { id: 2, name: "분식", url: `/menu/snack` },
  { id: 3, name: "중식", url: `/menu/chinese` },
  { id: 4, name: "야식", url: `/menu/midnight` },
  { id: 5, name: "일식", url: `/menu/japanese` },
];

const Wrapper = styled.div`
  border: none;
  border-bottom: 1px solid #cfcfcf;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  height: 80px;
  padding-top: 30px;
`;

const Text = styled.button`
  font-weight: bold;
  width: 60px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 30px 0px 30px;
`;

const Category = () => {
  return (
    <Wrapper>
      {item.map((item) => (
        <Link key={item.id} to={item.url}>
          <Text>{item.name}</Text>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Category;
