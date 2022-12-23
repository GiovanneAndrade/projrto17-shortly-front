import React from "react";
import styled from "styled-components";
import Img from '../../assets/shortly.png'
export const Logo = () => {
  return <Containner>Shortly
    <img src={Img} />
  </Containner>;
};

export const Containner = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 200;
  font-size: 64px;
  line-height: 80px;
  gap: 8px;
`;
