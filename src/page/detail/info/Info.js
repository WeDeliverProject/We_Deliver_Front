import React from "react";
import styled from "styled-components";
import Notification from "../../../img/notification.png";
import Home from "../../../img/home.png";
import Card from "../../../img/card.png";

const Wrapper = styled.div`
  width: 900px;
  border: 1px solid #c4c4c4;
  margin-top: 40px;
`;

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid #c4c4c4;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
  width: 870px;
  align-items: center;
  margin-left: 12px;
  div {
    margin-left: 5px;
  }

  img {
    width: 17px;
    height: 17px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 7px;
`

const SubName = styled.div`
  font-size: 16px;
  color: grey;
`

const SubContent = styled.div`
  font-size: 15px;
  margin-left: 30px;
`

const Content = styled.div`
  padding: 0 20px;
  padding-bottom: 20px;
`;

const Info = () => {
  return (
    <Wrapper>
      <div>
        <Title>
          <img src={Notification} alt="notification" />
          <div>사장님 알림</div>
        </Title>
        <Content>
          안녕하세요, 25년 전통 음식점 2대 주인장 김군입니다.<br/> 저희 음식점은 매일아침 신선한 재료로 주문즉시 맛있게 바로조리하여 손님 집앞까지 가능한 신속하게 배달해드리고자 노력하고있습니다. 화려하진 않아도 항상 평범하고 일정한 맛으로 찾아뵐것을 약속드리며, MSG와 나트륨 사용을 최소화하여 조금 심심하더라도 건강까지 챙기실수있도록 노력하겠습니다.
          언제 찾아주시더라도 만족하고 웃으면서 드실수있는 용문각이 되도록하겠습니다. 감사합니다.<br/>
          공지사항:주방 시설개선과 아울러 기존 주방장님께서 이제는 연로하셔서 새로운 주방장님을 모시게되었습니다. 맛도 업업,서비스도 업업..
        </Content>
      </div>
      <div>
        <Title>
          <img src={Home} alt="home" />
          <div>업체 정보</div>
        </Title>
        <Content>
          <FlexWrapper>
            <SubName>
              영업시간
            </SubName>
            <SubContent>
            10:00 - 20:30
            </SubContent>
          </FlexWrapper>
          <FlexWrapper>
            <SubName>
              전화번호
            </SubName>
            <SubContent>
             050712990119
            </SubContent>
          </FlexWrapper>
          <FlexWrapper>
            <SubName>
              주소
            </SubName>
            <SubContent style={{marginLeft:"55px"}}>
              서울 노원구 공릉동 415-62
            </SubContent>
          </FlexWrapper>
        </Content>
      </div>
      <div>
        <Title>
          <img src={Card} alt="card" />
          <div>결제 정보</div>
        </Title>
        <Content>
          <FlexWrapper>
            <SubName>
              최소주문금액
            </SubName>
            <SubContent>
              15,000원
            </SubContent>
          </FlexWrapper>
          <FlexWrapper>
            <SubName>
              결제 수단
            </SubName>
            <SubContent style={{marginLeft:"53px"}}>
              신용카드, 현금
            </SubContent>
          </FlexWrapper>
        </Content>
      </div>
      <div>
        <Title>
          <img src={Card} alt="card" />
          <div>원산지정보</div>
        </Title>
        <Content>
        쌀,돼지고기,햄:국내산<br/>
        김치,고추가루:중국산<br/>
        닭고기:브라질산<br/>
        소고기 뉴질랜드(갈비탕),미국산(소고기탕수육)차돌박이(호주산)<br/>
        오징어:수입산<br/>
        낙지:베트남<br/>
        생굴:국내산(통영)<br/>
        </Content>
      </div>
    </Wrapper>
  );
};

export default Info;
