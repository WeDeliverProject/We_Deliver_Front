import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useOrder, useLoading, CTLoading } from "../../components";

import "../../AllCss.css";

const ItemImg = styled.img`
  width: 150px;
  height: 100 px;
  padding: 20px 30px 20px 30px;
  border: #d8d8d8 0.5px solid;
  border-top: none;
  border-left: none;
`;

const ItemContainer = styled.div`
  display: inline-flex;
`;

const ItemName = styled.div`
  width: 160px;
  border: #d8d8d8 0.5px solid;
  padding: 60px 20px 0px 30px;
  border-top: none;
  border-left: none;
`;

const ItemNumber = styled.input`
  width: 30px;
  height: 23px;
`;

const Number = styled.div`
  display: flex;
  width: 80px;
  border: #d8d8d8 0.5px solid;
  border-top: none;
  border-left: none;
  padding: 60px 0px 0px 40px;
`;

const ItemPrice = styled.div`
  width: 50px;
  padding: 60px 30px 0px 30px;
  border-bottom: #d8d8d8 0.5px solid;
  border-right: #d8d8d8 0.5px solid;
`;
const ItemShip = styled.div`
  width: 35px;
  padding: 60px 30px 0px 40px;
  border-right: #d8d8d8 0.5px solid;
  border-bottom: #d8d8d8 0.5px solid;
`;
const OrderState = styled.div`
  width: 70px;
  padding: 60px 30px 0px 40px;
  border: #d8d8d8 0.5px solid;
  border-left: none;
`;
const OrderDate = styled.div`
  width: 70px;
  padding: 60px 30px 0px 40px;
  border: #d8d8d8 0.5px solid;
  border-left: none;
`;

const OrderButton = styled.div`
  width: 80px;
  padding: 60px 30px 0px 40px;
  border: #d8d8d8 0.5px solid;
  border-left: none;
  border-right: none;
`;

function OrderItem({ Item }) {
  const [item, setItem] = useState({});

  const { loading, setLoading } = useLoading(true);
  const { listAllMy, myList } = useOrder();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllMy();
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    console.log(myList);
  }, []);

  return <ItemContainer></ItemContainer>;
}

export default OrderItem;
