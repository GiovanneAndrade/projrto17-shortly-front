import React from "react";
import styled from "styled-components";
export const Button = ({ text }) => {
  return <Btt>{text}</Btt>;
};
export const Btt = styled.button`
  width: 182px;
  height: 60px;
  background: #5d9040;
  border-radius: 12px;
  border: none;
  color: #fff;
  cursor: pointer;
   
  
`;
