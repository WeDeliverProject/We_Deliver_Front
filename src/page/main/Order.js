import React, { useState } from "react";
import styled from "styled-components";

import Map from "./Map";
import Tom from "../../img/TomN.jpg";

const Title = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  padding: 100px 0 35px 0;
`;

const Img = styled.img`
  width: 65px;
  height: 65px;
`;

const Detail = styled.div`
  width: 600px;
  height: 70px;
  border: 1px solid #ff5959;
  display: flex;
  margin-bottom: 30px;
`;

const StoreDetail = () => {
  return (
    <Detail>
      <Img src={Tom} alt="탐앤탐스" />
      <div>탐앤탐스</div>
      <div>14,900원</div>
      <div>8,900원</div>
      <div>1,000원</div>
    </Detail>
  );
};

const Sale = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  return (
    <>
      <Title>공동 주문</Title>
      <div style={{ display: "flex" }}>
        <div>
          <StoreDetail />
          <StoreDetail />
          <StoreDetail />
          <StoreDetail />
          <StoreDetail />
        </div>
        <div onClick={getLocation}>
          <Map Lat={lat} Lng={lng} />
        </div>
      </div>
    </>
  );
};

export default Sale;
