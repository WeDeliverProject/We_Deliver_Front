import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useOrder, useLoading, CTLoading } from "../../components";
import { getDataFromStorage } from "../../utils/storage";

const Box = styled.div`
  position: ${(props) => (props.scrolled === true ? "fixed" : "absolute")};
  top: ${(props) => (props.scrolled === true ? "10px" : "167px")};
  margin-top : ${(props) => (props.scrolled === true ? "0px": "50px")}
  width: 200px;
  margin-left: ${(props) => (props.scrolled === true ? "940px" : "940px")};
`;

const Basket = styled.div`
  width: 200px;
  height: fit-content;
  min-height: 450px;
  border: 1px solid #c4c4c4;
  border-radius: 10px 10px 0 0;
  padding-bottom: 20px;

  div{
    vertical-align: bottom;
  }
`;

const Menu = styled.div`
  margin-top : 15px;
`

const Name = styled.div`
  font-weight: bold;  
  margin-left: 10px;
  margin-top: 5px;
`

const MenuName = styled.div`
  display: flex;
  justify-content: space-between;
`

const CancelButton = styled.button`
  background-color: white;
  border: 0;
  margin-left: 5px;
`

const PriceCount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`

const Price = styled.div`
  font-weight: bold;
  margin-top : 4px;
  margin-left: -40px;
`

const CountButton = styled.div`
  display: flex;

`

const Count = styled.div`
  font-weight: bold;
  border: solid 2px #c4c4c4;
  padding: 0 5px 0 5px;
`

const MinusButton = styled.button`
  border: solid 2px #c4c4c4;
  border-radius: 20px 0 0 20px;
  font-weight: bold;
  background-color: #c4c4c4;
  color: white;
  width: 20px;
`

const PlusButton = styled.button`
  border: solid 2px #c4c4c4;
  border-radius: 0 20px 20px 0;
  font-weight: bold;
  background-color: #c4c4c4;
  color: white;
  width: 20px;
  padding:0;
  margin-right: 5px;
`

const Top = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  padding: 5px;
  border-bottom: 1px solid #c4c4c4;
`;

const Order = styled.button`
  width: 200px;
  height: 45px;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.isAccept ? "white" : "black")};
  background-color: ${(props) => (props.isAccept ? "#FF5959": "#c4c4c4")};
  margin-top: 5px;
  border: 0;
  pointer-events: ${(props) => (props.isAccept ? "auto": "none")};
`;

const JointOrder = styled.button`
  width: 200px;
  height: 45px;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.isAccept ? "white" : "black")};
  background-color: ${(props) => (props.isAccept ? "#FF5959": "#c4c4c4")};
  margin-top: 5px;
  border: 0;
  pointer-events: ${(props) => (props.isAccept ? "auto": "none")};
`;

const Total = styled.div`
  display: flex;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  margin-top: auto;
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-top: 0;
  border-radius: 0 0 10px 10px;
  justify-content: space-between;
  vertical-align: bottom;
  div{
    margin-left:5px;
  }
`

const TotalPrice = styled.div`
  margin-right: 5px;
`

const MenuBar = ({name, data, minOrder, deliveryFee}) => {

  const { deleteApi, deleteMenu, minusCount, minusApi, plusCount, plusApi, createJointApi, createOrderApi, deleteOrder } = useOrder();

  const [scrolled, setScrolled] = useState(false);
  const {restaurantId} = useParams();

  let total = 0;
  data.results.map((item) => {
    total += item.price * item.count;
  })
  
  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 250) {
        setScrolled(true);
      } else if (scrolled && window.scrollY <= 250) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const deleteHandler = (id) => {
    const body = {
      "menuId": id,
      "restaurantId": restaurantId
    }
    try {
      deleteApi(body);
      deleteMenu(body);
    } catch(err) {
      alert(err)
    } 
  }

  const minusHandler = (id) => {
    const body = {
      "menuId": id,
      "restaurantId": restaurantId
    }
    try {
      minusCount(body);
      minusApi(body);
    } catch(err) {
      alert(err)
    } 
  }

  const plusHandler = (id) => {
    const body = {
      "menuId": id,
      "restaurantId": restaurantId
    }
    try {
      plusCount(body);
      plusApi(body);
    } catch(err) {
      alert(err)
    } 
  }
  
  const orderHandler = (item) => {
    try {
      onClickPayment(item);
    } catch(err) {
      alert(err)
    }
  }

  const orderJointHandler = () => {
    const body = {
      "price": total,
      "restaurant_id": restaurantId
    }
    try {
      createJointApi(body);
      deleteOrder();
      alert("?????? ????????? ?????????????????????.")
    } catch(err) {
      alert(err)
    }
  }

  const onClickPayment = (item) => {
    /* 1. ????????? ???????????? */
    const { IMP } = window;
    IMP.init("imp06663652");

    /* 2. ?????? ????????? ???????????? */
    const data = {
      pg: "html5_inicis", // PG???
      pay_method: "card", // ????????????
      merchant_uid: `mid_${new Date().getTime()}`, // ????????????
      amount: total + deliveryFee, // ????????????
      name: name, // ?????????
      buyer_name: "??????", // ????????? ??????
      buyer_tel: "01012341234", // ????????? ????????????
      buyer_email: "example@example", // ????????? ?????????
      buyer_addr: "????????? 661-16", // ????????? ??????
      buyer_postcode: "06018", // ????????? ????????????
    };

    /* 4. ?????? ??? ???????????? */
    IMP.request_pay(data, callback);
  }

  /* 3. ?????? ?????? ???????????? */
  function callback(response) {
    const { success, error_msg } = response;

    if (success) {
      const body = {
        "price": total,
        "restaurantId": restaurantId,
        "address": getDataFromStorage().address
      }
      alert("?????? ??????");
      deleteOrder();
      createOrderApi(body);
      alert("????????? ?????????????????????.");
      window.location.reload(false);
    } else {
      alert(`?????? ??????: ${error_msg}`);
    }
  }


  return (
    <>
      <Box scrolled={scrolled}>
        <Basket>
          <Top>????????????</Top>
          {data.results.map((item)=> {
            return (
              <Menu>
                <MenuName>
                  <Name>{item.name}</Name>
                </MenuName>
                <PriceCount>
                  <CancelButton onClick={()=> {
                      deleteHandler(item.id)
                  }}>x</CancelButton>
                  <Price>{item.price.toLocaleString()}???</Price>
                  <CountButton>
                    <MinusButton onClick={() => {
                      minusHandler(item.id)
                    }}>-</MinusButton>
                    <Count>{item.count === null ? 1 : item.count}</Count>
                    <PlusButton onClick={() => {
                      plusHandler(item.id)
                    }}>+</PlusButton>
                  </CountButton>
                </PriceCount>
              </Menu>
            )
          })}
        </Basket>
        <div>
          <Total>
            <div>?????? :</div>
            <TotalPrice>{total.toLocaleString()}???</TotalPrice>
          </Total>
        </div>
        <Order onClick={orderHandler} isAccept={total > minOrder}>????????????</Order>
        <div>
          <JointOrder onClick={orderJointHandler} isAccept={total > 0}>?????? ????????????</JointOrder>
        </div>
      </Box>
    </>
  );
};

export default MenuBar;
