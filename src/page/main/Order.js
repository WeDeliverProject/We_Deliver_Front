import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Map from "./Map";
import Tom from "../../img/TomN.jpg";
import { useOrder, useLoading, CTLoading } from "../../components";

const Title = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 25px;
  line-height: 23px;
  padding: 150px 0 50px 0;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;

  position: relative;
  top: -40px;
  left: 150px;
`;

const Detail = styled.div`
  width: 250px;
  margin-left: 15px;
  margin-right: 15px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 20px;

  position: relative;
`;

const Container = styled.div`
  display: flex;
  width: 600px;
  height: 500px;
  flex-wrap: wrap;
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #ced4da;

    &:hover {
      background-color: #adb5bd;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

const Store = styled.p`
  font-weight: bold;
`;

const PriceBox = styled.div`
  position: relative;
  font-size: 12px;

  top: -65px;
`;

const StoreDetail = ({data}) => {
  return (
    <Detail>
      <Store>{data.name}</Store>
      <Img src={`http://localhost:3000/${data.img}`}/>
      <PriceBox>
        <div>최소 주문 금액 : {data.min_order_amount.toLocaleString()}원</div>
        <div>현재 주문 금액 : {data.price.toLocaleString()}원</div>
        <div>배달비 : {data.delivery_fee.toLocaleString()}원</div>
      </PriceBox>
    </Detail>
  );
};

const Order = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  //const [status, setStatus] = useState(null);
  const { loading, setLoading } = useLoading(true);
  const { listAllJointOrder, jointOrderList } = useOrder();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllJointOrder();
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };

    fetch();

  }, [])

  const getLocation = () => {
    if (!navigator.geolocation) {
      //setStatus("Geolocation is not supported by your browser");
    } else {
      //setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          //setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  return (
    <>
      <Title>공동 주문</Title>
      <div style={{ display: "flex" }}>
        <div onClick={getLocation}>
          <Map Lat={lat} Lng={lng} orders={jointOrderList} />
        </div>
        <Container>
          {jointOrderList.results.map((item) => {
            return (
            <StoreDetail data={item}/>
            )})
          }
        </Container>
      </div>
    </>
  );
};

export default Order;
