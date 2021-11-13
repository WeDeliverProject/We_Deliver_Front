import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

import Background from "../../img/location_background.jpg";
import Placeholder from "../../img/placeholder.png";

const Wrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: ${(props) => props.height - 90}px;
`;

const Black = styled.div`
  background: rgba(30, 30, 30, 0.5);
  width: 100%;
  height: ${(props) => props.height - 90}px;
  position: absolute;
  top: 0px;
`;

const InputBox = styled.div`
  display: flex;
  width: 800px;
  height: 45px;
  background-color: white;
  border-radius: 30px;
  padding: 10px 20px 10px 20px;

  margin: 0 auto;
  margin-top: ${(props) => props.marginTop};
`;

const CurrentL = styled.div`
  border: none;
  border-right: 1px solid #cfcfcf;
  padding: 0px 15px 0px 10px;

  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
`;

const Input = styled.input`
  margin-left: 40px;
  border: none;
  width: 590px;
  :focus {
    outline: none;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Location = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddress, setIsAddress] = useState("");
  const [isZoneCode, setIsZoneCode] = useState();

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    if (isPopupOpen === true) {
      setIsPopupOpen(false);
    }
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    width: "650px",
    bottom: "160px",
    left: "500px",
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setIsZoneCode(data.zonecode);
    setIsAddress(fullAddress);
  };

  const h = window.innerHeight;

  return (
    <Wrapper>
      <Img height={h} src={Background} alt="background" />
      <Black height={h}>
        <div>
          <InputBox marginTop="100px">
            <img src={Placeholder} alt="placeholder" />
            <CurrentL>현재 위치</CurrentL>
            <Input
              onClick={openPostCode}
              value={isAddress}
              readOnly
              onFocus="this.blur();"
            />
            {isPopupOpen ? (
              <>
                <DaumPostcode
                  autoClose
                  onComplete={handleComplete}
                  style={postCodeStyle}
                  height={500}
                  Address={isAddress}
                  ZoneCode={isZoneCode}
                />
                <CloseButton onClick={closePostCode}>X</CloseButton>
              </>
            ) : null}
          </InputBox>
          <InputBox marginTop="30px">
            <CurrentL>상세 주소</CurrentL>
            <Input />
          </InputBox>
        </div>
      </Black>
    </Wrapper>
  );
};

export default Location;
