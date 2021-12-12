/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;


function makeOverListener(map, marker, infowindow) {
  return function() {
      infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
  return function() {
      infowindow.close();
  };
}
const Map = ({ Lat, Lng, orders }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    orders.results.map((item) => {
      var imageSize = new kakao.maps.Size(24, 35);
      const latlng = new kakao.maps.LatLng(item.lng, item.lat);
    
      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: latlng, // 마커를 표시할 위치
          title : item.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
      });

      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style='position: absolute; left: 0px; top: 0px;'><div style='width:150px;padding:1px;text-align:center;'>${item.name}</div></div>` // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다 
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    })
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
