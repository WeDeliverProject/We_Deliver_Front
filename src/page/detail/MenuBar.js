import { getAlertUtilityClass } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useOrder, useLoading, CTLoading } from "../../components";

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
  font-weight: bold;
  margin-right: 5px;
`

const PriceCount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`

const Price = styled.div`
  font-weight: bold;
  margin-left: 10px;
  margin-top : 4px;
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
      "menuId": id
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
      "menuId": id
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
      "menuId": id
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
      "price": total
    }
    try {
      createJointApi(body);
      deleteOrder();
      alert("공동 주문이 완료되었습니다.")
    } catch(err) {
      alert(err)
    }
  }

  const onClickPayment = (item) => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp06663652");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: total + deliveryFee, // 결제금액
      name: name, // 주문명
      buyer_name: "유저", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, error_msg } = response;

    if (success) {
      alert("이거 뜨면 큰일남..!")
    } else {
      const body = {
        "price": total
      }
      alert("결제 성공");
      deleteOrder();
      createOrderApi(body);
      alert("주문이 완료되었습니다.");
    }
  }


  return (
    <>
      <Box scrolled={scrolled}>
        <Basket>
          <Top>장바구니</Top>
          {data.results.map((item)=> {
            return (
              <Menu>
                <MenuName>
                  <Name>{item.name}</Name>
                  <CancelButton onClick={()=> {
                    deleteHandler(item.id)
                  }}>x</CancelButton>
                </MenuName>
                <PriceCount>
                  <Price>{item.price.toLocaleString()}원</Price>
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
            <div>합계 :</div>
            <TotalPrice>{total.toLocaleString()}원</TotalPrice>
          </Total>
        </div>
        <Order onClick={orderHandler} isAccept={total > minOrder}>주문하기</Order>
        <div>
          <JointOrder onClick={orderJointHandler} isAccept={total > 0}>공동 주문하기</JointOrder>
        </div>
      </Box>
    </>
  );
};

export default MenuBar;
