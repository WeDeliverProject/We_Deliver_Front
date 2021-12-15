import React, {useEffect} from "react";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import TabBar from "./TabBar";
import Logo from "../../img/image 80.png";
import { Rating } from '@mui/material';
import { useParams } from "react-router-dom";
import { CTLoading, useRestaurant, useLoading, useOrder, useReview, useMenu } from "../../components";

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
  font-weight: bold;
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
  const { orderList, listAllOrder }= useOrder();
  const { reviewList, listAllReview } = useReview();
  const { menuList, listAllMenu } = useMenu();

  useEffect(() => {
    const fetch = async () => {
      try {
        await getRestaurants(restaurantId);
        await listAllOrder();
        await listAllReview(restaurantId);
        await listAllMenu(restaurantId);
      } catch(err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [getRestaurants, listAllOrder, listAllReview])

  return loading ? 
  <CTLoading />: (
    <Wrapper>
      <div>
        <Title>
          <Img src={`http://localhost:3000/${restaurantOne.img}`} />
          <div>
            <Name>{restaurantOne.name}</Name>
            <Rating style={{ marginLeft: "0px" }} name="half-rating-read" value={restaurantOne.star === null ? 0.0 : restaurantOne.star} precision={0.05} style={{color : "#FAFF00"}} readOnly />
            <Info>최소주문금액 {restaurantOne.min_order_amount.toLocaleString()}원</Info>
            <Info>배달비 {restaurantOne.delivery_fee.toLocaleString()}원~</Info>
            <Info>결제 &nbsp;&nbsp;&nbsp;카드결제, 현금</Info>
          </div>
        </Title>
        <TabBar menu={menuList} review={reviewList} />
      </div>
      <MenuBar name={restaurantOne.name} data={orderList} minOrder={restaurantOne.min_order_amount} deliveryFee={restaurantOne.delivery_fee}/>
    </Wrapper>
  );
};

export default Main;
