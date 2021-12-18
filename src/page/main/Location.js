import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

import "../../AllCss.css";
import Background from "../../img/location_background.jpg";
import Placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";
import { getDataFromStorage, saveDataToStorage } from "../../utils/storage";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
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

const Box = styled.div`
  width: 140px;
  height: 100%;
`;

const MiddleBox = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const InputBox = styled.div`
  display: flex;
  width: 800px;
  height: 65px;
  background-color: white;
  border-radius: 30px;
  padding: 10px 20px 10px 20px;
  margin-top: ${(props) => props.marginTop};
`;

const CurrentL = styled.div`
  border: none;
  padding: 10px 0px 0px 10px;

  width: 100px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
`;

const Input = styled.input`
  margin-left: 40px;
  border: none;
  border-left: 1px solid #cfcfcf;
  width: 640px;
  :focus {
    outline: none;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Location = ({ next, handler }) => {
  const h = window.innerHeight;

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
    width: "600px",
    bottom: "57px",
    left: "515px",
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

  const checkInput = () => {
    const token = getDataFromStorage();
    if (isAddress === "") {
      alert("주소를 입력하여 주세요.");
    }
    
    if (token === null) {
      alert("로그인 해주세요.");
    }
    
    if (token !== null && isAddress !== "") {
      let data = getDataFromStorage();
      data = {
        ...data,
        address: isAddress,
      }
      saveDataToStorage(data);
      handler();
      window.scrollTo(0, h);
    }
    
  };

  return (
    <Wrapper>
      <Img height={h} src={Background} alt="background" />
      <Black height={h}>
        <MiddleBox>
          <InputBox marginTop="150px">
            <img
              src={Placeholder}
              width="40px"
              height="40px"
              alt="placeholder"
            />
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
          <InputBox marginTop="50px">
            <Box>
              <CurrentL>상세 주소</CurrentL>
            </Box>
            <Input />
          </InputBox>
          <button className="btn hover1" onClick={checkInput}>
            WE DELIVER`
          </button>
        </MiddleBox>
      </Black>
    </Wrapper>
  );
};

export default Location;
