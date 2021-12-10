/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;

const Map = ({ Lat, Lng }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 2,
    };
    new kakao.maps.Map(container, options);
  }, [Lat, Lng]);

  return (
    <div
      id="myMap"
      style={{
        marginRight: "50px",
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
};

export default Map;
