import React, { useState, useEffect } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { useOrder, useLoading, CTLoading, useRestaurant } from "../../components";
import styled from "styled-components";
import "../../AllCss.css"

const Navbar = styled(Nav)`


`;

const OrderList = () => {
  
  let array = []
  const { loading, setLoading } = useLoading(true);
  const { listAllMy, myList } = useOrder();
  const { getRestaurants } = useRestaurant();

  const setArray = async () => {
    array = new Array(myList.count);
    for (let i = 0; i < myList.count; i++) {
      const response = await getRestaurants(myList.results[i].restaurant_id);
      array[i] = response.data.name;
    }
  };

  const handleSelect = (eventKey) => {
    console.log(eventKey);
    
  }

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
    setArray();
  }, []);

  return loading ? <CTLoading/> 
  : (
    <Tab.Container id="left-tabs-example" defaultActiveKey={myList.results[0]._id}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column myClass" onSelect={handleSelect}>
            {myList.results.map((item, v) => (
              <Nav.Item>
                <Nav.Link style={{ color: "black" }} eventKey={item._id}>
                  Tab {array[v]}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
        <Tab.Content>
            {myList.results.map((item) => (
              <Tab.Pane eventKey={item._id}>
                <p>배달이 완료되었어요</p>
                <p>restaurant name</p>
                <p>
                  {item.menu[0].name} 외 {item.menu.length - 1}개
                </p>
                <p>주문일시 : {item.date}</p>
                <p>공동주문 : {item.joint ? "Y" : "N"}</p>
                {item.menu.map((data) => (
                    <>
                      <p>{data.name}</p>
                      {data.addition ? (
                        <>
                          <p>기본 :{data.price}</p>
                          <p>옵션:{data.addition.price}(+원)</p>
                        </>
                      ) : (
                        <p>기본:{data.price}</p>
                      )}
                    </>
                ))}
                <p>총 주문 금액</p>
                <p>{item.price}원</p>
                <p>배달팁 </p>
                <hr></hr>
                <p>총 결제금액</p>
              </Tab.Pane>
            ))}
        </Tab.Content>

        </Col>
      </Row>
    </Tab.Container>
  );
};

export default OrderList;
