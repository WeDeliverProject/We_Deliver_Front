/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;

const Map = ({ Lat, Lng }) => {
  useEffect(() => {
    console.log(Lat);
    console.log(Lng);
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);
  }, [Lat, Lng]);

  return (
    <div
      id="myMap"
      style={{
        marginLeft: "50px",
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
};

export default Map;
