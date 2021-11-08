import React from "react";
import styled from "styled-components";

const item = [
  { id: 1, name: "한식" },
  { id: 2, name: "분식" },
  { id: 3, name: "중식" },
  { id: 4, name: "야식" },
  { id: 5, name: "일식" },
];

const Wrapper = styled.div`
  border: none;
  border-bottom: 1px solid #cfcfcf;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  height: 50px;
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
        <Text>{item.name}</Text>
      ))}
    </Wrapper>
  );
};

export default Category;
