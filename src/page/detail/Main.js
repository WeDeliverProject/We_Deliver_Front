import React, {useEffect} from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import TabBar from "./TabBar";
import Logo from "../../img/image 80.png";
import { useParams } from "react-router-dom";
import { CTLoading, useRestaurant, useLoading } from "../../components";

const Wrapper = styled.div`
  display: flex;
`

const Title = styled.div`
  width: 900px;
  height: 220px;
  border: 1px solid #c4c4c4;
  display: flex;
  margin-top: 80px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  padding: 10px;
  margin-left: 50px;
  margin-right: 80px;
`;

const Name = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  margin-top: 40px;
`;

const Star = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Info = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;

const Main = () => {
  const { loading, setLoading } = useLoading(true);
  const { restaurantId } = useParams();

  const { restaurantOne, getRestaurants } = useRestaurant();

  useEffect(() => {
    const fetch = async () => {
      try {
        await getRestaurants(restaurantId);
      } catch(err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [])

  return loading ? 
  <CTLoading />: (
    <Wrapper>
      <div>
        <Title>
          <Img src={`http://localhost:3000/${restaurantOne.img}`} />
          <div>
            <Name>{restaurantOne.name}</Name>
            <Star>별점 {restaurantOne.star === null ? 0.0 : restaurantOne.star}</Star>
            <Info>최소주문금액 {restaurantOne.min_order_amount.toLocaleString()}원</Info>
            <Info>배달비 {restaurantOne.delivery_fee.toLocaleString()}원~</Info>
            <Info>결제 &nbsp;&nbsp;&nbsp;카드결제, 현금</Info>
          </div>
        </Title>
        <TabBar />
      </div>
      <MenuBar />
    </Wrapper>
  );
};

export default Main;
