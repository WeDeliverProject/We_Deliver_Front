import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import Sale1 from "../../img/sale1.jpg";
import Sale2 from "../../img/Sale2.jpg";
import Sale3 from "../../img/Sale3.jpg";
import Sale4 from "../../img/Sale4.jpg";

const Title = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 30px;
  line-height: 23px;
  padding: 200px 0 80px 0;
`;

const Img = styled.img`
  width: 450px;
  height: 280px;
  cursor: pointer;
  margin-right: 25px;
`;

const Sale = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <>
      <Title>오늘의 할인</Title>
      <Slider {...settings}>
        <div>
          <Img src={Sale1} alt="sale1" />
        </div>
        <div>
          <Img src={Sale2} alt="sale2" />
        </div>
        <div>
          <Img src={Sale3} alt="sale3" />
        </div>
        <div>
          <Img src={Sale4} alt="sale4" />
        </div>
      </Slider>
    </>
  );
};

export default Sale;
