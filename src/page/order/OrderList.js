import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import {
  useOrder,
  useLoading,
  CTLoading,
  useRestaurant,
} from "../../components";

import edit from "../../img/edit.png";
import "../../AllCss.css"
import ReviewModal from "./ReviewModal";

const GreyText = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #868e96;
  height: 10px;
`;

const Name = styled.p`
  height: 20px;
  font-size: 25px;
  font-weight: bold;
`;

const GreyText2 = styled.p`
  height: 10px;
  font-size: 15px;
  color: #868e96;
`;

const MenuBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Box = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 40px;
  background: none;
  border: none;
  border-top: 1px solid #e9ecef;
  width: 100%;
  height: 50px;
  font-size: 20px;
`;

const OrderList = () => {
  const { loading, setLoading } = useLoading(true);
  const { listAllMy, myList } = useOrder();
  const [Modal, setModalOpen] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllMy();
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return loading ? (
    <CTLoading />
  ) : (
    <>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={myList.results[0]._id}
      >
        <Row>
          <Col sm={5}>
            <Nav
              style={{ flexWrap: "nowrap", height: "600px", overflowY: "scroll" }}
              fill="true"
              variant="pills"
              className="flex-column myClass"
            >
              {myList.results.map((item, v) => (
                <Nav.Item
                  style={{
                    height: "100px",
                    display: "flex",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <Nav.Link style={{ fontWeight: "bold" }} eventKey={item._id}>
                    <img
                      style={{ borderRadius: "10px", marginRight: "20px" }}
                      width="80px"
                      height="80px"
                      src={`${item.restaurantImg}`}
                      alt="img"
                    ></img>
                    {item.restaurantName}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content style={{ marginTop: "20px" }}>
              {myList.results.map((item) => (
                <Tab.Pane eventKey={item._id}>
                  <GreyText>배달이 완료되었어요</GreyText>
                  <Name>{item.restaurantName}</Name>
                  <p>
                    {item.menu[0].name} 외 {item.menu.length - 1}개
                  </p>
                  <GreyText2>주문일시 : {item.date}</GreyText2>
                  <GreyText2>공동주문 : {item.joint ? "Y" : "N"}</GreyText2>
                  <hr />
                  {item.menu.map((data) => (
                    <Box>
                      <MenuBox>
                        <p>{data.name}</p>
                        <p>{data.price}원</p>
                      </MenuBox>
                      {data.addition ? (
                        <>
                          <GreyText2> 기본 :{data.price}</GreyText2>
                          <GreyText2>옵션:{data.addition.price}(+원)</GreyText2>
                        </>
                      ) : (
                        <GreyText2>기본:{data.price}</GreyText2>
                      )}
                    </Box>
                  ))}
                  <MenuBox>
                    <p style={{ fontWeight: "bold" }}>총 주문 금액</p>
                    <p style={{ fontWeight: "bold" }}>{item.price}원</p>
                  </MenuBox>
                  <MenuBox>
                    <p style={{ fontWeight: "bold" }}>배달팁 </p>
                    <p style={{ fontWeight: "bold" }}>2000원</p>
                  </MenuBox>
                  <hr></hr>
                  <MenuBox>
                    <Name>총 결제금액</Name>
                    <Name>{item.price}원</Name>
                  </MenuBox>
                  {item.review ? (
                    <></>
                  ) : (
                    <>
                      <Button onClick={() =>{ModalOpen()}}>
                        <img width="20px" src={edit} alt="edit"></img>리뷰 작성하기
                      </Button>
                      <ReviewModal
                        open={Modal}
                        close={ModalClose}
                        order={item}/>
                    </>
                  )}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default OrderList;
