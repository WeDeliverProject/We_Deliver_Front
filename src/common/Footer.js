import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f2f2f2;
  margin-top: 200px;
`;

const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
`;

const Bar = styled.div`
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  height: 70px;
  text-align: center;
  padding-top: 20px;
`;

const Logo = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #c4c4c4;
`;

const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Call = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Bar>
        이용약관 | 개인정보처리방침 | 회원등급정책 | 배달만해 사장님 | 입점문의
        | 공지사항
      </Bar>
      <Box>
        <Logo>배달만해</Logo>
        <Text>
          유한책임회사 위대한상상 서울시 노원구 공릉로232 미래관 3층 | 대표자 :
          이길흥 | 사업자등록번호:012-34-5678 사업자정보확인통신판매업신고:제
          2018-서울서초-2635호 | 개인정보담당자 : privacy@wedeliver.co.kr |
          제휴문의 : partnership@wedeliver.co.kr | 고객만족센터 :
          support@wedeliver.co.kr | 호스팅 제공자: 카페24 주식회사
        </Text>
        <Call>고객만족센터 1234-5678</Call>
        <Text>
          유한책임회사 위대한상상은 통신판매중개자이며 통신판매의 당사자가
          아닙니다. 따라서 상품/ 거래정보 및 거래와 관련하여 요기요에 등록된
          판매자의 고의 또는 과실로 소비자에게 발생하는 손해에 대해 유한책임회사
          위대한상상은 책임을 지지 않습니다. 상품 및 거래에 관하여 보다 정확한
          정보는 해당 판매자에게 직접 확인하여 주시기 바랍니다. Copyright
          WeDeliver. All Rights Reserved.
        </Text>
      </Box>
    </Wrapper>
  );
};

export default Footer;
