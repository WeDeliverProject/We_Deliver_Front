import React, { useState, useEffect } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { useOrder, useLoading, CTLoading } from "../../components";

const OrderList = () => {
  const [num, setNum] = useState(0);
  const { loading, setLoading } = useLoading(true);
  const { listAllMy, myList } = useOrder();

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
    console.log(myList);
  }, []);
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="1">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <p>hi</p>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <p>hello</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default OrderList;
